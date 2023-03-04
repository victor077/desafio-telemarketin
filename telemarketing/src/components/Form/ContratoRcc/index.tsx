import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useContratoRcc } from "../Context/ContratoRccContext";
import FormRcc from "./FormRcc";

const ContratoRcc = () => {
  const { inserirNovoObjeto, contratoRcc } = useContratoRcc();

  return (
    <>
      {contratoRcc.map((item) => (
        <FormRcc dados={item}  />
      ))}
      <Grid item xs={12}>
        <Button
          fullWidth
          onClick={(event) => inserirNovoObjeto(event.preventDefault)}
          variant="contained"
        >
          Adicionar Contrato Rcc
        </Button>
      </Grid>
    </>
  );
};


export default ContratoRcc;
