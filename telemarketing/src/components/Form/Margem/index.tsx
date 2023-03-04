import React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormikContext } from "formik";
import { EmpréstimoConsignadoValues } from "../Types";
import PossuiCartao from "./PossuiCartao";
import InputStyles from "../../InputStyles";

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
        <label>Calculo Margem Consignavel</label>
        <InputStyles
          {...getFieldProps("margem.baseCalculoMargemConsignavel")}
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={4}>
        <label>Disponivel Emprestimo</label>
        <InputStyles
          {...getFieldProps("margem.margemDisponivelEmprestimo")}
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={4}>
        <label>Percentual de Margem Disponivel Emprestimo</label>
        <InputStyles
          {...getFieldProps("margem.percentualMargemDisponivelEmprestimo")}
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={3}>
        <label>Percentual de Margem Total do Emprestimo</label>
        <InputStyles
          {...getFieldProps("margem.percentualMargemTotalEmprestimo")}
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={3}>
        <label>Quantidade de Emprestimo</label>
        <InputStyles
          {...getFieldProps("margem.quantidadeEmprestimo")}
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={3}>
        <PossuiCartao />
      </Grid>
      <Grid item xs={3}>
        <label>Margem Disponivel no Cartao</label>
        <InputStyles
          {...getFieldProps("margem.margemDisponivelCartao")}
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={3}>
        <label>Percentual de Margem Disponivel no Cartao</label>
        <InputStyles
          {...getFieldProps("margem.percentualmargemDisponivelCartao")}
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={3}>
        <label>Percentual de Margem Total do Cartao</label>
        <InputStyles
          {...getFieldProps("margem.percentualMargemTotalCartao")}
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={3}>
        <label>Margem Disponivel no Rcc</label>
        <InputStyles
          {...getFieldProps("margem.margemDisponivelRcc")}
          mask="currency"
          icone="money"
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
