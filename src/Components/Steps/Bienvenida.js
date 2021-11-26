import React from "react";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";


const Bienvenida = () => {
  return (
    <>
      <Avatar sx={{ m: 1, mt: 5, bgcolor: "primary.main" }}>
        <FormatListNumberedIcon />
      </Avatar>
      <Typography component="h1" variant="h3">
        BIENVENIDOS
      </Typography>
    </>
  );
};

export default Bienvenida;
