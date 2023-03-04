export const initialValuesContratoEmprestimo: ContratosType[] = [
  {
    id: 1,
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

export const initialValuesContrato: ContratosType[] = [
  {
    id: 1,
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
export const initialValuesTesteRcc: ContratosType[] = [
  {
    id: 1,
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

export const dadosContratoEmprestimo = {
  id: 1,
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
};
export const dadosContratoCartao = {
    id: 1,
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
  };
  export const dadosContratoRcc = {
    id: 1,
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
  };

export type ContratosType = {
  id: number;
  contrato: string;
  dataInicioContrato: string;
  competenciaInicioDesconto: string;
  competenciaFimDesconto: string;
  dataInclusao: string;
  situacao: string;
  excluidoAps: string;
  excluidoBanco: string;
  valorEmprestado: number;
  valorParcela: number;
  quantidadeParcelas: number;
  quantidadeParcelasEmAberto: number;
  saldoQuitacao: number;
  taxa: number;
  tipoEmprestimo: TipoEmprestimoType;
  banco: BancoType;
};

type TipoEmprestimoType = {
  codigo: string;
  descricao: string;
};

type BancoType = {
  codigo: string;
  nome: string;
};
