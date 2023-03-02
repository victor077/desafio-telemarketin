import React from "react";

import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFormikContext } from "formik";
import { EmpréstimoConsignadoValues } from "../../Types";

const BloqueioEmprestismo = () => {
  const { setFieldValue, getFieldProps } =
    useFormikContext<EmpréstimoConsignadoValues>();

  const handleChangeBloqueio = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setFieldValue("bloqueioEmprestismo", value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Bloqueio Emprestismo</InputLabel>
      <Select
        {...getFieldProps("bloqueioEmprestismo")}
        label="Bloqueio Emprestismo"
        onChange={handleChangeBloqueio}
      >
        <MenuItem value={"sim"}>Sim</MenuItem>
        <MenuItem value={"nao"}>Não</MenuItem>
      </Select>
    </FormControl>
  );
};

export default BloqueioEmprestismo;
