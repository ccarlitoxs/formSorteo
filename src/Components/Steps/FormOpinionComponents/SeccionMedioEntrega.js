import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

const SeccionMedioEntrega = ({ formik }) => (
  <>
    <Typography
      sx={{
        color: "primary.main",
        mt:1
      }}
    >
      ¿Cómo obtuviste el/los producto/s?
    </Typography>

    <FormControl component="fieldset" >
      <RadioGroup aria-label="Repartidor" name="medioEntrega" onChange={formik.handleChange} value={formik.values.medioEntrega} onFocus={formik.handleBlur}>
        <FormControlLabel value="retiroSucursal" control={<Radio />} label="Retiro en sucursal" />
        <FormControlLabel value="envioDomicilio" control={<Radio />} label="Envío a domicilio" />
      </RadioGroup>
      <FormHelperText error={formik.touched.medioEntrega && Boolean(formik.errors.medioEntrega)}>{formik.touched.medioEntrega && formik.errors.medioEntrega}</FormHelperText>
    </FormControl>
  </>
);

export default SeccionMedioEntrega;
