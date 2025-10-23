"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  Bot, 
  Send, 
  Package, 
  DollarSign, 
  AlertTriangle, 
  MapPin,
  CheckCircle,
  Clock,
  User
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';

interface Mensaje {
  id: string;
  texto: string;
  esUsuario: boolean;
  timestamp: Date;
  tipo?: 'texto' | 'sugerencia';
}

export default function ChatPackito() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: '1',
      texto: '¡Hola! 👋 Soy Packito, tu asistente virtual de VALOR EXPress. Estoy aquí para ayudarte con cualquier consulta sobre tus envíos.\n\n¿En qué puedo ayudarte hoy? Puedo asistirte con:\n\n📦 Rastreo de paquetes\n📄 Estado de envíos\n💰 Consulta de tarifas\n⚠️ Reportar disputas o problemas\n📍 Ubicaciones de nuestras oficinas\n\n¡Solo escribe tu consulta y te ayudo de inmediato!',
      esUsuario: false,
      timestamp: new Date(),
      tipo: 'texto'
    }
  ]);
  
  const [mensajeActual, setMensajeActual] = useState('');
  const [estaEscribiendo, setEstaEscribiendo] = useState(false);
  const mensajesEndRef = useRef<HTMLDivElement>(null);

  const sugerenciasRapidas = [
    'Rastrear PKG001',
    '¿Cuánto cuesta enviar?',
    'Mis envíos recientes',
    'Tengo un problema',
    'Ubicaciones'
  ];

  const volverAtras = () => {
    window.history.back();
  };

  const scrollToBottom = () => {
    mensajesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [mensajes]);

  const enviarMensaje = async (texto: string) => {
    if (!texto.trim()) return;

    const nuevoMensajeUsuario: Mensaje = {
      id: Date.now().toString(),
      texto: texto.trim(),
      esUsuario: true,
      timestamp: new Date(),
      tipo: 'texto'
    };

    setMensajes(prev => [...prev, nuevoMensajeUsuario]);
    setMensajeActual('');
    setEstaEscribiendo(true);

    // Simular respuesta de Packito
    setTimeout(() => {
      const respuestaPackito = generarRespuestaPackito(texto.trim());
      const mensajePackito: Mensaje = {
        id: (Date.now() + 1).toString(),
        texto: respuestaPackito,
        esUsuario: false,
        timestamp: new Date(),
        tipo: 'texto'
      };

      setMensajes(prev => [...prev, mensajePackito]);
      setEstaEscribiendo(false);
    }, 1500);
  };

  const generarRespuestaPackito = (consulta: string): string => {
    const consultaLower = consulta.toLowerCase();

    if (consultaLower.includes('rastrear') || consultaLower.includes('pkg')) {
      return '📦 **Información de Rastreo**\n\nPara rastrear tu envío, necesito el número de seguimiento. Los números de envío tienen el formato PKG seguido de números.\n\n**Ejemplo:** PKG001, PKG002, etc.\n\nSi tienes el número, puedo buscar el estado actual de tu envío en nuestro sistema.\n\n¿Podrías proporcionarme el número de seguimiento?';
    }

    if (consultaLower.includes('cuesta') || consultaLower.includes('precio') || consultaLower.includes('tarifa')) {
      return '💰 **Consulta de Tarifas**\n\nLas tarifas varían según el destino y tipo de servicio:\n\n**Servicios Nacionales:**\n• Express: Q 25.00 (24 horas)\n• Estándar: Q 15.00 (48 horas)\n\n**Servicios Internacionales:**\n• Express: Q 150.00 (3-5 días)\n• Estándar: Q 100.00 (7-10 días)\n\n¿A qué país quieres enviar? Puedo calcular el costo exacto.';
    }

    if (consultaLower.includes('problema') || consultaLower.includes('disputa') || consultaLower.includes('perdido')) {
      return '⚠️ **Reporte de Problemas**\n\nLamento escuchar que tienes un problema con tu envío. Para ayudarte mejor, necesito:\n\n• Número de seguimiento del envío\n• Descripción detallada del problema\n• Fecha aproximada del incidente\n\nUna vez que tengas esta información, puedo crear un reporte oficial y conectarte con nuestro equipo de soporte especializado.\n\n¿Podrías proporcionarme estos detalles?';
    }

    if (consultaLower.includes('ubicacion') || consultaLower.includes('oficina')) {
      return '📍 **Ubicaciones de Oficinas**\n\nTenemos oficinas en las siguientes ubicaciones:\n\n**Ciudad de Guatemala:**\n• Zona 12: Centro de Distribución Central\n• Zona 10: Oficina Principal\n\n**Otras Ciudades:**\n• Quetzaltenango: Centro Comercial\n• Antigua Guatemala: Plaza Central\n\n¿En qué ciudad necesitas información específica?';
    }

    if (consultaLower.includes('envio') && consultaLower.includes('reciente')) {
      return '📋 **Envíos Recientes**\n\nPara consultar tus envíos recientes, necesito que inicies sesión en tu cuenta. Una vez logueado, podrás ver:\n\n• Historial completo de envíos\n• Estados actualizados\n• Información de seguimiento\n• Documentos de envío\n\n¿Ya tienes una cuenta con nosotros?';
    }

    // Respuesta genérica
    return '🤖 **Packito te ayuda**\n\nEntiendo tu consulta. Puedo ayudarte con:\n\n• **Rastreo:** Proporciona el número PKG\n• **Tarifas:** Indica el destino\n• **Problemas:** Describe el incidente\n• **Ubicaciones:** Especifica la ciudad\n• **Envíos:** Inicia sesión para ver historial\n\n¿Podrías ser más específico sobre lo que necesitas?';
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    enviarMensaje(mensajeActual);
  };

  const manejarSugerencia = (sugerencia: string) => {
    enviarMensaje(sugerencia);
  };

  const formatearHora = (fecha: Date) => {
    return fecha.toLocaleTimeString('es-GT', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header del Chat */}
      <div className="bg-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={volverAtras} className="text-white hover:bg-purple-700">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Packito - Asistente IA</h1>
              <p className="text-sm text-purple-100">En línea • Respuesta inmediata</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-sm">Conectado</span>
        </div>
      </div>

      {/* Área de Mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mensajes.map((mensaje) => (
          <div
            key={mensaje.id}
            className={`flex ${mensaje.esUsuario ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
              mensaje.esUsuario 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-gray-900 shadow-sm'
            }`}>
              {!mensaje.esUsuario && (
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="h-4 w-4 text-purple-600" />
                  <span className="text-xs font-medium text-purple-600">Packito</span>
                </div>
              )}
              <div className="whitespace-pre-line text-sm">
                {mensaje.texto}
              </div>
              <div className={`text-xs mt-2 ${
                mensaje.esUsuario ? 'text-purple-100' : 'text-gray-500'
              }`}>
                {formatearHora(mensaje.timestamp)}
              </div>
            </div>
          </div>
        ))}

        {/* Indicador de escritura */}
        {estaEscribiendo && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-900 shadow-sm px-4 py-3 rounded-lg">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-purple-600" />
                <span className="text-xs font-medium text-purple-600">Packito está escribiendo</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={mensajesEndRef} />
      </div>

      {/* Área de Input */}
      <div className="bg-white border-t p-4">
        <form onSubmit={manejarEnvio} className="space-y-3">
          <div className="flex gap-2">
            <Input
              value={mensajeActual}
              onChange={(e) => setMensajeActual(e.target.value)}
              placeholder="Escribe tu mensaje... (ej: Rastrear PKG001, ¿Cuánto cuesta enviar a Costa Rica?)"
              className="flex-1"
            />
            <Button 
              type="submit" 
              className="bg-purple-600 hover:bg-purple-700"
              disabled={!mensajeActual.trim() || estaEscribiendo}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Sugerencias rápidas */}
          <div>
            <p className="text-sm text-gray-600 mb-2">Sugerencias rápidas:</p>
            <div className="flex flex-wrap gap-2">
              {sugerenciasRapidas.map((sugerencia, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => manejarSugerencia(sugerencia)}
                  disabled={estaEscribiendo}
                  className="text-xs"
                >
                  {sugerencia}
                </Button>
              ))}
            </div>
          </div>
        </form>

        {/* Footer del chat */}
        <div className="mt-3 pt-3 border-t border-gray-200">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Bot className="h-3 w-3" />
            <span>Packito puede ayudarte con rastreo, tarifas, estados y disputas usando datos reales del sistema</span>
          </div>
        </div>
      </div>
    </div>
  );
}
