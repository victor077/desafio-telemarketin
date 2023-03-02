import React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormikContext } from "formik";
import { EmpréstimoConsignadoValues } from "../Types";
import PossuiCartao from "./PossuiCartao";

const Margem = () => {
  const { getFieldProps } = useFormikContext<EmpréstimoConsignadoValues>();
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Margem</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...getFieldProps("margem.competencia")}
          fullWidth
          label="Competencia"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("margem.baseCalculoMargemConsignavel")}
          fullWidth
          label="Calculo Margem Consignavel"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("margem.margemDisponivelEmprestimo")}
          fullWidth
          label="Disponivel Emprestimo"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("margem.percentualMargemDisponivelEmprestimo")}
          fullWidth
          label="Percentual de Margem Disponivel Emprestimo"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...getFieldProps("margem.percentualMargemTotalEmprestimo")}
          fullWidth
          label="Percentual de Margem Total do Emprestimo"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...getFieldProps("margem.quantidadeEmprestimo")}
          fullWidth
          label="Quantidade de Emprestimo"
        />
      </Grid>
      <Grid item xs={3}>
        <PossuiCartao />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...getFieldProps("margem.margemDisponivelCartao")}
          fullWidth
          label="Margem Disponivel no Cartao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...getFieldProps("margem.percentualmargemDisponivelCartao")}
          fullWidth
          label="Percentual de Margem Disponivel no Cartao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...getFieldProps("margem.percentualMargemTotalCartao")}
          fullWidth
          label="Percentual de Margem Total do Cartao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...getFieldProps("margem.margemDisponivelRcc")}
          fullWidth
          label="Margem Disponivel no Rcc"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...getFieldProps("margem.percentualMargemDisponivelEmprestimo")}
          fullWidth
          label="Margem Disponivel no Emprestimo On"
        />
      </Grid>
    </>
  );
};

export default Margem;
