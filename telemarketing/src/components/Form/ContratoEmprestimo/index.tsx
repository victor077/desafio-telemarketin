import React, { useCallback, useState } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormEmprestimo from "./FormEmprestimo";
import { useContratos } from "../Context/ContratosContext";

// type ContratoEmprestimoProps = {
//   tipoContrato: "contratosEmprestimo" | "contratosCartao" | "contratosRcc";
// };

const ContratoEmprestimo = () => {
  const {
    contratosEmprestimo,
    handleInserirContratoEmprestimo,
    inputsValuesEmprestimo,
  } = useContratos();

  return (
    <>
      {contratosEmprestimo.map(() => (
        <FormEmprestimo />
      ))}
      <Grid item xs={6}>
        <Button
          fullWidth
          onClick={(event) =>
            handleInserirContratoEmprestimo(event.preventDefault)
          }
          variant="contained"
        >
          Adicionar Contrato Emprestimo
        </Button>
      </Grid>
    </>
  );
};

export default ContratoEmprestimo;
