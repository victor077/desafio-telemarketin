import React, { useCallback } from "react";

import { Box, Button } from "@mui/material";
import useStyles from "./styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DadosUsuarios from "./DadosUsuarios";
import { Formik } from "formik";
import { ContratosEmprestimoType, EmpréstimoConsignadoValues } from "./Types";
import { initialValuesForm } from "./Utils/InitialValuesForm";
import Margem from "./Margem";
import ContratoEmprestimo from "./ContratoEmprestimo";
import { useContratos } from "./Context/ContratosContext";
import ContratoCartao from "./ContratoCartao";
import ContratoRcc from "./ContratoRcc";

const Form = () => {
  const styles = useStyles();
  const { inputsValuesCartao, inputsValuesEmprestimo, inputsValuesRcc } =
    useContratos();
  console.log("inputsCartao", inputsValuesCartao);
  console.log("inputsValuesEmprestimo", inputsValuesEmprestimo);
  console.log("inputsValuesRcc", inputsValuesRcc);


  const handleSubmit = useCallback((values: EmpréstimoConsignadoValues) => {
    console.log("submmit", values, "state", inputsValuesCartao);
  }, []);

  return (
    <>
      <Formik<EmpréstimoConsignadoValues>
        // validationSchema={}
        onSubmit={handleSubmit}
        validateOnChange
        initialValues={initialValuesForm}
      >
        {({ handleSubmit: handleFormikSubmit, errors }) => (
          <form onSubmit={handleFormikSubmit}>
            <Box sx={styles.containerBody}>
              <Typography variant="h5">Empréstimo Consignado</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "4rem",
              }}
            >
              <Grid container rowSpacing={2} columnSpacing={2}>
                <DadosUsuarios />
                <Margem />
                <ContratoEmprestimo />
                <ContratoCartao />
                <ContratoRcc />
                {/* <Grid item xs={12}>
            <Typography variant="h6">Dados Bancarios</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Nome" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Codigo" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Tipo" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Número" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Codigo" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Nome" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Cep" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Endereco" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Bairro" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Uf" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Orgao Pagador" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Tipo da Conta" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Número" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Orgao Pagador" />
          </Grid>
         
          <Grid item xs={12}>
            <Typography variant="h6">Contratos Cartao</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="contrato" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="dataInicioContrato" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="dataInclusao" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="competenciaInicioDesconto" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="competenciaFimDesconto" />
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
          <Grid item xs={12}>
            <Typography variant="h6">Tipo Emprestimo</Typography>
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
            <TextField fullWidth label="nome" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="codigo" />
          </Grid> */}
              </Grid>
            </Box>
            <Box style={{ paddingLeft: "4rem" }}>
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
