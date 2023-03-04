import React, { useCallback } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContratoCartao } from "../../Context/ContratoCartaoContext";
import { ContratosType, dadosContratoCartao } from "../../Context/Types";
import InputStyles from "../../../InputStyles";

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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: value,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: value,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: value,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: value,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: value,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: value,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: value,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: value,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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
        competenciaInicioDesconto:
          dadosContratoCartao.competenciaInicioDesconto,
        competenciaFimDesconto: dadosContratoCartao.competenciaFimDesconto,
        dataInclusao: dadosContratoCartao.dataInclusao,
        situacao: dadosContratoCartao.situacao,
        excluidoAps: dadosContratoCartao.excluidoAps,
        excluidoBanco: dadosContratoCartao.excluidoBanco,
        valorEmprestado: dadosContratoCartao.valorEmprestado,
        valorParcela: dadosContratoCartao.valorParcela,
        quantidadeParcelas: dadosContratoCartao.quantidadeParcelas,
        quantidadeParcelasEmAberto:
          dadosContratoCartao.quantidadeParcelasEmAberto,
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

export default FormCartao;
