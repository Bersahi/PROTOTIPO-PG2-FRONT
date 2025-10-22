"use client";

import { MainLayout } from './components/layout/MainLayout';
import { useApp } from './providers/AppProvider';
import PaginaInicio from '../(pages)/inicio/page';
import PaginaRealizarEnvio from '../(pages)/realizar-envio/page';
import PaginaSoporte from '../(pages)/soporte/page';
import PaginaTarifas from '../(pages)/tarifas/page';
import PaginaUbicaciones from '../(pages)/ubicaciones/page';

export default function App() {
  const {
    opcionSeleccionada,
    busqueda,
    setBusqueda,
    ordenesFiltradas,
    manejarRastreoRapido,
    limpiarBusqueda,
    getEstadoIcono,
    getEstadoBadgeClass,
    formularioEnvio,
    setFormularioEnvio,
    handleSubmitEnvio,
    handleDepartamentoChange,
    handlePaisChange,
    volverAtras,
    cargandoIA,
    mensajeExito,
    departamentosGuatemala,
    paisesDisponibles,
    monedasDisponibles,
    tarifasMock
  } = useApp();

  // Renderizar contenido según la página seleccionada
  const renderContenido = () => {
    switch (opcionSeleccionada) {
      case 'inicio':
        return (
          <PaginaInicio
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            ordenesFiltradas={ordenesFiltradas}
            manejarRastreoRapido={manejarRastreoRapido}
            limpiarBusqueda={limpiarBusqueda}
            getEstadoIcono={getEstadoIcono}
            getEstadoBadgeClass={getEstadoBadgeClass}
          />
        );
      case 'realizar-envio':
        return (
          <PaginaRealizarEnvio
            formularioEnvio={formularioEnvio}
            setFormularioEnvio={setFormularioEnvio}
            handleSubmitEnvio={handleSubmitEnvio}
            handleDepartamentoChange={handleDepartamentoChange}
            handlePaisChange={handlePaisChange}
            volverAtras={volverAtras}
            cargandoIA={cargandoIA}
            mensajeExito={mensajeExito}
            departamentosGuatemala={departamentosGuatemala}
            paisesDisponibles={paisesDisponibles}
            monedasDisponibles={monedasDisponibles}
            tarifasMock={tarifasMock}
          />
        );
      case 'soporte':
        return <PaginaSoporte volverAtras={volverAtras} />;
      case 'tarifas':
        return <PaginaTarifas volverAtras={volverAtras} tarifasMock={tarifasMock} />;
      case 'ubicaciones':
        return <PaginaUbicaciones volverAtras={volverAtras} />;
      default:
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl mb-4">Página en desarrollo</h2>
            <p className="text-gray-600">Esta funcionalidad estará disponible próximamente.</p>
          </div>
        );
    }
  };

  return (
    <MainLayout>
      {renderContenido()}
    </MainLayout>
  );
}
