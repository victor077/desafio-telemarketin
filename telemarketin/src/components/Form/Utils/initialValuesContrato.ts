import { ContratosEmprestimoType } from "../Types";

export const initialValuesContrato : ContratosEmprestimoType = {
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
