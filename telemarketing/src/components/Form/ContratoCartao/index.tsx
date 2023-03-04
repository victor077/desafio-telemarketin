import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import FormCartao from "./FormCartao";
import { useContratoCartao } from "../Context/ContratoCartaoContext";

const ContratoCartao = () => {
  const { inserirNovoObjeto, contratoCartao } = useContratoCartao();

  return (
    <>
      {contratoCartao.map((item) => (
        <FormCartao dados={item}  />
      ))}
      <Grid item xs={12}>
        <Button
          fullWidth
          onClick={(event) => inserirNovoObjeto(event.preventDefault)}
          variant="contained"
        >
          Adicionar Contrato Cartao
        </Button>
      </Grid>
    </>
  );
};


export default ContratoCartao;
