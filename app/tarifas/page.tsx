"use client";

import React from 'react';
import { DollarSign, Clock, MapPin, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Tarifa } from '@/types';

interface PaginaTarifasProps {
  volverAtras: () => void;
  tarifasMock: Tarifa[];
}

export default function PaginaTarifas({ volverAtras, tarifasMock }: PaginaTarifasProps) {
  const tarifasNacionales = tarifasMock.filter(t => t.tipo === 'nacional');
  const tarifasInternacionales = tarifasMock.filter(t => t.tipo === 'internacional');

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={volverAtras}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-semibold">Tarifas y Servicios</h1>
      </div>

      {/* Información general */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 rounded-full p-2">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-blue-900 mb-2">Tarifas Transparentes</h3>
              <p className="text-sm text-blue-700">
                Nuestras tarifas incluyen recogida, transporte y entrega. No hay costos ocultos. 
                Las tarifas pueden variar según el peso, dimensiones y destino específico.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tarifas Nacionales */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Envíos Nacionales</h2>
            <Badge className="bg-green-100 text-green-800">Guatemala</Badge>
          </div>
          
          <div className="space-y-4">
            {tarifasNacionales.map((tarifa) => (
              <Card key={tarifa.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{tarifa.servicio}</h3>
                      <p className="text-gray-600 text-sm">{tarifa.descripcion}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-600">{tarifa.precio}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{tarifa.tiempoEstimado}</span>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t">
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Incluye recogida y entrega</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tarifas Internacionales */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Envíos Internacionales</h2>
            <Badge className="bg-blue-100 text-blue-800">Mundial</Badge>
          </div>
          
          <div className="space-y-4">
            {tarifasInternacionales.map((tarifa) => (
              <Card key={tarifa.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{tarifa.servicio}</h3>
                      <p className="text-gray-600 text-sm">{tarifa.descripcion}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-600">{tarifa.precio}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{tarifa.tiempoEstimado}</span>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t">
                    <div className="flex items-center gap-2 text-sm text-blue-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Incluye documentación aduanera</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Información Importante</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Factores que Afectan el Precio:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Peso y dimensiones del paquete</li>
                <li>• Distancia y destino</li>
                <li>• Valor declarado (para seguros)</li>
                <li>• Servicios adicionales requeridos</li>
                <li>• Documentación aduanera (internacional)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Servicios Incluidos:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Recogida en domicilio</li>
                <li>• Seguimiento en tiempo real</li>
                <li>• Entrega con confirmación</li>
                <li>• Soporte al cliente 24/7</li>
                <li>• Optimización de rutas con IA</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

