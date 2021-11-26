import React, { useEffect } from "react";

import axios from "axios";

import { useFormik } from "formik";
import ValidationSchema from "./ValidationSchema";
import Copyright from "./Copyright";

import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Logoempresa from "../assets/Logo-840x840.png";

import Bienvenida from "./Steps/Bienvenida";
import BienvenidaBody from "./Steps/BienvenidaBody";
import FormDatos from "./Steps/FormDatos";
import FormOpinion from "./Steps/FormOpinion";
import FormPremioOpinion from "./Steps/FormPremioOpinion";
import SubmitPage from "./Steps/SubmitPage";

// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const getStepContent = (activeStep, formik, theme) => {
  switch (activeStep) {
    case 0:
      return <BienvenidaBody theme={theme} />;
    case 1:
      return <FormDatos formik={formik} />;
    case 2:
      return <FormOpinion formik={formik} />;
    case 3:
      return <FormPremioOpinion formik={formik} />;
    default:
      return "Error, recargue la pagina";
  }
};

const enabledNextBtn = (activeStep, formik) => {
  switch (activeStep) {
    case 0:
      return false;
    case 1:
      return (
        !formik.values.confirmDatosCliente ||
        !!formik.errors.apellido ||
        !!formik.errors.nombre ||
        !!formik.errors.nrotel ||
        !!formik.errors.email ||
        !!formik.errors.dni ||
        !!formik.errors.nrocpr
      );
    case 2:
      return (
        !formik.touched.medioCompra ||
        !formik.touched.medioEntrega ||
        !formik.touched.opinionTiempoEspera ||
        !formik.touched.opinionVendedor
      );
    default:
      return false;
  }
};
const steps = ["Bienvenida", "Datos", "Opinion", "OpinionPremio", "submit"];

const theme = createTheme({
  palette: {
    primary: { main: "#ee1b3b" },
    secondary: { main: "#F4D6CC" },
  },
});

const Form = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const formik = useFormik({
    initialValues: {
      nrocpr: "",
      email: "",
      dni: "",
      apellido: "",
      nombre: "",
      nrotel: "",
      vendedor: "",
      repartidor: "",
      confirmDatosCliente: false,
      medioCompra: [],
      medioEntrega: [],
      opinionRepartidor: "",
      opinionTiempoEspera: "",
      opinionVendedor: "",
      textoMejorar: "",
      opinionPremio: "",
      deseoPromosCliente: true,
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {

      axios({
        method: "post",
        url: `${process.env.REACT_APP_BACKEND_URL}/api/dinamicFront/form/data`,
        headers: {
          "x-auth-token": process.env.REACT_APP_TOKEN,
          "Content-Type": "application/json",
        },
        data: values,
      })
        .then(function ({ data }) {
          setActiveStep(4);
        })
        .catch(function ({ response }) {
          formik.setSubmitting(false);
          formik.resetForm();
          formik.setFieldError(
            "opinionPremio",
            "Lo sentimos, ha ocurrido un error, intente nuevamente o comuniquese con la empresa"
          );
        });
    },
  });

  useEffect(() => {
    let isCurrent = true;
    // your business logic around when to fetch goes here.

    //TO DO: VERIFICAR QUE EL NUMERO DE COMPROBANTE NO HAYA SIDO CARGADO EN MONGODB

    if (formik.touched.nrocpr) {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/api/dinamicFront/form/data/${formik.values.nrocpr}`,
        headers: {
          "x-auth-token": process.env.REACT_APP_TOKEN,
        },
      })
        .then(function ({ data }) {
        })
        .catch(function ({ response }) {
          if (response?.status === 404) {
            formik.setFieldError(
              "nrocpr",
              "Este comprobante ya ha sido cargado"
            );
          }
        });
    
    if (
      formik.values.nrocpr !== "" &&
      formik.values.dni !== "" &&
      !formik.errors.nrocpr &&
      !formik.errors.dni
    ) {
      if (!!isCurrent) {
        axios({
          method: "get",
          url: `${process.env.REACT_APP_BACKEND_URL}/api/dinamicFront/form/data/${formik.values.dni}/${formik.values.nrocpr}`,
          headers: {
            "x-auth-token": process.env.REACT_APP_TOKEN,
          },
        })
          .then(function ({ data }) {
            const hayRepartidor = Object.keys(data).some(
              (campo) => campo === "repartidor"
            );
            if (!hayRepartidor) {
              formik.setFieldValue("opinionRepartidor", "N/A");
            }
            for (const campo in data) {
              formik.setFieldValue(campo, data[campo]);
            }
          })
          .catch(function ({ response }) {
            formik.setFieldError(
              "nrocpr",
              "Lo sentimos, ha ocurrido un error, comuniquese con la empresa"
            );
            if (response?.status === 404) {
              formik.setFieldError(
                "nrocpr",
                "Número de Comprobante inválido, intente nuevamente"
              );
            } else if (response?.status === 400) {
              formik.setFieldError("nrocpr", response.data.msg);
            }
          });
      }
    }
  }
    return () => {
      isCurrent = false;
    };
  }, [formik.values.dni,formik.values.nrocpr,formik.errors.nrocpr,formik.errors.dni]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        {/* Side Logo */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Logoempresa})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />

        {/* formulario */}
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ bgcolor: "secondary.main" }}
        >
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {activeStep === 0 ? <Bienvenida /> : null}
            <form style={{ width: "100%" }}>
              <Box sx={{ mt: 1 }}>
                {activeStep === maxSteps - 1 ? (
                  <SubmitPage theme={theme} />
                ) : (
                  <>{getStepContent(activeStep, formik, theme)}</>
                )}
                {activeStep !== maxSteps - 1 ? (
                  <MobileStepper
                    variant="progress"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    sx={{ flexGrow: 1, bgcolor: "secondary.main", mt: 1 }}
                    nextButton={
                      activeStep === 0 ? (
                        <Button
                          size="small"
                          variant="contained"
                          onClick={handleNext}
                          sx={{ ml: 1 }}
                        >
                          COMENZAR
                          <KeyboardArrowRight />
                        </Button>
                      ) : activeStep !== maxSteps - 2 ? (
                        <Button
                          size="small"
                          onClick={handleNext}
                          disabled={enabledNextBtn(activeStep, formik)}
                        >
                          SIGUIENTE
                          {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                          ) : (
                            <KeyboardArrowRight />
                          )}
                        </Button>
                      ) : formik.isValid ? (
                        <Button
                          size="small"
                          variant="contained"
                          onClick={formik.handleSubmit}
                          disabled={formik.isSubmitting}
                        >
                          ENVIAR
                        </Button>
                      ) : (
                        <Button size="small" variant="contained" disabled>
                          Faltan Datos
                        </Button>
                      )
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        ATRAS
                      </Button>
                    }
                  />
                ) : null}
                <Copyright sx={{ mt: 2 }} />
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Form;
