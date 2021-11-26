import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

const FormPremioOpinion = ({ formik }) => (
  <>
    <Typography
      sx={{
        color: "primary.main",
        mt: 5,
        mb: 4,
      }}
      variant="h5"
    >
      Para finalizar, si gana el sorteo, ¿Qué premio preferiría?
    </Typography>

    <FormControl component="fieldset">
      <FormLabel component="legend">Premio</FormLabel>
      <RadioGroup row aria-label="Premio" onChange={formik.handleChange} value={formik.values.opinionPremio} name="opinionPremio">
        <FormControlLabel
          sx={{
            width: "100%",
          }}
          value="ordenCompra"
          control={<Radio />}
          label="Orden de Compra"
          onChange={formik.handleChange}
        />
        <FormControlLabel
          sx={{
            width: "100%",
          }}
          value="producto"
          control={<Radio />}
          label="Producto"
          onChange={formik.handleChange}
        />
        <FormControlLabel
          sx={{
            width: "100%",
          }}
          value="Cupón de descuento"
          control={<Radio />}
          label="Cupón de descuento"
          onChange={formik.handleChange}
        />
      </RadioGroup>
      <FormHelperText
        error={
          formik.touched.opinionPremio && Boolean(formik.errors.opinionPremio)
        }
      >
        {formik.touched.opinionPremio && formik.errors.opinionPremio}
      </FormHelperText>
    </FormControl>

    <FormControlLabel
      sx={{
        my: 4,
      }}
      control={
        <Checkbox
          id="deseoPromosCliente"
          name="deseoPromosCliente"
          checked={formik.values.deseoPromosCliente}
          onChange={formik.handleChange}
          color="primary"
        />
      }
      label="Deseo recibir información sobre novedades y ofertas"
    />
  </>
);

export default FormPremioOpinion;
