import React from "react";

import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFormikContext } from "formik";
import { EmpréstimoConsignadoValues } from "../../Types";

const PossuiCartao = () => {
  const { setFieldValue, getFieldProps } =
    useFormikContext<EmpréstimoConsignadoValues>();

  const handleChangeCartao = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setFieldValue("margem.possuiCartao", value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Possui Cartao</InputLabel>
      <Select
        {...getFieldProps("margem.possuiCartao")}
        label="Possui Cartao"
        onChange={handleChangeCartao}
      >
        <MenuItem value={"sim"}>Sim</MenuItem>
        <MenuItem value={"nao"}>Não</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PossuiCartao;
