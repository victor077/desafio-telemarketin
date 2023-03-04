export type EmpréstimoConsignadoValues = {
  beneficio: string;
  nome: string;
  dataNascimento: string;
  cpf: string;
  situacaoBeneficio: string;
  nit: string;
  identidade: number;
  sexo: string;
  dib: string;
  valorBeneficio: number;
  possuiRepresentanteLegalProcurador: string;
  pensaoAlimenticia: string;
  bloqueioEmprestismo: string;
  beneficioPermiteEmprestimo: string;
  naoPerturbe: string;
  rg: string;
  ddb: string;
  nomeMae: string;
  descontosCartao: DescontosCartaoType;
  enderecoPessoal: EnderecoPessoalType;
  especie: EspecieType;
  margem: MargemType;
  // contratosEmprestimo: ContratosEmprestimoType[];
};

export type EspecieType = {
  codigo: string;
  descricao: string;
};

export type MargemType = {
  competencia: string;
  baseCalculoMargemConsignavel: number;
  margemDisponivelEmprestimo: number;
  percentualMargemDisponivelEmprestimo: number;
  percentualMargemTotalEmprestimo: number;
  quantidadeEmprestimo: number;
  possuiCartao: string;
  margemDisponivelCartao: number;
  percentualmargemDisponivelCartao: number;
  percentualMargemTotalCartao: number;
  margemDisponivelRcc: number;
  margemDisponivelEmprestimoOn: string;
};

export type ContratosEmprestimoType = {
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

export type DescontosCartaoType = {};

export type EnderecoPessoalType = {
  endereco: string;
  bairro: string;
  cidade: string;
  cep: string;
  uf: string;
};
