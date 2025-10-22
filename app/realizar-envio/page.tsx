"use client";

import React from 'react';
import { FormularioEnvio } from '../../components/forms/FormularioEnvio';
import { FormularioEnvio as FormularioEnvioType, DepartamentoGuatemala, Pais, Moneda, Tarifa } from '@/types';

interface PaginaRealizarEnvioProps {
  formularioEnvio: FormularioEnvioType;
  setFormularioEnvio: React.Dispatch<React.SetStateAction<FormularioEnvioType>>;
  handleSubmitEnvio: (e: React.FormEvent) => Promise<void>;
  handleDepartamentoChange: (departamento: string, tipo: 'remitente' | 'destinatario') => void;
  handlePaisChange: (pais: string, tipo: 'remitente' | 'destinatario') => void;
  volverAtras: () => void;
  cargandoIA: boolean;
  mensajeExito: boolean;
  departamentosGuatemala: DepartamentoGuatemala[];
  paisesDisponibles: Pais[];
  monedasDisponibles: Moneda[];
  tarifasMock: Tarifa[];
}

export default function PaginaRealizarEnvio({
  formularioEnvio,
  setFormularioEnvio,
  handleSubmitEnvio,
  handleDepartamentoChange,
  handlePaisChange,
  volverAtras,
  cargandoIA,
  mensajeExito,
  departamentosGuatemala,
  paisesDisponibles,
  monedasDisponibles,
  tarifasMock
}: PaginaRealizarEnvioProps) {
  return (
    <FormularioEnvio
      formularioEnvio={formularioEnvio}
      setFormularioEnvio={setFormularioEnvio}
      handleSubmitEnvio={handleSubmitEnvio}
      handleDepartamentoChange={handleDepartamentoChange}
      handlePaisChange={handlePaisChange}
      volverAtras={volverAtras}
      cargandoIA={cargandoIA}
      mensajeExito={mensajeExito}
      departamentosGuatemala={departamentosGuatemala}
      paisesDisponibles={paisesDisponibles}
      monedasDisponibles={monedasDisponibles}
      tarifasMock={tarifasMock}
    />
  );
}
