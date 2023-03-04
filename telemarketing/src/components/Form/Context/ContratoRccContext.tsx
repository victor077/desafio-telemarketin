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
    contratoRcc: ContratosType[];
    changeValorDataRcc: (data: ContratosType) => void;
    inserirNovoObjeto: (event: MouseEventHandler<HTMLAnchorElement>) => void;
  };
  
  const ContratoRccContext = createContext(
    {} as ContratoCartaContextValues
  );
  
  const ContratoRccContextProvider = ({ children }: PropsWithChildren) => {
    const [contratoRcc, setContratoRcc] = useState<ContratosType[]>(
      initialValuesContratoEmprestimo
    );
    const changeValorDataRcc = (data: ContratosType) => {
      const valoresAtualizados = contratoRcc.map((inputs) => {
        if (inputs.id === data.id) {
          return { ...inputs, ...data };
        }
        return inputs;
      });
      setContratoRcc(valoresAtualizados);
    };
  
    const gerarNovoId = () => {
      let maxIdAtual = contratoRcc.reduce(
        (maxId, item) => Math.max(maxId, item.id),
        0
      );
      return maxIdAtual + 1;
    };
  
    const inserirNovoObjeto = (event: MouseEventHandler<HTMLAnchorElement>) => {
      // event.preventDefault()
      setContratoRcc((prevContratos) => [
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
      contratoRcc,
      changeValorDataRcc,
      inserirNovoObjeto,
    };
    return (
      <ContratoRccContext.Provider value={values}>
        {children}
      </ContratoRccContext.Provider>
    );
  };
  export const useContratoRcc = () => {
    const context = useContext(ContratoRccContext);
    if (!context) {
      throw new Error(
        "useContrato deve ser utilizado dentro de um ContratoRccContextProvider"
      );
    }
    return context;
  };
  
  export default ContratoRccContextProvider;
  