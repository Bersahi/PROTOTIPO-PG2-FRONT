"use client";

import React from 'react';
import { MessageCircle, Mail, Phone, Clock, HelpCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';

interface PaginaSoporteProps {
  volverAtras: () => void;
}

export default function PaginaSoporte({ volverAtras }: PaginaSoporteProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={volverAtras}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-semibold">Soporte al Cliente</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Información de contacto */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contacto Directo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gray-500" />
              <div>
                <p className="font-medium">Teléfono</p>
                <p className="text-sm text-gray-600">+502 1234-5678</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gray-500" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-600">soporte@valorexpress.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-gray-500" />
              <div>
                <p className="font-medium">Horario de Atención</p>
                <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formulario de contacto */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Envíanos un Mensaje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input id="nombre" placeholder="Tu nombre completo" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div>
                <Label htmlFor="asunto">Asunto</Label>
                <Input id="asunto" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div>
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea 
                  id="mensaje" 
                  placeholder="Describe tu consulta o problema..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Preguntas frecuentes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Preguntas Frecuentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-medium">¿Cómo puedo rastrear mi envío?</h4>
              <p className="text-sm text-gray-600 mt-1">
                Puedes rastrear tu envío usando el número de seguimiento que te proporcionamos. 
                También puedes usar la función de rastreo rápido en la página principal.
              </p>
            </div>
            
            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-medium">¿Cuáles son los tiempos de entrega?</h4>
              <p className="text-sm text-gray-600 mt-1">
                Los tiempos varían según el tipo de servicio: Express Nacional (24h), 
                Estándar Nacional (48h), Express Internacional (3-5 días), 
                Estándar Internacional (7-10 días).
              </p>
            </div>
            
            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-medium">¿Qué documentos necesito para envíos internacionales?</h4>
              <p className="text-sm text-gray-600 mt-1">
                Para envíos internacionales necesitas: descripción detallada del contenido, 
                valor declarado, y en algunos casos, documentos comerciales adicionales.
              </p>
            </div>
            
            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-medium">¿Puedo cambiar la dirección de entrega?</h4>
              <p className="text-sm text-gray-600 mt-1">
                Sí, puedes solicitar un cambio de dirección contactando a soporte 
                antes de que el envío salga de nuestro centro de distribución.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

