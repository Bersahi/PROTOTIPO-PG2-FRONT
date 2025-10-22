"use client";

import React from 'react';
import { Menu, Bell, User, LogIn } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Sidebar } from '../../../components/layout/Sidebar';
import { useApp } from '../../providers/AppProvider';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    opcionesSidebar,
    opcionSeleccionada,
    setOpcionSeleccionada,
    estaLogueado,
    rolUsuario,
    sidebarAbierto,
    setSidebarAbierto,
    setEstaLogueado
  } = useApp();

  const handleLogin = () => {
    setEstaLogueado(!estaLogueado);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header rojo superior */}
      <header className="bg-red-600 text-white px-6 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold text-sm">📦</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">VALOR EXPress</h1>
              <p className="text-sm text-red-100">Sistema de Envíos</p>
            </div>
          </div>
          <Button 
            variant="secondary"
            size="sm"
            onClick={handleLogin}
            className="flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100"
          >
            <LogIn className="h-4 w-4" />
            {estaLogueado ? 'Cerrar Sesión' : 'Acceder'}
          </Button>
        </div>
      </header>

      {/* Contenido principal con sidebar y área de contenido */}
      <div className="flex">
        {/* Sidebar negro */}
        <Sidebar
          opcionesSidebar={opcionesSidebar}
          opcionSeleccionada={opcionSeleccionada}
          setOpcionSeleccionada={setOpcionSeleccionada}
          estaLogueado={estaLogueado}
          rolUsuario={rolUsuario}
          sidebarAbierto={sidebarAbierto}
          setSidebarAbierto={setSidebarAbierto}
        />

        {/* Área de contenido principal */}
        <main className="flex-1 bg-white min-h-[calc(100vh-80px)] lg:ml-0">
          {/* Botón de menú para móvil */}
          <div className="lg:hidden p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarAbierto(!sidebarAbierto)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};
