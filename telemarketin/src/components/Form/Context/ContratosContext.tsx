import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { ContratosEmprestimoType } from "../Types";

type ContratosContextValues = {
  contratos: ContratosEmprestimoType[];
  handleInserirContrato: (contrato: ContratosEmprestimoType) => void;
  handleDeletar: (contrato: ContratosEmprestimoType) => void;
};

const ContratosContext = createContext({} as ContratosContextValues);

const ContratosContextProvider = ({ children }: PropsWithChildren) => {
  const [contratos, setContratos] = useState<ContratosEmprestimoType[]>([]);

  const handleInserirContrato = useCallback(
    (contrato: ContratosEmprestimoType) => {
      setContratos((prevContratos) => {
        return [...prevContratos, { ...contrato }];
      });
    },
    []
  );

  const handleDeletar = useCallback((contrato: ContratosEmprestimoType) => {
    setContratos((prevContratos) => {
      const contratoFiltrado = prevContratos.filter(
        (item) => item !== contrato
      );
      return contratoFiltrado;
    });
  }, []);

  const values = {
    contratos,
    handleInserirContrato,
    handleDeletar,
  };
  return (
    <ContratosContext.Provider value={values}>
      {children}
    </ContratosContext.Provider>
  );
};
export const useContratos = () => {
  const context = useContext(ContratosContext);
  if (!context) {
    throw new Error(
      "useContratos deve ser utilizado dentro de um ContratosContextProvider"
    );
  }
  return context;
};

export default ContratosContextProvider;
