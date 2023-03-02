import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContratos } from "../Context/ContratosContext";
import { ContratosEmprestimoType } from "../Types";
import { initialValuesForm } from "../Utils/InitialValuesForm";

const ContratoEmprestimo = () => {
  const { contratos, handleDeletar, handleInserirContrato } = useContratos();
  const [inputsValues, setInputValues] = useState(
    initialValuesForm.contratosEmprestimo
  );
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Contratos Emprestimo</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={inputsValues.}
          onChange={(event: any) => setInputValues(inputsValues.)}
          fullWidth
          label="contrato"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="dataInicioContrato" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="competenciaInicioDesconto" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="competenciaFimDesconto" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="dataInclusao" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="situacao" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="excluidoAps" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="excluidoBanco" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="valorEmprestado" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="valorParcela" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="quantidadeParcelas" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="quantidadeParcelasEmAberto" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="saldoQuitacao" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="taxa" />
      </Grid>
    </>
  );
};

export default ContratoEmprestimo;
