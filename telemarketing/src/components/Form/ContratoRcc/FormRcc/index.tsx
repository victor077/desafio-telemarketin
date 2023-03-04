import React, { useCallback } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ContratosType, dadosContratoRcc } from "../../Context/Types";
import { useContratoRcc } from "../../Context/ContratoRccContext";
import InputStyles from "../../../InputStyles";

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

export default FormRcc;
