import React from "react";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FormDatos = ({ formik }) => {

  const handleConfirmDatos = () => {
    formik.setFieldTouched('apellido',true);
    formik.setFieldTouched('nombre',true);
    formik.setFieldTouched('nrotel',true);
    formik.setFieldTouched('email',true);
  }
  
  return (
    <>
      <TextField
        fullWidth
        margin="normal"
        id="nrocpr"
        name="nrocpr"
        label="Número de Comprobante"
        autoComplete="off"
        autoFocus
        value={formik.values.nrocpr}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.nrocpr && Boolean(formik.errors.nrocpr)}
        helperText={formik.touched.nrocpr && formik.errors.nrocpr}
      />

      <TextField
        fullWidth
        margin="normal"
        id="dni"
        name="dni"
        label="DNI"
        autoComplete="dni"
        value={formik.values.dni}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.dni && Boolean(formik.errors.dni)}
        helperText={formik.touched.dni && formik.errors.dni}
      />

      <TextField
        fullWidth
        margin="normal"
        id="apellido"
        name="apellido"
        label="Apellido"
        autoComplete="apellido"
        disabled={formik.values.confirmDatosCliente}
        value={formik.values.apellido}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.apellido && Boolean(formik.errors.apellido)}
        helperText={formik.touched.apellido && formik.errors.apellido}
      />

      <TextField
        fullWidth
        margin="normal"
        id="nombre"
        name="nombre"
        label="Nombres"
        autoComplete="nombre"
        disabled={formik.values.confirmDatosCliente}
        value={formik.values.nombre}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
        helperText={formik.touched.nombre && formik.errors.nombre}
      />

      <TextField
        fullWidth
        margin="normal"
        id="nrotel"
        name="nrotel"
        label="Número de Celular"
        autoComplete="nrotel"
        disabled={formik.values.confirmDatosCliente}
        value={formik.values.nrotel}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.nrotel && Boolean(formik.errors.nrotel)}
        helperText={formik.touched.nrotel && formik.errors.nrotel}
      />
      <TextField
        fullWidth
        margin="normal"
        id="email"
        name="email"
        label="Correo Electrónico"
        autoComplete="email"
        disabled={formik.values.confirmDatosCliente}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        fullWidth
        margin="normal"
        id="vendedor"
        name="vendedor"
        label="Su vendedor fue"
        type="vendedor"
        autoComplete="vendedor"
        sx={{"& .Mui-disabled":{
          WebkitTextFillColor:'#000000'
        }}}
        disabled
        value={formik.values.vendedor}
        onChange={formik.handleChange}
        error={formik.touched.vendedor && Boolean(formik.errors.vendedor)}
        helperText={formik.touched.vendedor && formik.errors.vendedor}
      />
      <TextField
        fullWidth
        margin="normal"
        id="repartidor"
        name="repartidor"
        label="Su repartidor fue"
        autoComplete="repartidor"
        disabled
        sx={{"& .Mui-disabled":{
          WebkitTextFillColor:'#000000'
        }}}
        value={formik.values.repartidor}
        onChange={formik.handleChange}
        error={formik.touched.repartidor && Boolean(formik.errors.repartidor)}
        helperText={formik.touched.repartidor && formik.errors.repartidor}
      />

      <FormControlLabel
        control={
        <Checkbox 
        id="confirmDatosCliente"
        name="confirmDatosCliente"
        checked={formik.values.confirmDatosCliente} 
        onChange={formik.handleChange}
        onBlur={handleConfirmDatos}
        color="primary"
        />
      }
        label="Confirmo que mis datos son correctos"
      />
    </>
  );
};

export default FormDatos;
