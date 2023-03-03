import React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContratos } from "../../Context/ContratosContext";

const FormRcc = () => {
  const { inputsValuesRcc, handleChangeRcc } = useContratos();
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Contrato Rcc</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="contrato"
          value={inputsValuesRcc.contrato}
          onChange={handleChangeRcc}
          fullWidth
          label="Contrato"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="dataInicioContrato"
          value={inputsValuesRcc.dataInicioContrato}
          fullWidth
          onChange={handleChangeRcc}
          label="Data Inicio do Contrato"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="competenciaInicioDesconto"
          value={inputsValuesRcc.competenciaInicioDesconto}
          fullWidth
          onChange={handleChangeRcc}
          label="Competencia Inicio Desconto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="competenciaFimDesconto"
          value={inputsValuesRcc.competenciaFimDesconto}
          fullWidth
          onChange={handleChangeRcc}
          label="competencia Fim Desconto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="dataInclusao"
          value={inputsValuesRcc.dataInclusao}
          fullWidth
          onChange={handleChangeRcc}
          label="Data Inclusao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="situacao"
          fullWidth
          onChange={handleChangeRcc}
          label="Situacao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="excluidoAps"
          value={inputsValuesRcc.excluidoAps}
          fullWidth
          onChange={handleChangeRcc}
          label="Excluido Aps"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="excluidoBanco"
          value={inputsValuesRcc.excluidoBanco}
          fullWidth
          onChange={handleChangeRcc}
          label="Excluido Banco"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="valorEmprestado"
          value={inputsValuesRcc.valorEmprestado}
          fullWidth
          onChange={handleChangeRcc}
          label="Valor Emprestado"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="valorParcela"
          value={inputsValuesRcc.valorParcela}
          fullWidth
          onChange={handleChangeRcc}
          label="Valor Parcela"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="quantidadeParcelas"
          value={inputsValuesRcc.quantidadeParcelas}
          fullWidth
          onChange={handleChangeRcc}
          label="Quantidade Parcelas"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="quantidadeParcelasEmAberto"
          value={inputsValuesRcc.quantidadeParcelasEmAberto}
          fullWidth
          onChange={handleChangeRcc}
          label="Quantidade Parcelas Em Aberto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="saldoQuitacao"
          value={inputsValuesRcc.saldoQuitacao}
          fullWidth
          onChange={handleChangeRcc}
          label="Saldo Quitacao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="taxa"
          value={inputsValuesRcc.taxa}
          fullWidth
          onChange={handleChangeRcc}
          label="Taxa"
        />
      </Grid>
    </>
  );
};

export default FormRcc;
