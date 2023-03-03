import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormRcc from "./FormRcc";
import { useContratos } from "../Context/ContratosContext";
import Button from "@mui/material/Button";

const ContratoRcc = () => {
  const { contratosRcc, handleInserirContratoRcc } = useContratos();
  return (
    <>
      {contratosRcc.map(() => (
        <FormRcc />
      ))}
      <Grid item xs={6}>
        <Button
          fullWidth
          onClick={(event) => handleInserirContratoRcc(event.preventDefault)}
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
  );
};

export default ContratoRcc;
