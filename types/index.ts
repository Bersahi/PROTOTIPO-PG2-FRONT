// Tipos principales del sistema de envíos

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  rol: 'cliente' | 'administrativo';
  fechaRegistro: string;
}

export interface Direccion {
  nombre: string;
  telefono: string;
  direccion: string;
  municipio: string;
  departamento: string;
  pais: string;
  region: string;
  ciudad: string;
  codigoPostal: string;
}

export interface Paquete {
  peso: string;
  dimensiones: string;
  valor: string;
  moneda: string;
  tipoServicio: string;
  descripcion: string;
}

export interface Envio {
  id: string;
  numeroRastreo: string;
  remitente: Direccion;
  destinatario: Direccion;
  paquete: Paquete;
  estado: 'creado' | 'pendiente' | 'recolectado' | 'en_transito' | 'enviado' | 'en_reparto' | 'entregado' | 'optimizado';
  fechaCreacion: string;
  fechaEstimada: string;
  fechaEntrega?: string;
  costo: number;
  moneda: string;
  vehiculoAsignado?: 'moto' | 'van' | 'camion';
  rutaOptimizada?: RutaOptimizada;
  historialEstados: EstadoEnvio[];
}

export interface EstadoEnvio {
  estado: string;
  fecha: string;
  ubicacion: string;
  observaciones?: string;
}

export interface RutaOptimizada {
  id: string;
  envios: string[];
  vehiculo: 'moto' | 'van' | 'camion';
  distanciaTotal: number;
  tiempoEstimado: number;
  optimizacionIA: boolean;
  fechaOptimizacion: string;
}

export interface EstadisticasDashboard {
  totalEnvios: number;
  enviosHoy: number;
  enviosPendientes: number;
  enviosEntregados: number;
  enviosEnTransito: number;
  ingresosHoy: number;
  ingresosMes: number;
  eficienciaIA: number;
}

export interface Tarifa {
  id: string;
  servicio: string;
  precio: string;
  descripcion: string;
  tipo: 'nacional' | 'internacional';
  tiempoEstimado: string;
}

export interface Ubicacion {
  id: number;
  nombre: string;
  direccion: string;
  coordenadas: string;
  telefono: string;
  horario: string;
  tipo: 'sede_principal' | 'centro_distribucion' | 'oficina_fronteriza' | 'oficina_region';
  descripcion: string;
}

export interface DepartamentoGuatemala {
  value: string;
  label: string;
  region: string;
}

export interface Pais {
  value: string;
  label: string;
}

export interface Moneda {
  value: string;
  label: string;
  symbol: string;
}

export interface MensajeChat {
  id: string;
  tipo: 'usuario' | 'packito';
  contenido: string;
  timestamp: string;
}

export interface EstadisticasIA {
  rutasOptimizadas: number;
  tiempoAhorrado: number;
  combustibleAhorrado: number;
  eficienciaPromedio: number;
  ultimaOptimizacion: string;
}

export interface NotificacionEstimacion {
  id: string;
  envioId: string;
  tipo: 'tiempo' | 'ruta' | 'vehiculo';
  mensaje: string;
  fecha: string;
  leida: boolean;
}

// Estados del formulario
export interface FormularioLogin {
  email: string;
  password: string;
}

export interface FormularioEnvio {
  remitente: Direccion;
  destinatario: Direccion;
  paquete: Paquete;
}

export interface PerfilUsuario {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
}

export interface Configuracion {
  notificacionesEmail: boolean;
  notificacionesSMS: boolean;
  idioma: string;
  tema: 'claro' | 'oscuro';
}

// Opciones de navegación
export interface OpcionSidebar {
  id: string;
  label: string;
  icon: any;
  requiereAuth: boolean;
}
