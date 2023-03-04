import React, { FormEvent, InputHTMLAttributes, useCallback } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  mask: "currency" | "date";
  icone?: string;
};
const InputStyles = ({ mask, icone, ...props }: InputProps) => {
  const handleCurrency = (e: FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.currentTarget.value = value;
    return e;
  };

  const handleDate = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 10;
    let value = e.currentTarget.value;
    if (!value.match(/^(\d{4})\/(\d{2})\/(\d{2})$/)) {
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
      value = value.replace(/(\d{2})(\d)/, "$1-$2");
      e.currentTarget.value = value;
    }
    return e;
  };

  const handleChangeCapture = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      if (mask === "currency") {
        handleCurrency(e);
      }

      if (mask === "date") {
        handleDate(e);
      }
    },
    [mask]
  );
  return (
    <div
      style={{
        display: "flex",
        border: "0.5px solid #c4c4c4",
        width: "100%",
        height: "35px",
      }}
    >
      <span
        style={{
          background: "#dfdcdc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icone && <AttachMoneyIcon color="success" />}
      </span>
      <input
        style={{
          border: "1px solid transparent",
          width: "100%",
          outline: "none",
          paddingLeft: "10px",
        }}
        {...props}
        onChangeCapture={handleChangeCapture}
      />
    </div>
  );
};

export default InputStyles;
