import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { initialValuesContrato } from "../../Utils/initialValuesContrato";
import { ContratosEmprestimoType } from "../../Types";
import { useContratos } from "../../Context/ContratosContext";

// type FormEmprestimoProps = {
//   dadosEmprestimo: ContratosEmprestimoType;
// };

const FormEmprestimo = () => {
  const { inputsValues, handleChange } = useContratos();
  return (
    <>
      <>
        <Grid item xs={12}>
          <Typography variant="h6">Contratos Emprestimo</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="contrato"
            value={inputsValues.contrato}
            onChange={handleChange}
            fullWidth
            label="Contrato"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="dataInicioContrato"
            value={inputsValues.dataInicioContrato}
            fullWidth
            onChange={handleChange}
            label="Data Inicio do Contrato"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="competenciaInicioDesconto"
            value={inputsValues.competenciaInicioDesconto}
            fullWidth
            onChange={handleChange}
            label="Competencia Inicio Desconto"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="competenciaFimDesconto"
            value={inputsValues.competenciaFimDesconto}
            fullWidth
            onChange={handleChange}
            label="competencia Fim Desconto"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="dataInclusao"
            value={inputsValues.dataInclusao}
            fullWidth
            onChange={handleChange}
            label="Data Inclusao"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="situacao"
            fullWidth
            onChange={handleChange}
            label="Situacao"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="excluidoAps"
            value={inputsValues.excluidoAps}
            fullWidth
            onChange={handleChange}
            label="Excluido Aps"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="excluidoBanco"
            value={inputsValues.excluidoBanco}
            fullWidth
            onChange={handleChange}
            label="Excluido Banco"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="valorEmprestado"
            value={inputsValues.valorEmprestado}
            fullWidth
            onChange={handleChange}
            label="Valor Emprestado"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="valorParcela"
            value={inputsValues.valorParcela}
            fullWidth
            onChange={handleChange}
            label="Valor Parcela"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="quantidadeParcelas"
            value={inputsValues.quantidadeParcelas}
            fullWidth
            onChange={handleChange}
            label="Quantidade Parcelas"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="quantidadeParcelasEmAberto"
            value={inputsValues.quantidadeParcelasEmAberto}
            fullWidth
            onChange={handleChange}
            label="Quantidade Parcelas Em Aberto"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="saldoQuitacao"
            value={inputsValues.saldoQuitacao}
            fullWidth
            onChange={handleChange}
            label="Saldo Quitacao"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="taxa"
            value={inputsValues.taxa}
            fullWidth
            onChange={handleChange}
            label="Taxa"
          />
        </Grid>
      </>
    </>
  );
};

export default FormEmprestimo;
