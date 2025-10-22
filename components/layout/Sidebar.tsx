"use client";

import React from 'react';
import { User, Send, DollarSign, History, MessageCircle, MapPin, Settings, FileText, Brain, Database } from 'lucide-react';
import { Button } from '../ui/button';
import { OpcionSidebar } from '@/types';

interface SidebarProps {
  opcionesSidebar: OpcionSidebar[];
  opcionSeleccionada: string;
  setOpcionSeleccionada: (opcion: string) => void;
  estaLogueado: boolean;
  rolUsuario: 'cliente' | 'administrativo';
  sidebarAbierto: boolean;
  setSidebarAbierto: (abierto: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  opcionesSidebar,
  opcionSeleccionada,
  setOpcionSeleccionada,
  estaLogueado,
  rolUsuario,
  sidebarAbierto,
  setSidebarAbierto
}) => {
  const handleOpcionClick = (opcion: OpcionSidebar) => {
    if (opcion.requiereAuth && !estaLogueado) {
      // Aquí se podría mostrar un modal de login
      return;
    }
    setOpcionSeleccionada(opcion.id);
    setSidebarAbierto(false);
  };

  return (
    <>
      {/* Overlay para móvil */}
      {sidebarAbierto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarAbierto(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        w-64 bg-black text-white transform transition-transform duration-300 ease-in-out
        ${sidebarAbierto ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static
        ${sidebarAbierto ? 'fixed left-0 top-20 h-full z-50' : 'lg:block hidden lg:block'}
      `}>
        <div className="flex flex-col h-full min-h-[calc(100vh-80px)]">
          {/* Navegación */}
          <nav className="flex-1 p-6 space-y-2">
            {opcionesSidebar.map((opcion) => {
              const IconComponent = opcion.icon;
              const isSelected = opcionSeleccionada === opcion.id;
              const isDisabled = opcion.requiereAuth && !estaLogueado;

              return (
                <Button
                  key={opcion.id}
                  variant={isSelected ? "default" : "ghost"}
                  className={`
                    w-full justify-start gap-3 h-12 text-white
                    ${isSelected ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-gray-800 text-white'}
                    ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                  onClick={() => handleOpcionClick(opcion)}
                  disabled={isDisabled}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="text-sm font-medium">{opcion.label}</span>
                </Button>
              );
            })}
          </nav>

          {/* Footer del sidebar */}
          {estaLogueado && (
            <div className="p-4 border-t border-gray-700">
              <div className="space-y-2">
                <div className="text-xs text-gray-400">
                  Conectado como
                </div>
                <div className="text-sm font-medium text-white">
                  {rolUsuario === 'administrativo' ? 'Administrador' : 'Cliente'}
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
