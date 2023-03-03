import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useContratos } from "../Context/ContratosContext";
import { Button } from "@mui/material";
import FormCartao from "./FormCartao";

const ContratoCartao = () => {
  const { contratosCartao, handleInserirContratoCartao } = useContratos();

  return (
    <>
      {contratosCartao.map(() => (
        <FormCartao />
      ))}
      <Grid item xs={6}>
        <Button
          fullWidth
          onClick={(event) => handleInserirContratoCartao(event.preventDefault)}
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
  );
};

export default ContratoCartao;
