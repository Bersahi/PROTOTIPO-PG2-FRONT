"use client";

import React from 'react';
import { MapPin, Clock, Phone, Mail, ArrowLeft, Navigation } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function PaginaUbicaciones() {
  const volverAtras = () => {
    window.history.back();
  };
  const ubicaciones = [
    {
      id: 'central',
      nombre: 'Centro de Distribución Central',
      direccion: 'Zona 12, Ciudad de Guatemala',
      telefono: '+502 1234-5678',
      email: 'central@valorexpress.com',
      horario: '24/7',
      servicios: ['Recogida', 'Entrega', 'Almacén', 'Procesamiento'],
      esPrincipal: true
    },
    {
      id: 'quetzaltenango',
      nombre: 'Sucursal Quetzaltenango',
      direccion: 'Zona 1, Quetzaltenango',
      telefono: '+502 2345-6789',
      email: 'quetzaltenango@valorexpress.com',
      horario: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
      servicios: ['Recogida', 'Entrega', 'Almacén'],
      esPrincipal: false
    },
    {
      id: 'antigua',
      nombre: 'Sucursal Antigua Guatemala',
      direccion: 'Centro Histórico, Antigua Guatemala',
      telefono: '+502 3456-7890',
      email: 'antigua@valorexpress.com',
      horario: 'Lunes a Sábado: 9:00 AM - 5:00 PM',
      servicios: ['Recogida', 'Entrega'],
      esPrincipal: false
    },
    {
      id: 'escuintla',
      nombre: 'Sucursal Escuintla',
      direccion: 'Centro, Escuintla',
      telefono: '+502 4567-8901',
      email: 'escuintla@valorexpress.com',
      horario: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
      servicios: ['Recogida', 'Entrega', 'Almacén'],
      esPrincipal: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={volverAtras}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-semibold">Nuestras Ubicaciones</h1>
      </div>

      {/* Información general */}
      <Card className="mb-8 bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="bg-green-600 rounded-full p-2">
              <Navigation className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-green-900 mb-2">Cobertura Nacional</h3>
              <p className="text-sm text-green-700">
                Contamos con una red estratégica de centros de distribución y sucursales 
                para brindar un servicio eficiente en todo el territorio guatemalteco.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de ubicaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ubicaciones.map((ubicacion) => (
          <Card key={ubicacion.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {ubicacion.nombre}
                  </CardTitle>
                  {ubicacion.esPrincipal && (
                    <Badge className="bg-red-100 text-red-800 mt-2">Sede Principal</Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-gray-600">{ubicacion.direccion}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{ubicacion.telefono}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{ubicacion.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{ubicacion.horario}</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Servicios Disponibles:</h4>
                <div className="flex flex-wrap gap-1">
                  {ubicacion.servicios.map((servicio) => (
                    <Badge key={servicio} variant="secondary" className="text-xs">
                      {servicio}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-4"
                onClick={() => {
                  // En una implementación real, esto abriría Google Maps o el mapa preferido
                  alert(`Dirección: ${ubicacion.direccion}`);
                }}
              >
                <Navigation className="h-4 w-4 mr-2" />
                Ver en Mapa
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Información adicional */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Información de Servicio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium mb-2">Recogida a Domicilio</h4>
              <p className="text-sm text-gray-600">
                Servicio de recogida disponible en toda el área metropolitana y principales ciudades
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium mb-2">Horarios Flexibles</h4>
              <p className="text-sm text-gray-600">
                Adaptamos nuestros horarios a las necesidades de nuestros clientes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-medium mb-2">Soporte Local</h4>
              <p className="text-sm text-gray-600">
                Equipos locales en cada región para un mejor servicio personalizado
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

