import React, { useCallback, useState } from "react";

import { Box, Button } from "@mui/material";
import useStyles from "./styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DadosUsuarios from "./DadosUsuarios";
import { Formik } from "formik";
import {
  DescontosCartaoType,
  EmpréstimoConsignadoValues,
  EnderecoPessoalType,
  EspecieType,
  MargemType,
} from "./Types";
import { initialValuesForm } from "./Utils/InitialValuesForm";
import Margem from "./Margem";
import ContratoEmprestimo from "./ContratoEmprestimo";
import ContratoCartao from "./ContratoCartao";
import ContratoRcc from "./ContratoRcc";
import { useContratoCartao } from "./Context/ContratoCartaoContext";
import { useContratoEmprestimo } from "./Context/ContratosEmprestimoContext";
import { useContratoRcc } from "./Context/ContratoRccContext";
import { useMutation } from "react-query";
import api from "../../Api/api";
import { ContratosType } from "./Context/Types";
import validationSchema from "./validate";

type inInCluirCadastro = {
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
  cadastroEmprestimo: ContratosType[];
  cadastroCartao: ContratosType[];
  cadastroRcc: ContratosType[];
};

const Form = () => {
  const styles = useStyles();
  const { contratoEmprestimo } = useContratoEmprestimo();
  const { contratoCartao } = useContratoCartao();
  const { contratoRcc } = useContratoRcc();

  const { mutate } = useMutation(
    (novoCadastro: inInCluirCadastro) => {
      const response = api.post("teste", novoCadastro);
      return response;
    },
    {
      onSuccess: () => {
        alert("Cadastro Realizado com sucesso");
      },
      onError: () => {
        alert("Erro ao cadastrar");
      },
    }
  );

  const handleSubmit = useCallback(
    (values: EmpréstimoConsignadoValues) => {
      mutate({
        beneficio: values.beneficio,
        nome: values.nome,
        dataNascimento: values.dataNascimento,
        cpf: values.cpf,
        situacaoBeneficio: values.situacaoBeneficio,
        nit: values.nit,
        identidade: values.identidade,
        sexo: values.sexo,
        dib: values.dib,
        valorBeneficio: values.valorBeneficio,
        possuiRepresentanteLegalProcurador:
          values.possuiRepresentanteLegalProcurador,
        pensaoAlimenticia: values.pensaoAlimenticia,
        bloqueioEmprestismo: values.bloqueioEmprestismo,
        beneficioPermiteEmprestimo: values.beneficioPermiteEmprestimo,
        naoPerturbe: values.naoPerturbe,
        rg: values.rg,
        ddb: values.ddb,
        nomeMae: values.nomeMae,
        descontosCartao: values.descontosCartao,
        enderecoPessoal: {
          bairro: values.enderecoPessoal.bairro,
          cep: values.enderecoPessoal.cep,
          cidade: values.enderecoPessoal.cidade,
          endereco: values.enderecoPessoal.endereco,
          uf: values.enderecoPessoal.uf,
        },
        especie: {
          codigo: values.especie.codigo,
          descricao: values.especie.descricao,
        },
        margem: {
          competencia: values.margem.competencia,
          baseCalculoMargemConsignavel:
            values.margem.baseCalculoMargemConsignavel,
          margemDisponivelEmprestimo: values.margem.margemDisponivelEmprestimo,
          margemDisponivelCartao: values.margem.margemDisponivelCartao,
          percentualMargemDisponivelEmprestimo:
            values.margem.percentualMargemDisponivelEmprestimo,
          percentualMargemTotalEmprestimo:
            values.margem.percentualMargemTotalEmprestimo,
          quantidadeEmprestimo: values.margem.quantidadeEmprestimo,
          possuiCartao: values.margem.possuiCartao,
          percentualmargemDisponivelCartao:
            values.margem.percentualmargemDisponivelCartao,
          percentualMargemTotalCartao:
            values.margem.percentualMargemTotalCartao,
          margemDisponivelRcc: values.margem.margemDisponivelRcc,
          margemDisponivelEmprestimoOn:
            values.margem.margemDisponivelEmprestimoOn,
        },
        cadastroEmprestimo: contratoEmprestimo,
        cadastroCartao: contratoCartao,
        cadastroRcc: contratoRcc,
      });
    },
    [mutate]
  );

  return (
    <>
      <Formik<EmpréstimoConsignadoValues>
        onSubmit={handleSubmit}
        validateOnChange
        initialValues={initialValuesForm}
      >
        {({ handleSubmit: handleFormikSubmit, errors }) => (
          <form onSubmit={handleFormikSubmit}>
            <Box sx={styles.containerBody}>
              <Typography variant="h5">Empréstimo Consignado</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "4rem",
              }}
            >
              <Grid container rowSpacing={2} columnSpacing={2}>
                <DadosUsuarios />
                <Margem />
                <ContratoEmprestimo />
                <ContratoCartao />
                <ContratoRcc />
              </Grid>
            </Box>
            <Box style={{ paddingLeft: "4rem" }}>
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
