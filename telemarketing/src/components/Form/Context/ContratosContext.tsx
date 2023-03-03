import React, {
  createContext,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { ContratosEmprestimoType } from "../Types";
import {
  initialValuesContratoCartao,
  initialValuesContratoEmprestimo,
  initialValuesContratoRcc,
} from "../Utils/initialValuesContrato";

const listaContratosEmprestimo: ContratosEmprestimoType[] = [
  {
    id: 1,
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

const listaContratosCartao: ContratosEmprestimoType[] = [
  {
    id: 1,
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

const listaContratosRcc: ContratosEmprestimoType[] = [
  {
    id: 1,
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
  inputsValuesEmprestimo: ContratosEmprestimoType;
  inputsValuesCartao: ContratosEmprestimoType;
  inputsValuesRcc: ContratosEmprestimoType;
  contratosEmprestimo: ContratosEmprestimoType[];
  contratosCartao: ContratosEmprestimoType[];
  contratosRcc: ContratosEmprestimoType[];
  handleChangeEmprestimo: (event: any) => void;
  handleChangeCartao: (event: any) => void;
  handleChangeRcc: (event: any) => void;
  handleInserirContratoEmprestimo: (
    event: MouseEventHandler<HTMLAnchorElement>
  ) => void;
  handleInserirContratoCartao: (
    event: MouseEventHandler<HTMLAnchorElement>
  ) => void;
  handleInserirContratoRcc: (
    event: MouseEventHandler<HTMLAnchorElement>
  ) => void;

  handleDeletar: (
    event: MouseEventHandler<HTMLAnchorElement>,
    _contrato: ContratosEmprestimoType
  ) => void;
};

const ContratosContext = createContext({} as ContratosContextValues);

const ContratosContextProvider = ({ children }: PropsWithChildren) => {
  const [contratosEmprestimo, setContratosEmprestimo] = useState<
    ContratosEmprestimoType[]
  >(listaContratosEmprestimo);

  const [contratosCartao, setContratosCartao] =
    useState<ContratosEmprestimoType[]>(listaContratosCartao);

  const [contratosRcc, setContratosRcc] =
    useState<ContratosEmprestimoType[]>(listaContratosRcc);

  const [inputsValuesEmprestimo, setInputValuesEmprestimo] = useState(
    initialValuesContratoEmprestimo
  );
  const [inputsValuesCartao, setInputValuesCartao] = useState(
    initialValuesContratoCartao
  );
  const [inputsValuesRcc, setInputValuesRcc] = useState(
    initialValuesContratoRcc
  );

  const handleChangeEmprestimo = useCallback(
    (event: any) => {
      const { value, name } = event.target;

      setInputValuesEmprestimo((prevInputs) => {
        const inputsAtt = { ...prevInputs, [name]: value };
        handleAtualizarContratoEmprestimo(inputsValuesEmprestimo);
        // console.log("inputs", inputsAtt);
        return inputsAtt;
      });
    },
    [setInputValuesEmprestimo]
  );
  const handleChangeCartao = (event: any) => {
    const { value, name } = event.target;

    setInputValuesCartao((prevInputs) => {
      const inputsAtt = { ...prevInputs, [name]: value };
      // console.log("inputs", inputsAtt);
      return inputsAtt;
    });
  };
  const handleChangeRcc = (event: any) => {
    const { value, name } = event.target;
    setInputValuesRcc((prevInputs) => {
      const inputsAtt = { ...prevInputs, [name]: value };
      // console.log("inputs", inputsAtt);
      return inputsAtt;
    });
  };

  const handleDeletar = useCallback(
    (
      event: MouseEventHandler<HTMLAnchorElement>,
      _contrato: ContratosEmprestimoType
    ) => {
      // setContratos((prevContratos) => {
      //   const contratoFiltrado = prevContratos.filter(
      //     (item) => item !== _contrato
      //   );
      //   return contratoFiltrado;
      // });
    },
    []
  );

  const handleAtualizarContratoEmprestimo = useCallback(
    (novoContratoEmprestimo: ContratosEmprestimoType) => {
      console.log("atualizarrrrrrrrr");
      setContratosCartao((prevContratosEmprestimo) => {
        const contratoEmprestimoAtualizado = contratosEmprestimo.map((objeto) =>
          objeto.id === novoContratoEmprestimo.id
            ? novoContratoEmprestimo
            : objeto
        );
        const existemObjeto = prevContratosEmprestimo.some(
          (objeto) => objeto.id === novoContratoEmprestimo.id
        );
        console.log(novoContratoEmprestimo);
        return existemObjeto
          ? contratoEmprestimoAtualizado
          : [...contratoEmprestimoAtualizado, novoContratoEmprestimo];
      });
      //setContratosEmprestimo((prevContratos) => {
      // const idFiltrado = prevContratos.filter((item) => id !== item.id)
      //  return [
      // ...idFiltrado,
      // {
      //   id: 20,
      //   contrato: "",
      //   dataInicioContrato: "",
      //   competenciaInicioDesconto: "",
      //   competenciaFimDesconto: "",
      //   dataInclusao: "",
      //   situacao: "",
      //   excluidoAps: "",
      //   excluidoBanco: "",
      //   valorEmprestado: 0,
      //   valorParcela: 0,
      //   quantidadeParcelas: 0,
      //   quantidadeParcelasEmAberto: 0,
      //   saldoQuitacao: 0,
      //   taxa: 0,
      //   tipoEmprestimo: {
      //     codigo: "",
      //     descricao: "",
      //   },
      //   banco: {
      //     codigo: "",
      //     nome: "",
      //   },
      // },
      //  ];
      //  });
    },
    [setContratosEmprestimo]
  );
    console.log("teste", contratosEmprestimo);
    
  const handleInserirContratoEmprestimo = useCallback(
    (event: MouseEventHandler<HTMLAnchorElement>) => {
      console.log("opaaaa");
      setContratosEmprestimo((prevContratos) => {
        return [
          ...prevContratos,
          {
            id: 2,
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
    [setContratosEmprestimo]
  );

  const handleInserirContratoRcc = useCallback(
    (event: MouseEventHandler<HTMLAnchorElement>) => {
      console.log("opaaaa");
      setContratosRcc((prevContratos) => {
        return [
          ...prevContratos,
          {
            id: 2,
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
    [setContratosRcc]
  );

  const handleInserirContratoCartao = useCallback(
    (event: MouseEventHandler<HTMLAnchorElement>) => {
      console.log("opaaaa");
      setContratosCartao((prevContratos) => {
        return [
          ...prevContratos,
          {
            id: 3,
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
    [setContratosCartao]
  );

  const values = {
    contratosEmprestimo,
    contratosCartao,
    contratosRcc,
    inputsValuesEmprestimo,
    inputsValuesCartao,
    inputsValuesRcc,
    handleChangeEmprestimo,
    handleChangeCartao,
    handleInserirContratoEmprestimo,
    handleDeletar,
    handleInserirContratoCartao,
    handleChangeRcc,
    handleInserirContratoRcc,
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
