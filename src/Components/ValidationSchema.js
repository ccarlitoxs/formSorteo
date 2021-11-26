import * as yup from "yup";

const ValidationSchema = yup.object({
  email: yup
    .string("Ingresa tu email")
    .email("Ingresa un email válido")
    .required("Campo Obligatorio"),
  dni: yup
    .number("Ingresa tu DNI")
    .min(1000000, "DNI inválido")
    .max(99999999, "DNI inválido")
    .integer("DNI inválido")
    .required("Campo Obligatorio"),
  apellido: yup
    .string("Ingresa tu apellido")
    .trim("Apellido inválido,checkea espacios")
    .required("Campo Obligatorio"),
  nombre: yup
    .string("Ingresa tu apellido")
    .trim("Apellido inválido,checkea espacios")
    .required("Campo Obligatorio"),
  nrotel: yup
    .number("Ingresa tu Número de celular")
    .min(1000000000, "Número de celular inválido")
    .max(9999999999, "Número de celular inválido")
    .integer("Número de celular inválido")
    .required("Campo Obligatorio"),
  nrocpr: yup
    .number("Ingresa tu Número de Comprobante")
    .min(2409, "Número de Comprobante inválido")
    .max(999999, "Número de Comprobante inválido")
    .integer("Número de Comprobante inválido")
    .required("Campo Obligatorio"),
  medioCompra: yup
    .string("Selecciona una opción")
    .required("Campo Obligatorio"),
  medioEntrega: yup
    .string("Selecciona una opción")
    .required("Campo Obligatorio"),
  opinionVendedor: yup
    .string("Selecciona una opción")
    .required("Campo Obligatorio"),
  opinionTiempoEspera: yup
    .string("Selecciona una opción")
    .required("Campo Obligatorio"),
  opinionRepartidor: yup
    .string("Selecciona una opción")
    .required("Campo Obligatorio"),
  opinionPremio: yup
    .string("Selecciona una opción")
    .required("Campo Obligatorio"),
});

export default ValidationSchema;
