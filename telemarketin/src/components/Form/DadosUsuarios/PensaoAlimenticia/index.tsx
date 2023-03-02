import React from "react";

import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFormikContext } from "formik";
import { EmpréstimoConsignadoValues } from "../../Types";

const PensaoAlimenticia = () => {
    const { setFieldValue, getFieldProps } =
    useFormikContext<EmpréstimoConsignadoValues>();

  const handleChangePensao = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setFieldValue("pensaoAlimenticia", value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Pensao Alimenticia</InputLabel>
      <Select
        {...getFieldProps("pensaoAlimenticia")}
        label="Pensao Alimenticia"
        onChange={handleChangePensao}
      >
        <MenuItem value={"sim"}>Sim</MenuItem>
        <MenuItem value={"nao"}>Não</MenuItem>
      </Select>
    </FormControl>
  )
};

export default PensaoAlimenticia;
