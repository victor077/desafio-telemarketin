import React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContratos } from "../../Context/ContratosContext";
import Button from "@mui/material/Button";

const FormCartao = () => {
  const { inputsValuesCartao, handleChangeCartao } = useContratos();
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Contratos Cartão</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="contrato"
          value={inputsValuesCartao.contrato}
          onChange={handleChangeCartao}
          fullWidth
          label="Contrato"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="dataInicioContrato"
          value={inputsValuesCartao.dataInicioContrato}
          fullWidth
          onChange={handleChangeCartao}
          label="Data Inicio do Contrato"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="competenciaInicioDesconto"
          value={inputsValuesCartao.competenciaInicioDesconto}
          fullWidth
          onChange={handleChangeCartao}
          label="Competencia Inicio Desconto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="competenciaFimDesconto"
          value={inputsValuesCartao.competenciaFimDesconto}
          fullWidth
          onChange={handleChangeCartao}
          label="competencia Fim Desconto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="dataInclusao"
          value={inputsValuesCartao.dataInclusao}
          fullWidth
          onChange={handleChangeCartao}
          label="Data Inclusao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="situacao"
          fullWidth
          onChange={handleChangeCartao}
          label="Situacao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="excluidoAps"
          value={inputsValuesCartao.excluidoAps}
          fullWidth
          onChange={handleChangeCartao}
          label="Excluido Aps"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="excluidoBanco"
          value={inputsValuesCartao.excluidoBanco}
          fullWidth
          onChange={handleChangeCartao}
          label="Excluido Banco"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="valorEmprestado"
          value={inputsValuesCartao.valorEmprestado}
          fullWidth
          onChange={handleChangeCartao}
          label="Valor Emprestado"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="valorParcela"
          value={inputsValuesCartao.valorParcela}
          fullWidth
          onChange={handleChangeCartao}
          label="Valor Parcela"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="quantidadeParcelas"
          value={inputsValuesCartao.quantidadeParcelas}
          fullWidth
          onChange={handleChangeCartao}
          label="Quantidade Parcelas"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="quantidadeParcelasEmAberto"
          value={inputsValuesCartao.quantidadeParcelasEmAberto}
          fullWidth
          onChange={handleChangeCartao}
          label="Quantidade Parcelas Em Aberto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="saldoQuitacao"
          value={inputsValuesCartao.saldoQuitacao}
          fullWidth
          onChange={handleChangeCartao}
          label="Saldo Quitacao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="taxa"
          value={inputsValuesCartao.taxa}
          fullWidth
          onChange={handleChangeCartao}
          label="Taxa"
        />
      </Grid>
    </>
  );
};

export default FormCartao;
