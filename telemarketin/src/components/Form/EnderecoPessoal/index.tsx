import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useFormikContext } from "formik";
import { EmpréstimoConsignadoValues } from "../Types";
import { initialValuesForm } from "../Utils/InitialValuesForm";

const EnderecoPessoal = () => {
  const { getFieldProps, errors } =
    useFormikContext<EmpréstimoConsignadoValues>();
  return (
    <>
      <Grid item xs={6}>
        <TextField
          {...getFieldProps("enderecoPessoal.cep")}
          fullWidth
          label="Cep"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          {...getFieldProps("enderecoPessoal.endereco")}
          fullWidth
          label="Endereço"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("enderecoPessoal.cidade")}
          fullWidth
          label="Cidade"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("enderecoPessoal.bairro")}
          fullWidth
          label="Bairro"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...getFieldProps("enderecoPessoal.uf")}
          fullWidth
          label="Uf"
        />
      </Grid>
    </>
  );
};

export default EnderecoPessoal;
