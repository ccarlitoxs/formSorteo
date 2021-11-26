import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";

const SeccionMedioCompra = ({ formik }) => (
  <>
    <Typography
      sx={{
        color: "primary.main",
      }}
    >
      ¿A través de qué medio realizaste la compra?
    </Typography>

    <FormControl component="fieldset" >
      <RadioGroup aria-label="Repartidor" name="medioCompra" onChange={formik.handleChange} value={formik.values.medioCompra} onFocus={formik.handleBlur}>
        <FormControlLabel value="localComercial" control={<Radio />} label="Local Comercial" />
        <FormControlLabel value="atencionTelefonica" control={<Radio />} label="Atención Telefónica" />
        <FormControlLabel value="redesSociales" control={<Radio />} label="Redes Sociales (Facebook o Instagram)" />
        <FormControlLabel value="whatsapp" control={<Radio />} label="Whatsapp" />
      </RadioGroup>
      <FormHelperText error={formik.touched.medioCompra && Boolean(formik.errors.medioCompra)}>{formik.touched.medioCompra && formik.errors.medioCompra}</FormHelperText>
    </FormControl>
  </>
);

export default SeccionMedioCompra;
