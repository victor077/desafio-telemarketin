import React, { useCallback } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContratoCartao } from "../../Context/ContratoCartaoContext";
import { ContratosType, dadosContratoCartao } from "../../Context/Types";

type FormCartaoProps = {
  dados: ContratosType;
};

const FormCartao = ({ dados }: FormCartaoProps) => {
  const { changeValorDataCartao } = useContratoCartao();

  const handleInputContrato = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: value,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );

  const handleInputDataInicioContrato = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: value,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );

  const handleInputCompetenciaInicioDesconto = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: value,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputCompetenciaFimDesconto = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: value,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputDataInclusao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: value,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputSituacao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: value,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputExcluidoAps = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: value,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputExcluidoBanco = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: value,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputValorEmprestado = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: value,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputValorParcela = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: value,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputQuantidadeParcelas = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: value,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputQuantidadeParcelasEmAberto = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: value,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputSaldoQuitacao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: value,
        taxa: dadosContratoCartao.taxa,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputTaxa = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: value,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );
  const handleInputTipoEmprestimoCodigo = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.saldoQuitacao,
        tipoEmprestimo: {
          codigo: value,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );

  const handleInputTipoEmprestimoDescricao = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.saldoQuitacao,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: value,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );

  const handleInputBancoCodigo = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.saldoQuitacao,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: value,
          nome: dadosContratoCartao.banco.nome,
        },
      });
    },
    [changeValorDataCartao]
  );

  const handleInputBancoNome = useCallback(
    (event: any) => {
      const { value } = event.target;

      changeValorDataCartao({
        id: dados.id,
        contrato: dadosContratoCartao.contrato,
        dataInicioContrato: dadosContratoCartao.dataInicioContrato,
        competenciaInicioDesconto: dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto: dadosContratoCartao.quantidadeParcelasEmAberto,
        saldoQuitacao: dadosContratoCartao.saldoQuitacao,
        taxa: dadosContratoCartao.saldoQuitacao,
        tipoEmprestimo: {
          codigo: dadosContratoCartao.tipoEmprestimo.codigo,
          descricao: dadosContratoCartao.tipoEmprestimo.descricao,
        },
        banco: {
          codigo: dadosContratoCartao.banco.codigo,
          nome: value,
        },
      });
    },
    [changeValorDataCartao]
  );

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Contratos Cartão</Typography>
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

export default FormCartao;
