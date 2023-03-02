import * as yup from "yup";

const validationSchema = yup.object().shape({
  beneficio: yup.string().notRequired(),
  nome: yup.string().notRequired(),
  dataNascimento: yup.string().notRequired(),
  cpf: yup
    .string()
    .notRequired()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido"),
  descricao: yup.string().notRequired(),
  situacaoBeneficio: yup.string().notRequired(),
  nit: yup.string().notRequired(),
  identidade: yup.number().notRequired(),
  sexo: yup.string().notRequired(),
  dib: yup.string().notRequired(),
  valorBeneficio: yup.number().notRequired(),
  possuiRepresentanteLegalProcurador: yup.string().notRequired(),
  pensaoAlimenticia: yup.string().notRequired(),
  bloqueioEmprestismo: yup.string().notRequired(),
  beneficioPermiteEmprestimo: yup.string().notRequired(),
  naoPerturbe: yup.string().notRequired(),
  rg: yup.string().notRequired().matches(/^\d{1,2}\.\d{3}\.\d{3}(-\d{1}|)$/, "RG inválido"),
  ddb: yup.string().notRequired(),
  nomeMae: yup.string().notRequired(),
  codigo: yup.string().notRequired(),
  desconto: yup.string().notRequired(),
  endereco: yup.string().notRequired(),
  bairro: yup.string().notRequired(),
  cidade: yup.string().notRequired(),
  cep: yup.string().notRequired(),
  uf: yup.string().notRequired(),
});

export default validationSchema;
