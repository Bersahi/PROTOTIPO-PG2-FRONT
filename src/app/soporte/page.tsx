"use client";

import React from 'react';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  HelpCircle, 
  ArrowLeft, 
  Bot,
  Send,
  MapPin,
  Package,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Users,
  Headphones
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';

export default function PaginaSoporte() {
  const volverAtras = () => {
    window.history.back();
  };

  const iniciarChat = () => {
    // Navegar a la página de chat
    window.location.href = '/chat-packito';
  };

  const canalesSoporte = [
    {
      id: 'chat',
      titulo: 'Chat con Packito',
      descripcion: 'Asistente IA disponible 24/7',
      icono: Bot,
      color: 'bg-purple-100 text-purple-600',
      accion: iniciarChat,
      destacado: true
    },
    {
      id: 'telefono',
      titulo: 'Línea Telefónica',
      descripcion: 'Lunes a Viernes 8:00 - 18:00',
      icono: Phone,
      color: 'bg-green-100 text-green-600',
      contacto: '+502 1234-5678'
    },
    {
      id: 'email',
      titulo: 'Correo Electrónico',
      descripcion: 'Respuesta en 24 horas',
      icono: Mail,
      color: 'bg-blue-100 text-blue-600',
      contacto: 'soporte@valorexpress.com'
    }
  ];

  const preguntasFrecuentes = [
    {
      pregunta: '¿Cómo puedo rastrear mi envío?',
      respuesta: 'Puedes rastrear tu envío usando el número de seguimiento en la página de inicio o preguntarle directamente a Packito.',
      categoria: 'Rastreo'
    },
    {
      pregunta: '¿Cuáles son los tiempos de entrega?',
      respuesta: 'Los tiempos varían según el destino: Nacional 1-2 días, Internacional 3-7 días laborables.',
      categoria: 'Tiempos'
    },
    {
      pregunta: '¿Cómo calcular el costo de envío?',
      respuesta: 'Usa nuestra calculadora de tarifas en la sección "Tarifas" o consulta directamente con Packito.',
      categoria: 'Costos'
    },
    {
      pregunta: '¿Qué hacer si mi paquete se perdió?',
      respuesta: 'Contacta inmediatamente a soporte. Tenemos un proceso de investigación y compensación.',
      categoria: 'Problemas'
    }
  ];

  const serviciosPackito = [
    { icono: Package, texto: 'Rastreo de paquetes', color: 'text-blue-600' },
    { icono: CheckCircle, texto: 'Estado de envíos', color: 'text-green-600' },
    { icono: DollarSign, texto: 'Consulta de tarifas', color: 'text-yellow-600' },
    { icono: AlertTriangle, texto: 'Reportar problemas', color: 'text-red-600' },
    { icono: MapPin, texto: 'Ubicaciones de oficinas', color: 'text-purple-600' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={volverAtras}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Centro de Soporte</h1>
          <p className="text-gray-600 mt-1">Estamos aquí para ayudarte con cualquier consulta</p>
        </div>
      </div>

      {/* Packito - Asistente Principal */}
      <Card className="mb-8 border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-white">
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <Bot className="h-10 w-10 text-purple-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-gray-900">Packito - Asistente IA</h2>
                <Badge className="bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  En línea
                </Badge>
              </div>
              <p className="text-gray-600 mb-4">
                Tu asistente virtual disponible 24/7. Puedo ayudarte con rastreo, tarifas, estados y más usando datos reales del sistema.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {serviciosPackito.map((servicio, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <servicio.icono className={`h-4 w-4 ${servicio.color}`} />
                    <span className="text-gray-700">{servicio.texto}</span>
                  </div>
                ))}
              </div>
              <Button 
                onClick={iniciarChat}
                className="bg-purple-600 hover:bg-purple-700 text-white"
                size="lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Iniciar Chat con Packito
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Canales de Soporte */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {canalesSoporte.map((canal) => (
          <Card 
            key={canal.id} 
            className={`hover:shadow-lg transition-shadow ${canal.destacado ? 'ring-2 ring-purple-200' : ''}`}
            onClick={canal.accion}
          >
            <CardContent className="p-6 text-center">
              <div className={`w-16 h-16 ${canal.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <canal.icono className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{canal.titulo}</h3>
              <p className="text-gray-600 mb-3">{canal.descripcion}</p>
              {canal.contacto && (
                <p className="text-sm font-medium text-gray-800">{canal.contacto}</p>
              )}
              {canal.accion && (
                <Button 
                  variant="outline" 
                  className="mt-3 w-full"
                  onClick={canal.accion}
                >
                  {canal.id === 'chat' ? 'Iniciar Chat' : 'Contactar'}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Preguntas Frecuentes */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-blue-600" />
            Preguntas Frecuentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preguntasFrecuentes.map((faq, index) => (
              <div key={index} className="border-l-4 border-l-blue-200 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {faq.categoria}
                  </Badge>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{faq.pregunta}</h4>
                <p className="text-gray-600 text-sm">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Formulario de Contacto */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-6 w-6 text-green-600" />
            Envíanos un Mensaje
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input id="nombre" placeholder="Tu nombre completo" />
              </div>
              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
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
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              <Send className="h-4 w-4 mr-2" />
              Enviar Mensaje
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Footer de Soporte */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Headphones className="h-4 w-4" />
            <span>Soporte disponible 24/7 con Packito</span>
          </div>
          <div className="text-xs text-gray-500">
            Última actualización: {new Date().toLocaleDateString('es-GT')}
          </div>
        </div>
      </div>
    </div>
  );
}