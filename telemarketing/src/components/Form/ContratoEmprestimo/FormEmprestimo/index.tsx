import React, { useCallback, useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useContratoEmprestimo } from "../../Context/ContratosEmprestimoContext";
import { ContratosType, dadosContratoEmprestimo } from "../../Context/Types";
import InputStyles from "../../../InputStyles";

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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: value,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: value,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: value,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: value,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: value,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: value,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: value,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: value,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoEmprestimo.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoEmprestimo.competenciaFimDesconto,
        dataInclusao: dadosContratoEmprestimo.dataInclusao,
        situacao: dadosContratoEmprestimo.situacao,
        excluidoAps: dadosContratoEmprestimo.excluidoAps,
        excluidoBanco: dadosContratoEmprestimo.excluidoBanco,
        valorEmprestado: dadosContratoEmprestimo.valorEmprestado,
        valorParcela: dadosContratoEmprestimo.valorParcela,
        quantidadeParcelas: dadosContratoEmprestimo.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoEmprestimo.quantidadeParcelasEmAberto,
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
          onChange={handleInputContrato}
          fullWidth
          label="Contrato"
        />
      </Grid>
      <Grid item xs={3}>
        <label htmlFor="">Data Inicio do Contrato</label>
        <InputStyles
          onChange={handleInputDataInicioContrato}
          name="dataInicioContrato"
          mask="date"
        />
      </Grid>
      <Grid item xs={3}>
        <label htmlFor="">Competencia Inicio Desconto</label>
        <InputStyles
          onChange={handleInputCompetenciaInicioDesconto}
          name="competenciaInicioDesconto"
          mask="date"
        />
      </Grid>
      <Grid item xs={3}>
        <label htmlFor="">Competencia Fim Desconto</label>
        <InputStyles
          onChange={handleInputCompetenciaFimDesconto}
          name="competenciaFimDesconto"
          mask="date"
        />
      </Grid>
      <Grid item xs={3}>
        <label htmlFor="">Data Inclusao</label>
        <InputStyles
          onChange={handleInputDataInclusao}
          name="dataInclusao"
          mask="date"
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
          fullWidth
          onChange={handleInputExcluidoAps}
          label="Excluido Aps"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="excluidoBanco"
          fullWidth
          onChange={handleInputExcluidoBanco}
          label="Excluido Banco"
        />
      </Grid>
      <Grid item xs={3}>
        <label>Valor Emprestado</label>
        <InputStyles
          onChange={handleInputValorEmprestado}
          name="valorEmprestado"
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={3}>
        <label>Valor Parcela</label>
        <InputStyles
          onChange={handleInputValorParcela}
          name="valorParcela"
          mask="currency"
          icone="money"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="quantidadeParcelas"
          type="number"
          fullWidth
          onChange={handleInputQuantidadeParcelas}
          label="Quantidade Parcelas"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          type="number"
          name="quantidadeParcelasEmAberto"
          fullWidth
          onChange={handleInputQuantidadeParcelasEmAberto}
          label="Quantidade Parcelas Em Aberto"
        />
      </Grid>
      <Grid item xs={3}>
        <label>Saldo Quitacao</label>
        <InputStyles
          name="saldoQuitacao"
          mask="currency"
          icone="money"
          onChange={handleInputSaldoQuitacao}
        />
      </Grid>
      <Grid item xs={3}>
        <label>Taxa</label>
        <InputStyles
          name="saldoQuitacao"
          mask="currency"
          icone="money"
          onChange={handleInputTaxa}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>tipoEmprestimo</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="tipoEmprestimo.codigo"
          fullWidth
          onChange={handleInputTipoEmprestimoCodigo}
          label="codigo"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="tipoEmprestimo.nome"
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
          fullWidth
          onChange={handleInputBancoCodigo}
          label="codigo"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="banco.nome"
          fullWidth
          onChange={handleInputBancoNome}
          label="nome"
        />
      </Grid>
    </>
  );
};

export default FormEmprestimo;
