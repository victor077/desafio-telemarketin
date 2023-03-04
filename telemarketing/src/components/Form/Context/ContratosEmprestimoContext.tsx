import React, {
  Children,
  createContext,
  MouseEventHandler,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { ContratosType, initialValuesContratoEmprestimo } from "./Types";

type ContratoEmprestimoContextValues = {
  contratoEmprestimo: ContratosType[];
  changeValorDataEmprestimo: (data: ContratosType) => void;
  inserirNovoObjeto: (event: MouseEventHandler<HTMLAnchorElement>) => void;
};

const ContratoEmprestimoContext = createContext(
  {} as ContratoEmprestimoContextValues
);

const ContratoEmprestimoContextProvider = ({ children }: PropsWithChildren) => {
  const [contratoEmprestimo, setContratoEmprestimo] = useState<ContratosType[]>(
    initialValuesContratoEmprestimo
  );
  const changeValorDataEmprestimo = (data: ContratosType) => {
    const valoresAtualizados = contratoEmprestimo.map((inputs) => {
      if (inputs.id === data.id) {
        return { ...inputs, ...data };
      }
      return inputs;
    });
    setContratoEmprestimo(valoresAtualizados);
  };

  const gerarNovoId = () => {
    let maxIdAtual = contratoEmprestimo.reduce(
      (maxId, item) => Math.max(maxId, item.id),
      0
    );
    return maxIdAtual + 1;
  };

  const inserirNovoObjeto = (event: MouseEventHandler<HTMLAnchorElement>) => {
    // event.preventDefault()
    setContratoEmprestimo((prevContratos) => [
      ...prevContratos,
      {
        id: gerarNovoId(),
        contrato: "",
        dataInicioContrato: "ccc",
        competenciaInicioDesconto: "",
        competenciaFimDesconto: "",
        dataInclusao: "",
        situacao: "",
        excluidoAps: "",
        excluidoBanco: "",
        valorEmprestado: 0,
        valorParcela: 0,
        quantidadeParcelas: 0,
        quantidadeParcelasEmAberto: 0,
        saldoQuitacao: 0,
        taxa: 0,
        tipoEmprestimo: {
          codigo: "",
          descricao: "",
        },
        banco: {
          codigo: "",
          nome: "",
        },
      },
    ]);
  };

  const values = {
    contratoEmprestimo,
    changeValorDataEmprestimo,
    inserirNovoObjeto,
  };
  return (
    <ContratoEmprestimoContext.Provider value={values}>
      {children}
    </ContratoEmprestimoContext.Provider>
  );
};
export const useContratoEmprestimo = () => {
  const context = useContext(ContratoEmprestimoContext);
  if (!context) {
    throw new Error(
      "useContrato deve ser utilizado dentro de um ContratoEmprestimoContextProvider"
    );
  }
  return context;
};

export default ContratoEmprestimoContextProvider;
