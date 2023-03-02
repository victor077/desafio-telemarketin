import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import EnderecoPessoal from "../EnderecoPessoal";
import Box from "@mui/material/Box";
import { EmpréstimoConsignadoValues } from "../Types";
import { useFormikContext } from "formik";

const DadosUsuarios = () => {
  const { getFieldProps, errors } = useFormikContext<EmpréstimoConsignadoValues>();
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Dados Usuarios</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField {...getFieldProps("nome")} fullWidth label="Nome" />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("beneficio")}
          fullWidth
          label="Beneficio"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("dataNascimento")}
          fullWidth
          label="Data Nascimento"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField {...getFieldProps("cpf")} fullWidth label="Cpf" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...getFieldProps("descricao")}
          fullWidth
          label="Descricao"
        />
      </Grid>
      <EnderecoPessoal />
      <Grid item xs={12}>
        <Typography variant="h6">Dados Soltos</Typography>
      </Grid>

      <Grid item xs={3}>
        <TextField {...getFieldProps("nit")} fullWidth label="Nit" />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...getFieldProps("identidade")}
          fullWidth
          label="Identidade"
        />
      </Grid>

      <Grid item xs={3}>
        <TextField {...getFieldProps("dib")} fullWidth label="Dib" />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...getFieldProps("valorBeneficio")}
          fullWidth
          label="Valor Beneficio"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          {...getFieldProps("situacaoBeneficio")}
          fullWidth
          label="Situacao Beneficio"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField {...getFieldProps("sexo")} fullWidth label="Sexo" />
      </Grid>
      <Grid item xs={2}>
        <TextField
          {...getFieldProps("beneficioPermiteEmprestimo")}
          fullWidth
          label="Beneficio Permite Emprestimo"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          {...getFieldProps("possuiRepresentanteLegalProcuradorme")}
          fullWidth
          label="Possui RepresentanteLegal Procurador"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          {...getFieldProps("pensaoAlimenticia")}
          fullWidth
          label="Pensao Alimenticia"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          {...getFieldProps("bloqueioEmprestismo")}
          fullWidth
          label="Bloqueio Emprestismo"
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Especie</Typography>
      </Grid>
      <Grid item xs={9}>
        <TextField {...getFieldProps("nomeMae")} fullWidth label="Nome Mae" />
      </Grid>
      <Grid item xs={3}>
        <TextField {...getFieldProps("codigo")} fullWidth label="Codigo" />
      </Grid>

      <Grid item xs={4}>
        <TextField {...getFieldProps("rg")} fullWidth label="Rg" />
      </Grid>
      <Grid item xs={4}>
        <TextField {...getFieldProps("ddb")} fullWidth label="Ddb" />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("naoPerturbe")}
          fullWidth
          label="Nao Perturbe"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("descontosCartao")}
          fullWidth
          label="Desconto Cartao"
        />
      </Grid>
    </>
  );
};

export default DadosUsuarios;
