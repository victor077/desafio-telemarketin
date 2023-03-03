import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useContratos } from "../../Context/ContratosContext";

const FormEmprestimo = () => {
  const { inputsValuesEmprestimo, handleChangeEmprestimo } = useContratos();
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Contratos Emprestimo</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="contrato"
          value={inputsValuesEmprestimo.contrato}
          onChange={handleChangeEmprestimo}
          fullWidth
          label="Contrato"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="dataInicioContrato"
          value={inputsValuesEmprestimo.dataInicioContrato}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Data Inicio do Contrato"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="competenciaInicioDesconto"
          value={inputsValuesEmprestimo.competenciaInicioDesconto}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Competencia Inicio Desconto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="competenciaFimDesconto"
          value={inputsValuesEmprestimo.competenciaFimDesconto}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="competencia Fim Desconto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="dataInclusao"
          value={inputsValuesEmprestimo.dataInclusao}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Data Inclusao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="situacao"
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Situacao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="excluidoAps"
          value={inputsValuesEmprestimo.excluidoAps}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Excluido Aps"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="excluidoBanco"
          value={inputsValuesEmprestimo.excluidoBanco}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Excluido Banco"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="valorEmprestado"
          value={inputsValuesEmprestimo.valorEmprestado}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Valor Emprestado"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="valorParcela"
          value={inputsValuesEmprestimo.valorParcela}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Valor Parcela"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="quantidadeParcelas"
          value={inputsValuesEmprestimo.quantidadeParcelas}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Quantidade Parcelas"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="quantidadeParcelasEmAberto"
          value={inputsValuesEmprestimo.quantidadeParcelasEmAberto}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Quantidade Parcelas Em Aberto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="saldoQuitacao"
          value={inputsValuesEmprestimo.saldoQuitacao}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Saldo Quitacao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="taxa"
          value={inputsValuesEmprestimo.taxa}
          fullWidth
          onChange={handleChangeEmprestimo}
          label="Taxa"
        />
      </Grid>
    </>
  );
};

export default FormEmprestimo;
