"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Brain, 
  Zap, 
  Clock, 
  BarChart3, 
  Activity, 
  Play,
  Settings,
  Users,
  Truck,
  Target,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function IALogisticsDashboard() {
  const [isSystemActive, setIsSystemActive] = useState(true);
  const [availableDrivers, setAvailableDrivers] = useState(8);
  const [aiRoutesGenerated, setAiRoutesGenerated] = useState(8);
  const [timeSaved, setTimeSaved] = useState(0);
  const [aiEfficiency, setAiEfficiency] = useState(0);
  const [activeVehicles, setActiveVehicles] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simular datos en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
      // Simular cambios en las métricas
      setTimeSaved(prev => Math.min(prev + Math.random() * 2, 15));
      setAiEfficiency(prev => Math.min(prev + Math.random() * 3, 25));
      setActiveVehicles(prev => Math.min(prev + Math.random() * 1, 5));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const volverAtras = () => {
    window.history.back();
  };

  const handleOptimizeRoutes = () => {
    console.log('Optimizando rutas...');
    setAiRoutesGenerated(prev => prev + 1);
  };

  const handleCalculateTime = () => {
    console.log('Calculando tiempo...');
    setTimeSaved(prev => prev + Math.random() * 5);
  };

  const handleGenerateReport = () => {
    console.log('Generando reporte IA...');
  };

  const handleRealTimeAnalysis = () => {
    console.log('Iniciando análisis en tiempo real...');
  };

  const handleTestSystem = () => {
    console.log('Probando sistema completo...');
  };

  const handleUpdateNow = () => {
    setLastUpdate(new Date());
    console.log('Actualizando datos...');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-GT', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={volverAtras}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Centro de Control IA Logistics</h1>
          <p className="text-gray-600 mt-1">Panel interactivo de optimización automática inteligente</p>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Sistema IA Activo */}
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sistema IA Activo</h3>
                  <p className="text-sm text-gray-600">Agrupación automática con mínimo 5 envíos por ruta</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conductores Disponibles */}
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Conductores Disponibles</h3>
                  <p className="text-sm text-gray-600">{availableDrivers} conductores listos para asignación automática</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleOptimizeRoutes}>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Optimizar Rutas</h3>
            <p className="text-xs text-gray-600">Forzar optimización</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleCalculateTime}>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Calcular Tiempo</h3>
            <p className="text-xs text-gray-600">Estimación IA</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleGenerateReport}>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Reporte IA</h3>
            <p className="text-xs text-gray-600">Análisis completo</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRealTimeAnalysis}>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Tiempo Real</h3>
            <p className="text-xs text-gray-600">Análisis live</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleTestSystem}>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Play className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Probar Sistema</h3>
            <p className="text-xs text-gray-600">Demo completa</p>
          </CardContent>
        </Card>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Rutas IA Generadas</p>
                <p className="text-3xl font-bold text-blue-600">{aiRoutesGenerated}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${Math.min(aiRoutesGenerated * 12.5, 100)}%` }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Tiempo Ahorrado</p>
                <p className="text-3xl font-bold text-green-600">{timeSaved.toFixed(1)}%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: `${Math.min(timeSaved * 6.67, 100)}%` }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Eficiencia IA</p>
                <p className="text-3xl font-bold text-purple-600">{aiEfficiency.toFixed(1)}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${Math.min(aiEfficiency * 4, 100)}%` }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Vehículos Activos</p>
                <p className="text-3xl font-bold text-orange-600">{activeVehicles}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: `${Math.min(activeVehicles * 20, 100)}%` }}></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Configuration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Sistema de Agrupación Inteligente */}
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Sistema de Agrupación Inteligente</h3>
                <p className="text-sm text-gray-600 mb-4">Optimización automática cuando se alcanzan 5+ envíos</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <p className="text-sm font-semibold text-green-800">5+</p>
                    <p className="text-xs text-green-600">Mín. envíos</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <p className="text-sm font-semibold text-blue-800">12</p>
                    <p className="text-xs text-blue-600">Máx. por ruta</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <p className="text-sm font-semibold text-purple-800">30</p>
                    <p className="text-xs text-purple-600">Min. espera</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Asignación Automática de Conductores */}
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Asignación Automática de Conductores</h3>
                <p className="text-sm text-gray-600 mb-4">Sistema inteligente de asignación por experiencia y rating</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <p className="text-sm font-semibold text-green-800">{availableDrivers}</p>
                    <p className="text-xs text-green-600">Conductores</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <p className="text-sm font-semibold text-blue-800">4.7</p>
                    <p className="text-xs text-blue-600">Rating prom.</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <p className="text-sm font-semibold text-purple-800">5.2</p>
                    <p className="text-xs text-purple-600">Años exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Auto Update Section */}
      <Card className="bg-gray-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Actualización Automática</h3>
                <p className="text-sm text-gray-600">
                  Los datos se actualizan automáticamente cada 5 segundos • Última actualización: {formatTime(lastUpdate)}
                </p>
              </div>
            </div>
            <Button 
              onClick={handleUpdateNow}
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Actualizar Ahora
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
