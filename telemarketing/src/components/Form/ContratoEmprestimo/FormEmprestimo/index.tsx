import React, { useCallback, useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useContratoEmprestimo } from "../../Context/ContratosEmprestimoContext";
import { ContratosType, dadosContratoEmprestimo } from "../../Context/Types";

type FormEmprestimoProps = {
  dados: ContratosType;
};

const FormEmprestimo = ({ dados }: FormEmprestimoProps) => {
  const { changeValorDataEmprestimo } = useContratoEmprestimo();
  const handleInputContrato = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: value,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );

  const handleInputDataInicioContrato = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: value,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );

  const handleInputCompetenciaInicioDesconto = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: value,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputCompetenciaFimDesconto = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: value,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputDataInclusao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: value,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputSituacao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: value,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputExcluidoAps = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: value,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputExcluidoBanco = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: value,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputValorEmprestado = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: value,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputValorParcela = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: value,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputQuantidadeParcelas = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: value,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputQuantidadeParcelasEmAberto = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: value,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputSaldoQuitacao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: value,
        taxa: dadosContratoEmprestimo.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputTaxa = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: value,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );
  const handleInputTipoEmprestimoCodigo = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.saldoQuitacao,
        tipoEmprestimo: {
          codigo: value,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );

  const handleInputTipoEmprestimoDescricao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.saldoQuitacao,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: value,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );

  const handleInputBancoCodigo = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.saldoQuitacao,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: value,
          nome: dadosContratoEmprestimo.banco.nome,
        },
      });
    },
    [changeValorDataEmprestimo]
  );

  const handleInputBancoNome = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataEmprestimo({
        id: dados.id,
        contrato: dadosContratoEmprestimo.contrato,
        dataInicioContrato: dadosContratoEmprestimo.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoEmprestimo.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoEmprestimo.saldoQuitacao,
        taxa: dadosContratoEmprestimo.saldoQuitacao,
        tipoEmprestimo: {
          codigo: dadosContratoEmprestimo.tipoEmprestimo.codigo,
          descricao: dadosContratoEmprestimo.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoEmprestimo.banco.codigo,
          nome: value,
        },
      });
    },
    [changeValorDataEmprestimo]
  );

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Contratos Emprestimo</Typography>
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

export default FormEmprestimo;
