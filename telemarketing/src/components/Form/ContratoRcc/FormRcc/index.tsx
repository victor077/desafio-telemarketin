import React, { useCallback } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ContratosType, dadosContratoRcc } from "../../Context/Types";
import { useContratoRcc } from "../../Context/ContratoRccContext";

type FormRccProps = {
  dados: ContratosType;
};

const FormRcc = ({ dados }: FormRccProps) => {
  const { changeValorDataRcc } = useContratoRcc();

  const handleInputContrato = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: value,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );

  const handleInputDataInicioContrato = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: value,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );

  const handleInputCompetenciaInicioDesconto = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: value,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputCompetenciaFimDesconto = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: value,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputDataInclusao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: value,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputSituacao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: value,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputExcluidoAps = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: value,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputExcluidoBanco = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: value,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputValorEmprestado = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: value,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputValorParcela = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: value,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputQuantidadeParcelas = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: value,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputQuantidadeParcelasEmAberto = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: value,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputSaldoQuitacao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: value,
        taxa: dadosContratoRcc.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputTaxa = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: value,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );
  const handleInputTipoEmprestimoCodigo = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.saldoQuitacao,
        tipoEmprestimo: {
          codigo: value,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );

  const handleInputTipoEmprestimoDescricao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.saldoQuitacao,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: value,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );

  const handleInputBancoCodigo = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.saldoQuitacao,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: value,
          nome: dadosContratoRcc.banco.nome,
        },
      });
    },
    [changeValorDataRcc]
  );

  const handleInputBancoNome = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataRcc({
        id: dados.id,
        contrato: dadosContratoRcc.contrato,
        dataInicioContrato: dadosContratoRcc.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoRcc.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoRcc.competenciaFimDesconto,
        dataInclusao: dadosContratoRcc.dataInclusao,
        situacao: dadosContratoRcc.situacao,
        excluidoAps: dadosContratoRcc.excluidoAps,
        excluidoBanco: dadosContratoRcc.excluidoBanco,
        valorEmprestado: dadosContratoRcc.valorEmprestado,
        valorParcela: dadosContratoRcc.valorParcela,
        quantidadeParcelas: dadosContratoRcc.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoRcc.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoRcc.saldoQuitacao,
        taxa: dadosContratoRcc.saldoQuitacao,
        tipoEmprestimo: {
          codigo: dadosContratoRcc.tipoEmprestimo.codigo,
          descricao: dadosContratoRcc.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoRcc.banco.codigo,
          nome: value,
        },
      });
    },
    [changeValorDataRcc]
  );

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Contratos Rcc</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="contrato"
          // value={dados.contrato}
          onChange={handleInputContrato}
          fullWidth
          label="Contrato"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="dataInicioContrato"
          // value={inputsValuesEmprestimo.dataInicioContrato}
          fullWidth
          onChange={handleInputDataInicioContrato}
          label="Data Inicio do Contrato"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="competenciaInicioDesconto"
          // // value={inputsValuesEmprestimo.competenciaInicioDesconto}
          fullWidth
          onChange={handleInputCompetenciaInicioDesconto}
          label="Competencia Inicio Desconto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="competenciaFimDesconto"
          // // value={inputsValuesEmprestimo.competenciaFimDesconto}
          fullWidth
          onChange={handleInputCompetenciaFimDesconto}
          label="competencia Fim Desconto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="dataInclusao"
          // // value={inputsValuesEmprestimo.dataInclusao}
          fullWidth
          onChange={handleInputDataInclusao}
          label="Data Inclusao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="situacao"
          fullWidth
          onChange={handleInputSituacao}
          label="Situacao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="excluidoAps"
          // // value={inputsValuesEmprestimo.excluidoAps}
          fullWidth
          onChange={handleInputExcluidoAps}
          label="Excluido Aps"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="excluidoBanco"
          // // value={inputsValuesEmprestimo.excluidoBanco}
          fullWidth
          onChange={handleInputExcluidoBanco}
          label="Excluido Banco"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="valorEmprestado"
          // // value={inputsValuesEmprestimo.valorEmprestado}
          fullWidth
          onChange={handleInputValorEmprestado}
          label="Valor Emprestado"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="valorParcela"
          // // value={inputsValuesEmprestimo.valorParcela}
          fullWidth
          onChange={handleInputValorParcela}
          label="Valor Parcela"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="quantidadeParcelas"
          // // value={inputsValuesEmprestimo.quantidadeParcelas}
          fullWidth
          onChange={handleInputQuantidadeParcelas}
          label="Quantidade Parcelas"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="quantidadeParcelasEmAberto"
          // // value={inputsValuesEmprestimo.quantidadeParcelasEmAberto}
          fullWidth
          onChange={handleInputQuantidadeParcelasEmAberto}
          label="Quantidade Parcelas Em Aberto"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="saldoQuitacao"
          // // value={inputsValuesEmprestimo.saldoQuitacao}
          fullWidth
          onChange={handleInputSaldoQuitacao}
          label="Saldo Quitacao"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="taxa"
          // value={inputsValuesEmprestimo.taxa}
          fullWidth
          onChange={handleInputTaxa}
          label="Taxa"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>tipoEmprestimo</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="tipoEmprestimo.codigo"
          // value={inputsValuesEmprestimo.taxa}
          fullWidth
          onChange={handleInputTipoEmprestimoCodigo}
          label="codigo"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="tipoEmprestimo.nome"
          // value={inputsValuesEmprestimo.taxa}
          fullWidth
          onChange={handleInputTipoEmprestimoDescricao}
          label="nome"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>banco</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="banco.codigo"
          // value={inputsValuesEmprestimo.taxa}
          fullWidth
          onChange={handleInputBancoCodigo}
          label="codigo"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="banco.nome"
          // value={inputsValuesEmprestimo.taxa}
          fullWidth
          onChange={handleInputBancoNome}
          label="nome"
        />
      </Grid>
    </>
  );
};

export default FormRcc;
