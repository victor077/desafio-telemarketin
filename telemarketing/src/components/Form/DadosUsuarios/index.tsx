import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import EnderecoPessoal from "../EnderecoPessoal";
import { EmpréstimoConsignadoValues } from "../Types";
import { useFormikContext } from "formik";
import SituacaoBeneficio from "./SituacaoBeneficio";
import Sexo from "./Genero";
import BeneficioPermiteEmprestimo from "./BeneficioPermiteEmprestimo";
import RepresentanteLegalProcurador from "./RepresentanteLegalProcurador";
import PensaoAlimenticia from "./PensaoAlimenticia";
import BloqueioEmprestismo from "./BloqueioEmprestismo";
import Genero from "./Genero";
import InputMask from "react-input-mask";
import InputStyles from "../../InputStyles";

const DadosUsuarios = () => {
  const { getFieldProps } = useFormikContext<EmpréstimoConsignadoValues>();

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
        <label>Data Nascimento</label>
        <InputStyles {...getFieldProps("dataNascimento")} mask="date" />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("cpf")}
          fullWidth
          label="Cpf"
          inputProps={{ maxLength: 10 }}
        />
      </Grid>
      <EnderecoPessoal />
      <Grid item xs={12}></Grid>
      <Grid item xs={3}>
        <TextField {...getFieldProps("nit")} fullWidth label="Nit" />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...getFieldProps("identidade")}
          fullWidth
          label="Identidade"
          type="number"
        />
      </Grid>

      <Grid item xs={3}>
        <label htmlFor="">Dib</label>
        <InputStyles {...getFieldProps("dib")} mask="date" />
      </Grid>
      <Grid item xs={3}>
        <label>Valor Beneficio</label>
        <InputStyles
          {...getFieldProps("valorBeneficio")}
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={2}>
        <SituacaoBeneficio />
      </Grid>
      <Grid item xs={2}>
        <Genero />
      </Grid>
      <Grid item xs={2}>
        <BeneficioPermiteEmprestimo />
      </Grid>
      <Grid item xs={2}>
        <RepresentanteLegalProcurador />
      </Grid>
      <Grid item xs={2}>
        <PensaoAlimenticia />
      </Grid>
      <Grid item xs={2}>
        <BloqueioEmprestismo />
      </Grid>
      <Grid item xs={12}>
        <TextField {...getFieldProps("nomeMae")} fullWidth label="Nome Mae" />
      </Grid>

      <Grid item xs={4}>
        <TextField
          {...getFieldProps("rg")}
          fullWidth
          label="Rg"
          inputProps={{ maxLength: 9 }}
        />
      </Grid>
      <Grid item xs={4}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Ddb</label>
          <input
            style={{ padding: "8px 1px" }}
            type="text"
            pattern="\d{4}-\d{2}-\d{2}"
            {...getFieldProps("ddb")}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("naoPerturbe")}
          fullWidth
          label="Nao Perturbe"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Especie</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          {...getFieldProps("especie.codigo")}
          fullWidth
          label="Codigo"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          {...getFieldProps("especie.descricao")}
          fullWidth
          label="Descricao"
        />
      </Grid>
    </>
  );
};

export default DadosUsuarios;
