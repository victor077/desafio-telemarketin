import React from "react";

import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFormikContext } from "formik";
import { EmpréstimoConsignadoValues } from "../../Types";

const Sexo = () => {
  const { setFieldValue, getFieldProps } =
    useFormikContext<EmpréstimoConsignadoValues>();

  const handleChangeSexo = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setFieldValue("sexo", value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Sexo</InputLabel>
      <Select
        {...getFieldProps("sexo")}
        label="Sexo"
        onChange={handleChangeSexo}
      >
        <MenuItem value={"feminino"}>Feminino</MenuItem>
        <MenuItem value={"masculino"}>Masculino</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sexo;
