import React, {
  createContext,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { ContratosEmprestimoType } from "../Types";
import { initialValuesContrato } from "../Utils/initialValuesContrato";

const listaContratos: ContratosEmprestimoType[] = [
  {
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
];

type ContratosContextValues = {
  inputsValues: ContratosEmprestimoType;
  contratos: ContratosEmprestimoType[];
  handleChange: (event: any) => void;
  handleInserirContrato: (event: MouseEventHandler<HTMLAnchorElement>) => void;
  handleDeletar: (
    event: MouseEventHandler<HTMLAnchorElement>,
    _contrato: ContratosEmprestimoType
  ) => void;
};

const ContratosContext = createContext({} as ContratosContextValues);

const ContratosContextProvider = ({ children }: PropsWithChildren) => {
  const [contratos, setContratos] =
    useState<ContratosEmprestimoType[]>(listaContratos);

  const [inputsValues, setInputValues] = useState(initialValuesContrato);

  const handleChange = (event: any) => {
    const { value, name } = event.target;

    setInputValues((prevInputs) => {
      const inputsAtt = { ...prevInputs, [name]: value };
      // console.log("inputs", inputsAtt);

      return inputsAtt;
    });
  };

  const handleInserirContrato = useCallback(
    (event: MouseEventHandler<HTMLAnchorElement>) => {
      console.log("opaaaa");
      setContratos((prevContratos) => {
        return [
          ...prevContratos,
          {
            contrato: "",
            dataInicioContrato: "",
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
        ];
      });
    },
    [setContratos]
  );

  const handleDeletar = useCallback(
    (
      event: MouseEventHandler<HTMLAnchorElement>,
      _contrato: ContratosEmprestimoType
    ) => {
      setContratos((prevContratos) => {
        const contratoFiltrado = prevContratos.filter(
          (item) => item !== _contrato
        );
        return contratoFiltrado;
      });
    },
    []
  );

  const values = {
    contratos,
    inputsValues,
    handleChange,
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
