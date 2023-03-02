import React, { useCallback, useState } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormEmprestimo from "./FormEmprestimo";
import { useContratos } from "../Context/ContratosContext";

type ContratoEmprestimoProps = {
  tipoContrato: "contratosEmprestimo" | "contratosCartao" | "contratosRcc";
};

const ContratoEmprestimo = ({ tipoContrato }: ContratoEmprestimoProps) => {
  const { contratos, handleInserirContrato } = useContratos();

  return (
    <>
      {contratos.map(() => (
        <FormEmprestimo />
      ))}
      {tipoContrato === "contratosEmprestimo" && (
        <>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={(event) => handleInserirContrato(event.preventDefault)}
              variant="contained"
            >
              Adicionar Contrato Emprestimo
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined">
              Remover Contrato Emprestimo
            </Button>
          </Grid>
        </>
      )}

      {tipoContrato === "contratosCartao" && (
        <>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={(event) => handleInserirContrato(event.preventDefault)}
              variant="contained"
            >
              Adicionar Contrato Cartao
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined">
              Remover Contrato Cartao
            </Button>
          </Grid>
        </>
      )}
      {tipoContrato === "contratosRcc" && (
        <>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={(event) => handleInserirContrato(event.preventDefault)}
              variant="contained"
            >
              Adicionar Contrato Rcc
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined">
              Remover Contrato Rcc
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default ContratoEmprestimo;
