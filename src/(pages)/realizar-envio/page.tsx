"use client";

import React from 'react';
import { FormularioEnvio as FormularioEnvioComponent } from '../../components/forms/FormularioEnvio';
import { FormularioEnvioData, DepartamentoGuatemala, Pais, Moneda, Tarifa } from '@/types';

interface PaginaRealizarEnvioProps {
  formularioEnvio: FormularioEnvioData;
  setFormularioEnvio: React.Dispatch<React.SetStateAction<FormularioEnvioData>>;
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
    <FormularioEnvioComponent
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
