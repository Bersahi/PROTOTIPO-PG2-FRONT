"use client";

import React from 'react';
import { Menu, Bell, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Sidebar } from './Sidebar';
import { OpcionSidebar } from '@/types';

interface LayoutProps {
  children: React.ReactNode;
  opcionesSidebar: OpcionSidebar[];
  opcionSeleccionada: string;
  setOpcionSeleccionada: (opcion: string) => void;
  estaLogueado: boolean;
  rolUsuario: 'cliente' | 'administrativo';
  sidebarAbierto: boolean;
  setSidebarAbierto: (abierto: boolean) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  opcionesSidebar,
  opcionSeleccionada,
  setOpcionSeleccionada,
  estaLogueado,
  rolUsuario,
  sidebarAbierto,
  setSidebarAbierto
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        opcionesSidebar={opcionesSidebar}
        opcionSeleccionada={opcionSeleccionada}
        setOpcionSeleccionada={setOpcionSeleccionada}
        estaLogueado={estaLogueado}
        rolUsuario={rolUsuario}
        sidebarAbierto={sidebarAbierto}
        setSidebarAbierto={setSidebarAbierto}
      />

      {/* Contenido principal */}
      <div className="lg:ml-64">
        {/* Header superior */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarAbierto(!sidebarAbierto)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h2 className="text-lg font-semibold text-gray-900">
                {opcionesSidebar.find(op => op.id === opcionSeleccionada)?.label || 'Dashboard'}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Contenido de la página */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
