import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useContratos } from "../Context/ContratosContext";
import { Button } from "@mui/material";
import FormCartao from "./FormCartao";

const ContratoCartao = () => {
  const { contratos, handleInserirContrato } = useContratos();

  return (
    <>
      {contratos.map(() => (
        <FormCartao />
      ))}
      <Grid item xs={6}>
        <Button
          fullWidth
          onClick={(event) => handleInserirContrato(event.preventDefault)}
          variant="contained"
        >
          Adicionar emprestimo
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button fullWidth variant="outlined">
          Remover emprestimo
        </Button>
      </Grid>
    </>
  );
};

export default ContratoCartao;
