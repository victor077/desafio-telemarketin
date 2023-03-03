import React from "react";

import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFormikContext } from "formik";
import { EmpréstimoConsignadoValues } from "../../Types";

const BeneficioPermiteEmprestimo = () => {
  const { setFieldValue, getFieldProps } =
    useFormikContext<EmpréstimoConsignadoValues>();

  const handleChangeBeneficio = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setFieldValue("beneficioPermiteEmprestimo", value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Beneficio Permite Emprestimo</InputLabel>
      <Select
        {...getFieldProps("beneficioPermiteEmprestimo")}
        label="Beneficio Permite Emprestimo"
        onChange={handleChangeBeneficio}
      >
        <MenuItem value={"sim"}>Sim</MenuItem>
        <MenuItem value={"nao"}>Não</MenuItem>
      </Select>
    </FormControl>
  );
};

export default BeneficioPermiteEmprestimo;
