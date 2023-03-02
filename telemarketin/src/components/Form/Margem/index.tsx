import React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Margem = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Margem</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="competencia" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth label="baseCalculoMargemConsignavel" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth label="margemDisponivelEmprestimo" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth label="percentualMargemDisponivelEmprestimo" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="percentualMargemTotalEmprestimo" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="quantidadeEmprestimo" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="possuiCartao" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="margemDisponivelCartao" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="percentualmargemDisponivelCartao" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="percentualMargemTotalCartao" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="margemDisponivelRcc" />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth label="margemDisponivelEmprestimoOn" />
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

export default Margem;
