"use client";

import React, { useState } from 'react';
import { ArrowLeft, User, MapPin, Package, Send, Navigation } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

export default function PaginaRealizarEnvio() {
  const [formularioEnvio, setFormularioEnvio] = useState({
    remitente: {
      nombre: '',
      telefono: '',
      direccion: '',
      departamento: '',
      pais: 'Guatemala'
    },
    destinatario: {
      nombre: '',
      telefono: '',
      direccion: '',
      departamento: '',
      pais: 'Guatemala'
    },
    paquete: {
      descripcion: '',
      peso: '',
      valor: '',
      moneda: 'GTQ'
    },
    servicio: {
      tipo: '',
      tarifa: ''
    }
  });

  const [cargandoIA, setCargandoIA] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);

  const volverAtras = () => {
    window.history.back();
  };

  const handleSubmitEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargandoIA(true);
    
    // Simular procesamiento
    setTimeout(() => {
      setCargandoIA(false);
      setMensajeExito(true);
    }, 2000);
  };

  const handleDepartamentoChange = (departamento: string, tipo: 'remitente' | 'destinatario') => {
    setFormularioEnvio(prev => ({
      ...prev,
      [tipo]: {
        ...prev[tipo],
        departamento
      }
    }));
  };

  const handlePaisChange = (pais: string, tipo: 'remitente' | 'destinatario') => {
    setFormularioEnvio(prev => ({
      ...prev,
      [tipo]: {
        ...prev[tipo],
        pais
      }
    }));
  };

  const departamentosGuatemala = [
    'Guatemala', 'Quetzaltenango', 'Escuintla', 'Huehuetenango', 'Alta Verapaz',
    'Baja Verapaz', 'San Marcos', 'Quiché', 'Petén', 'Izabal', 'Zacapa',
    'Chiquimula', 'Jalapa', 'Jutiapa', 'Santa Rosa', 'Sacatepéquez',
    'Chimaltenango', 'Sololá', 'Totonicapán', 'Retalhuleu', 'Suchitepéquez',
    'El Progreso'
  ];

  const paisesDisponibles = [
    { codigo: 'GT', nombre: 'Guatemala' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'CA', nombre: 'Canadá' },
    { codigo: 'ES', nombre: 'España' }
  ];

  const monedasDisponibles = [
    { codigo: 'GTQ', nombre: 'Quetzal Guatemalteco' },
    { codigo: 'USD', nombre: 'Dólar Estadounidense' },
    { codigo: 'EUR', nombre: 'Euro' }
  ];

  const tarifasMock = [
    { id: '1', servicio: 'Express Nacional', precio: 'Q 25.00', tipo: 'nacional' },
    { id: '2', servicio: 'Estándar Nacional', precio: 'Q 15.00', tipo: 'nacional' },
    { id: '3', servicio: 'Express Internacional', precio: 'Q 150.00', tipo: 'internacional' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={volverAtras}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-semibold">Realizar Envío</h1>
      </div>

      <form onSubmit={handleSubmitEnvio} className="space-y-6">
        {/* Información del Remitente */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Información del Remitente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="remitente-nombre">Nombre completo</Label>
                <Input
                  id="remitente-nombre"
                  value={formularioEnvio.remitente.nombre}
                  onChange={(e) => setFormularioEnvio(prev => ({
                    ...prev,
                    remitente: { ...prev.remitente, nombre: e.target.value }
                  }))}
                  placeholder="Nombre del remitente"
                />
              </div>
              <div>
                <Label htmlFor="remitente-telefono">Teléfono</Label>
                <Input
                  id="remitente-telefono"
                  value={formularioEnvio.remitente.telefono}
                  onChange={(e) => setFormularioEnvio(prev => ({
                    ...prev,
                    remitente: { ...prev.remitente, telefono: e.target.value }
                  }))}
                  placeholder="+502 1234-5678"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="remitente-direccion">Dirección</Label>
              <Input
                id="remitente-direccion"
                value={formularioEnvio.remitente.direccion}
                onChange={(e) => setFormularioEnvio(prev => ({
                  ...prev,
                  remitente: { ...prev.remitente, direccion: e.target.value }
                }))}
                placeholder="Dirección completa"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="remitente-departamento">Departamento</Label>
                <Select
                  value={formularioEnvio.remitente.departamento}
                  onValueChange={(value) => handleDepartamentoChange(value, 'remitente')}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    {departamentosGuatemala.map((dept) => (
                      <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="remitente-pais">País</Label>
                <Select
                  value={formularioEnvio.remitente.pais}
                  onValueChange={(value) => handlePaisChange(value, 'remitente')}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar país" />
                  </SelectTrigger>
                  <SelectContent>
                    {paisesDisponibles.map((pais) => (
                      <SelectItem key={pais.codigo} value={pais.nombre}>{pais.nombre}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Información del Destinatario */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Información del Destinatario
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="destinatario-nombre">Nombre completo</Label>
                <Input
                  id="destinatario-nombre"
                  value={formularioEnvio.destinatario.nombre}
                  onChange={(e) => setFormularioEnvio(prev => ({
                    ...prev,
                    destinatario: { ...prev.destinatario, nombre: e.target.value }
                  }))}
                  placeholder="Nombre del destinatario"
                />
              </div>
              <div>
                <Label htmlFor="destinatario-telefono">Teléfono</Label>
                <Input
                  id="destinatario-telefono"
                  value={formularioEnvio.destinatario.telefono}
                  onChange={(e) => setFormularioEnvio(prev => ({
                    ...prev,
                    destinatario: { ...prev.destinatario, telefono: e.target.value }
                  }))}
                  placeholder="+502 1234-5678"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="destinatario-direccion">Dirección</Label>
              <Input
                id="destinatario-direccion"
                value={formularioEnvio.destinatario.direccion}
                onChange={(e) => setFormularioEnvio(prev => ({
                  ...prev,
                  destinatario: { ...prev.destinatario, direccion: e.target.value }
                }))}
                placeholder="Dirección completa"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="destinatario-departamento">Departamento</Label>
                <Select
                  value={formularioEnvio.destinatario.departamento}
                  onValueChange={(value) => handleDepartamentoChange(value, 'destinatario')}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    {departamentosGuatemala.map((dept) => (
                      <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="destinatario-pais">País</Label>
                <Select
                  value={formularioEnvio.destinatario.pais}
                  onValueChange={(value) => handlePaisChange(value, 'destinatario')}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar país" />
                  </SelectTrigger>
                  <SelectContent>
                    {paisesDisponibles.map((pais) => (
                      <SelectItem key={pais.codigo} value={pais.nombre}>{pais.nombre}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Información del Paquete */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Información del Paquete
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="paquete-descripcion">Descripción del contenido</Label>
              <Textarea
                id="paquete-descripcion"
                value={formularioEnvio.paquete.descripcion}
                onChange={(e) => setFormularioEnvio(prev => ({
                  ...prev,
                  paquete: { ...prev.paquete, descripcion: e.target.value }
                }))}
                placeholder="Describe detalladamente el contenido del paquete"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="paquete-peso">Peso (kg)</Label>
                <Input
                  id="paquete-peso"
                  type="number"
                  value={formularioEnvio.paquete.peso}
                  onChange={(e) => setFormularioEnvio(prev => ({
                    ...prev,
                    paquete: { ...prev.paquete, peso: e.target.value }
                  }))}
                  placeholder="0.5"
                />
              </div>
              <div>
                <Label htmlFor="paquete-valor">Valor declarado</Label>
                <Input
                  id="paquete-valor"
                  type="number"
                  value={formularioEnvio.paquete.valor}
                  onChange={(e) => setFormularioEnvio(prev => ({
                    ...prev,
                    paquete: { ...prev.paquete, valor: e.target.value }
                  }))}
                  placeholder="100"
                />
              </div>
              <div>
                <Label htmlFor="paquete-moneda">Moneda</Label>
                <Select
                  value={formularioEnvio.paquete.moneda}
                  onValueChange={(value) => setFormularioEnvio(prev => ({
                    ...prev,
                    paquete: { ...prev.paquete, moneda: value }
                  }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar moneda" />
                  </SelectTrigger>
                  <SelectContent>
                    {monedasDisponibles.map((moneda) => (
                      <SelectItem key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Botón de envío */}
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={cargandoIA}
            className="bg-red-600 hover:bg-red-700"
          >
            {cargandoIA ? (
              <>
                <Navigation className="h-4 w-4 mr-2 animate-spin" />
                Procesando con IA...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Crear Envío
              </>
            )}
          </Button>
        </div>

        {mensajeExito && (
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-green-800">
                <Navigation className="h-5 w-5" />
                <span className="font-medium">¡Envío creado exitosamente!</span>
              </div>
              <p className="text-sm text-green-700 mt-1">
                Tu envío ha sido procesado y optimizado con IA. Recibirás un número de seguimiento pronto.
              </p>
            </CardContent>
          </Card>
        )}
      </form>
    </div>
  );
}
