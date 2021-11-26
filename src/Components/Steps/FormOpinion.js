import React from "react";
import SeccionMedioCompra from "./FormOpinionComponents/SeccionMedioCompra";
import SeccionMedioEntrega from "./FormOpinionComponents/SeccionMedioEntrega";
import SeccionSatisfaccion from "./FormOpinionComponents/SeccionSatisfaccion";

const FormOpinion = ({ formik }) => {
  return (
    <>
      <SeccionMedioCompra formik={formik} />
      <SeccionMedioEntrega formik={formik} />
      <SeccionSatisfaccion formik={formik} />
    </>
  );
};

export default FormOpinion;
