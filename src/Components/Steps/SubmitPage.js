import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Logoempresa from "../../assets/Logo-840x840.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";

const SubmitPage = ({ theme }) => {
  const mostrarLogo = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          my: 2,
          mx: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ my: 4 }} component="h1" variant="h5" align="center">
            YA ESTAS PARTICIPANDO EN NUESTRO SORTEO ANIVERSARIO
        </Typography>
        {mostrarLogo ? (
          <Card sx={{ my: 2, width: "100%" }}>
            <CardMedia
              component="img"
              height="140"
              image={Logoempresa}
              alt="Logo empresa"
            />
          </Card>
        ) : null}

        <Typography
          component="h2"
          variant="body1"
          sx={{ my: 3 ,width:"100%"}}
        >
            <b>Te agradecemos por tu tiempo. </b>
        </Typography>

        <Typography
          component="h2"
          variant="body1"
          sx={{ my: 2,width:"100%" }}
        >
          No olvides que se sortea el día <b>30/11/2021.</b>
        </Typography>

        <Typography
          component="h2"
          variant="body1"
          sx={{ my: 2,width:"100%" }}
        >
          Si resultas ganador/a te contactaremos a través de los medios que completaste al inicio del formulario.
        </Typography>
      </Box>
    </>
  );
};

export default SubmitPage;
