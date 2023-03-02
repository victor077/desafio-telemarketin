import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const ContratoCartao = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">contratosCartao</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="contrato" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth label="dataInicioContrato" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth label="dataInclusao" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth label="situacao" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="excluidoAps" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="excluidoBanco" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="limiteCartao" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="valorReservado" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">tipoEmprestimo</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="codigo" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="descricao" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Banco</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="codigo" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="nome" />
      </Grid>
    </>
  );
};

export default ContratoCartao;
