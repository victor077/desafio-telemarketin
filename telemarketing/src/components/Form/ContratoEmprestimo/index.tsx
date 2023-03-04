import React, { useCallback, useState } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormEmprestimo from "./FormEmprestimo";
import { useContratoEmprestimo } from "../Context/ContratosEmprestimoContext";

// type ContratoEmprestimoProps = {
//   tipoContrato: "contratosEmprestimo" | "contratosCartao" | "contratosRcc";
// };

const ContratoEmprestimo = () => {
  const { inserirNovoObjeto, contratoEmprestimo } = useContratoEmprestimo();

  return (
    <>
      {contratoEmprestimo.map((item) => (
        <FormEmprestimo dados={item}  />
      ))}
      <Grid item xs={12}>
        <Button
          fullWidth
          onClick={(event) => inserirNovoObjeto(event.preventDefault)}
          variant="contained"
        >
          Adicionar Contrato Emprestimo
        </Button>
      </Grid>
    </>
  );
};

export default ContratoEmprestimo;
