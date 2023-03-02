export type EmpréstimoConsignadoValues = {
  beneficio: string;
  nome: string;
  dataNascimento: string;
  cpf: string;
  descricao: string;
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
  possuiRepresentanteLegalProcuradorme: string
  naoPerturbe: string;
  rg: string;
  ddb: string;
  nomeMae: string;
  codigo: string;
  descontosCartao: DescontosCartaoType;
  enderecoPessoal: EnderecoPessoalType;
};

type DescontosCartaoType = {};

export type EnderecoPessoalType = {
  endereco: string;
  bairro: string;
  cidade: string;
  cep: string;
  uf: string;
};
