import React from 'react'

import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFormikContext } from "formik";
import { EmpréstimoConsignadoValues } from '../../Types';

const RepresentanteLegalProcurador = () => {
    const { setFieldValue, getFieldProps } =
    useFormikContext<EmpréstimoConsignadoValues>();

  const handleChangeRepresentante = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setFieldValue("possuiRepresentanteLegalProcurador", value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Possui Representante Legal Procurador</InputLabel>
      <Select
        {...getFieldProps("possuiRepresentanteLegalProcurador")}
        label="Possui Representante Legal Procurador"
        onChange={handleChangeRepresentante}
      >
        <MenuItem value={"sim"}>Sim</MenuItem>
        <MenuItem value={"nao"}>Não</MenuItem>
      </Select>
    </FormControl>
  )
}
export default RepresentanteLegalProcurador