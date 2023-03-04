import React, {
  Children,
  createContext,
  MouseEventHandler,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { ContratosType, initialValuesContratoEmprestimo } from "./Types";

type ContratoCartaContextValues = {
  contratoCartao: ContratosType[];
  changeValorDataCartao: (data: ContratosType) => void;
  inserirNovoObjeto: (event: MouseEventHandler<HTMLAnchorElement>) => void;
};

const ContratoCartaContext = createContext(
  {} as ContratoCartaContextValues
);

const ContratoCartaoContextProvider = ({ children }: PropsWithChildren) => {
  const [contratoCartao, setContratoCartao] = useState<ContratosType[]>(
    initialValuesContratoEmprestimo
  );
  const changeValorDataCartao = (data: ContratosType) => {
    const valoresAtualizados = contratoCartao.map((inputs) => {
      if (inputs.id === data.id) {
        return { ...inputs, ...data };
      }
      return inputs;
    });
    setContratoCartao(valoresAtualizados);
  };

  const gerarNovoId = () => {
    let maxIdAtual = contratoCartao.reduce(
      (maxId, item) => Math.max(maxId, item.id),
      0
    );
    return maxIdAtual + 1;
  };

  const inserirNovoObjeto = (event: MouseEventHandler<HTMLAnchorElement>) => {
    // event.preventDefault()
    setContratoCartao((prevContratos) => [
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
    contratoCartao,
    changeValorDataCartao,
    inserirNovoObjeto,
  };
  return (
    <ContratoCartaContext.Provider value={values}>
      {children}
    </ContratoCartaContext.Provider>
  );
};
export const useContratoCartao = () => {
  const context = useContext(ContratoCartaContext);
  if (!context) {
    throw new Error(
      "useContrato deve ser utilizado dentro de um ContratoCartaoContextProvider"
    );
  }
  return context;
};

export default ContratoCartaoContextProvider;
