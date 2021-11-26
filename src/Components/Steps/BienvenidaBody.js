import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Logoempresa from "../../assets/Logo-840x840.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";

const BienvenidaBody = ({ theme }) => {
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
          align="center"
          sx={{ my: 5 }}
        >
          PARA TENER CHANCES DE GANAR NUESTRO <b>SORTEO ANIVERSARIO</b>{" "}
          NECESITAMOS QUE CONTESTES UNAS PREGUNTAS ACERCA DEL PROCESO DE COMPRA
          Y ES MUY IMPORTANTE QUE VERIFIQUES TUS DATOS DE CONTACTO POR SI
          RESULTAS <b>GANADOR/A</b>.
        </Typography>

        <Typography
          component="h2"
          variant="body1"
          align="center"
          sx={{ my: 5 }}
        >
          ¡MUCHA SUERTE!
        </Typography>
      </Box>
    </>
  );
};

export default BienvenidaBody;
