import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";

const SeccionSatisfaccion = ({ formik }) => (
  <>
    <Typography
      sx={{
        color: "primary.main",
        mt:1
      }}
    >
      ¿Qué tan satisfecha/o estás con nuestros servicios?
    </Typography>
    <Typography
      sx={{
        color: "#000000",
        my:1
      }}
      variant="body2"
    >
      <b>Siendo:</b> 4 = Muy satisfecho; 3 = Satisfecho; 2 = Insatisfecho; 1 = Muy insatisfecho; N/A = No aplica
    </Typography>
    <FormControl component="fieldset" sx={{width:'100%'}}>
      <FormLabel component="legend" >Vendedor</FormLabel>
      <RadioGroup row aria-label="Vendedor" name="row-radio-buttons-group" onChange={formik.handleChange} value={formik.values.opinionVendedor} onFocus={formik.handleBlur}>
        <FormControlLabel value="1" control={<Radio />} label="1" name='opinionVendedor'/>
        <FormControlLabel value="2" control={<Radio />} label="2" name='opinionVendedor'/>
        <FormControlLabel value="3" control={<Radio />} label="3" name='opinionVendedor'/>
        <FormControlLabel value="4" control={<Radio />} label="4" name='opinionVendedor'/>
      </RadioGroup>
      <FormHelperText error={formik.touched.opinionVendedor && Boolean(formik.errors.opinionVendedor)}>{formik.touched.opinionVendedor && formik.errors.opinionVendedor}</FormHelperText>
    </FormControl>

    <FormControl component="fieldset" sx={{width:'100%'}}>
      <FormLabel component="legend" >Tiempo de espera por la entrega</FormLabel>
      <RadioGroup row aria-label="TiempoEspera" name="row-radio-buttons-group" onChange={formik.handleChange} value={formik.values.opinionTiempoEspera} onFocus={formik.handleBlur}>
        <FormControlLabel value="1" control={<Radio />} label="1" name='opinionTiempoEspera'/>
        <FormControlLabel value="2" control={<Radio />} label="2" name='opinionTiempoEspera'/>
        <FormControlLabel value="3" control={<Radio />} label="3" name='opinionTiempoEspera'/>
        <FormControlLabel value="4" control={<Radio />} label="4" name='opinionTiempoEspera'/>
      </RadioGroup>
      <FormHelperText error={formik.touched.opinionTiempoEspera && Boolean(formik.errors.opinionTiempoEspera)}>{formik.touched.opinionTiempoEspera && formik.errors.opinionTiempoEspera}</FormHelperText>
    </FormControl>

    {(formik.values.repartidor!=='N/A')?
    <FormControl component="fieldset" sx={{width:'100%'}}>
      <FormLabel component="legend" >Repartidor</FormLabel>
      <RadioGroup row aria-label="Repartidor" name="row-radio-buttons-group" onChange={formik.handleChange} value={formik.values.opinionRepartidor} onFocus={formik.handleBlur}>
        <FormControlLabel value="1" control={<Radio />} label="1" name='opinionRepartidor' disabled={formik.values.repartidor === ''}/>
        <FormControlLabel value="2" control={<Radio />} label="2" name='opinionRepartidor' disabled={formik.values.repartidor === ''}/>
        <FormControlLabel value="3" control={<Radio />} label="3" name='opinionRepartidor' disabled={formik.values.repartidor === ''}/>
        <FormControlLabel value="4" control={<Radio />} label="4" name='opinionRepartidor' disabled={formik.values.repartidor === ''}/>
      </RadioGroup>
      <FormHelperText error={formik.touched.opinionRepartidor && Boolean(formik.errors.opinionRepartidor)}>{formik.touched.opinionRepartidor && formik.errors.opinionRepartidor}</FormHelperText>
    </FormControl>
    :null}

    <Typography
      sx={{
        color: "primary.main",
        mt:1
      }}
    >
    ¿Cómo podríamos mejorar?
    </Typography>

    <TextField
        fullWidth
        margin="normal"
        id="textoMejorar"
        name="textoMejorar"
        label=""
        variant="filled"
        autoComplete="off"
        multiline
          rows={2}
        value={formik.values.textoMejorar}
        onChange={formik.handleChange}
        error={formik.touched.textoMejorar && Boolean(formik.errors.textoMejorar)}
        helperText={formik.touched.textoMejorar && formik.errors.textoMejorar}
      />
  </>
);

export default SeccionSatisfaccion;
