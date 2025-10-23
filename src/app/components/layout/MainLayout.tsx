"use client";

import React, { useState } from 'react';
import { Menu, Bell, User, LogIn } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Sidebar } from '../../../components/layout/Sidebar';
import { LoginModal } from '../../../components/auth/LoginModal';
import { useApp } from '../../providers/AppProvider';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    opcionesSidebar,
    opcionSeleccionada,
    setOpcionSeleccionada,
    estaLogueado,
    rolUsuario,
    usuarioActual,
    sidebarAbierto,
    setSidebarAbierto,
    login,
    logout
  } = useApp();

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleLogin = () => {
    if (estaLogueado) {
      logout();
    } else {
      setLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = (user: any) => {
    login(user);
    setLoginModalOpen(false);
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
          {/* Botón de acceso */}
          <div className="flex items-center gap-3">
            {estaLogueado && usuarioActual ? (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium">{usuarioActual.nombre}</p>
                  <p className="text-xs text-red-100 capitalize">{usuarioActual.rol}</p>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-red-600" />
                </div>
              </div>
            ) : null}
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
      
      {/* Modal de Login */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};
