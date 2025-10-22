"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Send, DollarSign, History, MessageCircle, MapPin, Settings, FileText, Brain, Database, CheckCircle, Truck, Clock, Package } from 'lucide-react';
import { 
  Usuario, 
  FormularioEnvio, 
  OpcionSidebar,
  DepartamentoGuatemala,
  Pais,
  Moneda,
  Tarifa
} from '../../types';

// Datos mock iniciales
const ordenesMockInicial = [
  {
    id: "PKG001",
    descripcion: "Orden #001",
    estado: "enviado" as const,
    fecha: "18 Jul 2025",
    destino: "Barcelona, España"
  },
  {
    id: "PKG002",
    descripcion: "Orden #002",
    estado: "entregado" as const,
    fecha: "15 Jul 2025",
    destino: "Ciudad de Guatemala, Guatemala"
  },
  {
    id: "PKG003",
    descripcion: "Orden #003",
    estado: "pendiente" as const,
    fecha: "20 Jul 2025",
    destino: "Managua, Nicaragua"
  }
];

const opcionesSidebarCliente: OpcionSidebar[] = [
  { id: 'inicio', label: 'Inicio', icon: User, requiereAuth: false },
  { id: 'realizar-envio', label: 'Realizar Envío', icon: Send, requiereAuth: false },
  { id: 'tarifas', label: 'Tarifas', icon: DollarSign, requiereAuth: false },
  { id: 'historial', label: 'Mis Envíos', icon: History, requiereAuth: true },
  { id: 'soporte', label: 'Soporte', icon: MessageCircle, requiereAuth: false },
  { id: 'ubicaciones', label: 'Ubicaciones', icon: MapPin, requiereAuth: false },
  { id: 'configuracion', label: 'Configuración', icon: Settings, requiereAuth: true },
];

const opcionesSidebarAdmin: OpcionSidebar[] = [
  { id: 'inicio', label: 'Inicio', icon: User, requiereAuth: false },
  { id: 'resumen', label: 'Resumen de Envíos', icon: FileText, requiereAuth: true },
  { id: 'ia-logistics', label: 'IA Logistics', icon: Brain, requiereAuth: true },
  { id: 'base-datos', label: 'Base de Datos', icon: Database, requiereAuth: true },
  { id: 'realizar-envio', label: 'Crear Envío', icon: Send, requiereAuth: false },
  { id: 'tarifas', label: 'Tarifas', icon: DollarSign, requiereAuth: false },
  { id: 'historial', label: 'Todos los Envíos', icon: History, requiereAuth: true },
  { id: 'soporte', label: 'Soporte', icon: MessageCircle, requiereAuth: false },
  { id: 'ubicaciones', label: 'Ubicaciones', icon: MapPin, requiereAuth: false },
  { id: 'configuracion', label: 'Configuración', icon: Settings, requiereAuth: true },
];

const departamentosGuatemala: DepartamentoGuatemala[] = [
  { value: 'guatemala', label: 'Guatemala', region: 'Metropolitana' },
  { value: 'quetzaltenango', label: 'Quetzaltenango', region: 'Occidente' },
  { value: 'sacatepequez', label: 'Sacatepéquez', region: 'Central' },
  { value: 'chimaltenango', label: 'Chimaltenango', region: 'Central' },
  { value: 'escuintla', label: 'Escuintla', region: 'Sur' },
  { value: 'santa_rosa', label: 'Santa Rosa', region: 'Sur' },
  { value: 'jutiapa', label: 'Jutiapa', region: 'Oriente' },
  { value: 'jalapa', label: 'Jalapa', region: 'Oriente' },
  { value: 'zacapa', label: 'Zacapa', region: 'Oriente' },
  { value: 'chiquimula', label: 'Chiquimula', region: 'Oriente' },
  { value: 'izabal', label: 'Izabal', region: 'Norte' },
  { value: 'alta_verapaz', label: 'Alta Verapaz', region: 'Norte' },
  { value: 'baja_verapaz', label: 'Baja Verapaz', region: 'Norte' },
  { value: 'peten', label: 'Petén', region: 'Norte' },
  { value: 'huehuetenango', label: 'Huehuetenango', region: 'Occidente' },
  { value: 'quiche', label: 'Quiché', region: 'Occidente' },
  { value: 'solola', label: 'Sololá', region: 'Occidente' },
  { value: 'totonicapan', label: 'Totonicapán', region: 'Occidente' },
  { value: 'retalhuleu', label: 'Retalhuleu', region: 'Occidente' },
  { value: 'san_marcos', label: 'San Marcos', region: 'Occidente' },
  { value: 'suchitepequez', label: 'Suchitepéquez', region: 'Sur' }
];

const paisesDisponibles: Pais[] = [
  { value: 'gt', label: 'Guatemala' },
  { value: 'mx', label: 'México' },
  { value: 'us', label: 'Estados Unidos' },
  { value: 'ca', label: 'Canadá' },
  { value: 'es', label: 'España' },
  { value: 'ni', label: 'Nicaragua' },
  { value: 'cr', label: 'Costa Rica' },
  { value: 'hn', label: 'Honduras' },
  { value: 'sv', label: 'El Salvador' },
  { value: 'pa', label: 'Panamá' },
  { value: 'co', label: 'Colombia' },
  { value: 've', label: 'Venezuela' }
];

const monedasDisponibles: Moneda[] = [
  { value: 'gtq', label: 'Quetzal Guatemalteco', symbol: 'Q' },
  { value: 'usd', label: 'Dólar Estadounidense', symbol: '$' },
  { value: 'eur', label: 'Euro', symbol: '€' },
  { value: 'mxp', label: 'Peso Mexicano', symbol: '$' },
  { value: 'cad', label: 'Dólar Canadiense', symbol: 'C$' }
];

const tarifasMock: Tarifa[] = [
  { id: '1', servicio: 'Express Nacional', precio: 'Q25', descripcion: 'Entrega en 24 horas', tipo: 'nacional', tiempoEstimado: '24 horas' },
  { id: '2', servicio: 'Estándar Nacional', precio: 'Q15', descripcion: 'Entrega en 48 horas', tipo: 'nacional', tiempoEstimado: '48 horas' },
  { id: '3', servicio: 'Express Internacional', precio: '$35', descripcion: 'Entrega en 3-5 días', tipo: 'internacional', tiempoEstimado: '3-5 días' },
  { id: '4', servicio: 'Estándar Internacional', precio: '$25', descripcion: 'Entrega en 7-10 días', tipo: 'internacional', tiempoEstimado: '7-10 días' }
];

interface AppContextType {
  // Estados de autenticación
  estaLogueado: boolean;
  setEstaLogueado: (value: boolean) => void;
  rolUsuario: 'cliente' | 'administrativo';
  setRolUsuario: (value: 'cliente' | 'administrativo') => void;
  usuarioActual: Usuario;
  setUsuarioActual: (value: Usuario) => void;

  // Estados de navegación
  sidebarAbierto: boolean;
  setSidebarAbierto: (value: boolean) => void;
  opcionSeleccionada: string;
  setOpcionSeleccionada: (value: string) => void;

  // Estados de búsqueda y datos
  busqueda: string;
  setBusqueda: (value: string) => void;
  ordenesReales: any[];
  setOrdenesReales: (value: any[]) => void;
  ordenesFiltradas: any[];
  setOrdenesFiltradas: (value: any[]) => void;

  // Estados para formulario de envío
  formularioEnvio: FormularioEnvio;
  setFormularioEnvio: React.Dispatch<React.SetStateAction<FormularioEnvio>>;
  cargandoIA: boolean;
  setCargandoIA: (value: boolean) => void;
  mensajeExito: boolean;
  setMensajeExito: (value: boolean) => void;

  // Datos mock
  opcionesSidebar: OpcionSidebar[];
  departamentosGuatemala: DepartamentoGuatemala[];
  paisesDisponibles: Pais[];
  monedasDisponibles: Moneda[];
  tarifasMock: Tarifa[];

  // Funciones
  limpiarBusqueda: () => void;
  manejarRastreoRapido: () => void;
  volverAtras: () => void;
  handleDepartamentoChange: (departamento: string, tipo: 'remitente' | 'destinatario') => void;
  handlePaisChange: (pais: string, tipo: 'remitente' | 'destinatario') => void;
  handleSubmitEnvio: (e: React.FormEvent) => Promise<void>;
  getEstadoIcono: (estado: string) => React.ReactNode;
  getEstadoBadgeClass: (estado: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estados de autenticación
  const [estaLogueado, setEstaLogueado] = useState(false);
  const [rolUsuario, setRolUsuario] = useState<'cliente' | 'administrativo'>('cliente');
  const [usuarioActual, setUsuarioActual] = useState<Usuario>({
    id: '',
    nombre: '',
    email: '',
    telefono: '',
    rol: 'cliente',
    fechaRegistro: ''
  });

  // Estados de navegación
  const [sidebarAbierto, setSidebarAbierto] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('inicio');

  // Estados de búsqueda y datos
  const [busqueda, setBusqueda] = useState('');
  const [ordenesReales, setOrdenesReales] = useState(ordenesMockInicial);
  const [ordenesFiltradas, setOrdenesFiltradas] = useState(ordenesMockInicial);

  // Estados para formulario de envío
  const [formularioEnvio, setFormularioEnvio] = useState<FormularioEnvio>({
    remitente: {
      nombre: '',
      telefono: '',
      direccion: '',
      municipio: '',
      departamento: '',
      pais: '',
      region: '',
      ciudad: '',
      codigoPostal: ''
    },
    destinatario: {
      nombre: '',
      telefono: '',
      direccion: '',
      municipio: '',
      departamento: '',
      pais: '',
      region: '',
      ciudad: '',
      codigoPostal: ''
    },
    paquete: {
      peso: '',
      dimensiones: '',
      valor: '',
      moneda: '',
      tipoServicio: '',
      descripcion: ''
    }
  });

  const [cargandoIA, setCargandoIA] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);

  // Determinar opciones del sidebar según el rol
  const opcionesSidebar = rolUsuario === 'administrativo' ? opcionesSidebarAdmin : opcionesSidebarCliente;

  // Efectos
  useEffect(() => {
    const resultadosFiltrados = ordenesReales.filter(orden =>
      orden.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      orden.destino.toLowerCase().includes(busqueda.toLowerCase()) ||
      orden.id.toLowerCase().includes(busqueda.toLowerCase())
    );
    setOrdenesFiltradas(resultadosFiltrados);
  }, [busqueda, ordenesReales]);

  // Funciones de utilidad
  const getEstadoIcono = (estado: string) => {
    switch (estado) {
      case 'entregado':
        return <CheckCircle className="h-4 w-4" />;
      case 'enviado':
        return <Truck className="h-4 w-4" />;
      case 'pendiente':
        return <Clock className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getEstadoBadgeClass = (estado: string) => {
    switch (estado) {
      case 'entregado':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'enviado':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'pendiente':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  // Funciones de manejo
  const limpiarBusqueda = () => {
    setBusqueda('');
  };

  const manejarRastreoRapido = () => {
    console.log('Rastreo rápido');
  };

  const volverAtras = () => {
    setOpcionSeleccionada('inicio');
  };

  const handleDepartamentoChange = (departamento: string, tipo: 'remitente' | 'destinatario') => {
    const departamentoData = departamentosGuatemala.find(d => d.value === departamento);
    if (departamentoData) {
      setFormularioEnvio(prev => ({
        ...prev,
        [tipo]: {
          ...prev[tipo],
          departamento,
          region: departamentoData.region
        }
      }));
    }
  };

  const handlePaisChange = (pais: string, tipo: 'remitente' | 'destinatario') => {
    setFormularioEnvio(prev => ({
      ...prev,
      [tipo]: {
        ...prev[tipo],
        pais
      }
    }));
  };

  const handleSubmitEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargandoIA(true);
    
    try {
      // Simular procesamiento con IA por ahora
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Crear nuevo envío (mock data)
      const nuevoEnvio = {
        id: `PKG${String(ordenesReales.length + 1).padStart(3, '0')}`,
        descripcion: `Orden #${String(ordenesReales.length + 1).padStart(3, '0')}`,
        estado: 'pendiente' as const,
        fecha: new Date().toLocaleDateString('es-GT'),
        destino: `${formularioEnvio.destinatario.ciudad}, ${formularioEnvio.destinatario.pais}`
      };

      setOrdenesReales(prev => [nuevoEnvio, ...prev]);
      setOpcionSeleccionada('inicio');
      setMensajeExito(true);
      
      console.log('Envío creado exitosamente:', nuevoEnvio);
    } catch (error) {
      console.error('Error al crear envío:', error);
    } finally {
      setCargandoIA(false);
    }
  };

  const value: AppContextType = {
    // Estados de autenticación
    estaLogueado,
    setEstaLogueado,
    rolUsuario,
    setRolUsuario,
    usuarioActual,
    setUsuarioActual,

    // Estados de navegación
    sidebarAbierto,
    setSidebarAbierto,
    opcionSeleccionada,
    setOpcionSeleccionada,

    // Estados de búsqueda y datos
    busqueda,
    setBusqueda,
    ordenesReales,
    setOrdenesReales,
    ordenesFiltradas,
    setOrdenesFiltradas,

    // Estados para formulario de envío
    formularioEnvio,
    setFormularioEnvio,
    cargandoIA,
    setCargandoIA,
    mensajeExito,
    setMensajeExito,

    // Datos mock
    opcionesSidebar,
    departamentosGuatemala,
    paisesDisponibles,
    monedasDisponibles,
    tarifasMock,

    // Funciones
    limpiarBusqueda,
    manejarRastreoRapido,
    volverAtras,
    handleDepartamentoChange,
    handlePaisChange,
    handleSubmitEnvio,
    getEstadoIcono,
    getEstadoBadgeClass,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
