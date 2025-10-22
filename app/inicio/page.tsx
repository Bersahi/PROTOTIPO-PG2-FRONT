"use client";

import React from 'react';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

interface OrdenEnvio {
  id: string;
  descripcion: string;
  estado: 'enviado' | 'entregado' | 'pendiente';
  fecha: string;
  destino: string;
}

interface PaginaInicioProps {
  busqueda: string;
  setBusqueda: (busqueda: string) => void;
  ordenesFiltradas: OrdenEnvio[];
  manejarRastreoRapido: () => void;
  limpiarBusqueda: () => void;
  getEstadoIcono: (estado: string) => React.ReactNode;
  getEstadoBadgeClass: (estado: string) => string;
}

export default function PaginaInicio({
  busqueda,
  setBusqueda,
  ordenesFiltradas,
  manejarRastreoRapido,
  limpiarBusqueda,
  getEstadoIcono,
  getEstadoBadgeClass
}: PaginaInicioProps) {
  return (
    <div className="space-y-6">
      {/* Barra de búsqueda */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar envíos por número de rastreo, destino o descripción..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Button onClick={manejarRastreoRapido} className="bg-red-600 hover:bg-red-700">
            <Package className="h-4 w-4 mr-2" />
            Rastrear Envío
          </Button>
          {busqueda && (
            <Button variant="outline" onClick={limpiarBusqueda}>
              Limpiar
            </Button>
          )}
        </div>
      </div>

      {/* Lista de envíos */}
      <div className="bg-white rounded-lg shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Envíos Recientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          {ordenesFiltradas.length === 0 ? (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {busqueda ? 'No se encontraron envíos' : 'No hay envíos registrados'}
              </h3>
              <p className="text-gray-500">
                {busqueda 
                  ? 'Intenta con otros términos de búsqueda' 
                  : 'Crea tu primer envío para comenzar'
                }
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {ordenesFiltradas.map((orden) => (
                <div
                  key={orden.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg">
                      {getEstadoIcono(orden.estado)}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{orden.descripcion}</h3>
                      <p className="text-sm text-gray-500">{orden.destino}</p>
                      <p className="text-xs text-gray-400">{orden.fecha}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getEstadoBadgeClass(orden.estado)}>
                      {orden.estado}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </div>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">En Tránsito</p>
                <p className="text-2xl font-bold text-gray-900">
                  {ordenesFiltradas.filter(o => o.estado === 'enviado').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Entregados</p>
                <p className="text-2xl font-bold text-gray-900">
                  {ordenesFiltradas.filter(o => o.estado === 'entregado').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Pendientes</p>
                <p className="text-2xl font-bold text-gray-900">
                  {ordenesFiltradas.filter(o => o.estado === 'pendiente').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

