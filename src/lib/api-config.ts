// Configuración de la API local (NestJS)

export const API_CONFIG = {
  // URL base de la API (NestJS)
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
  
  // Endpoints de la API
  ENDPOINTS: {
    // Envíos
    ENVIOS: '/api/envios',
    CREAR_ENVIO: '/api/envios',
    OBTENER_ENVIOS: '/api/envios',
    RASTREAR_ENVIO: '/api/envios/rastrear',
    
    // Estimaciones
    CONSULTAR_ESTIMACION: '/api/estimaciones',
    OBTENER_NOTIFICACIONES: '/api/notificaciones',
    
    // IA y Optimización
    RUTAS_OPTIMIZADAS: '/api/ia/rutas-optimizadas',
    NOTIFICACIONES_ESTIMACIONES: '/api/ia/notificaciones-estimaciones',
    NOTIFICACIONES_IA: '/api/ia/notificaciones',
    FORZAR_OPTIMIZACION: '/api/ia/forzar-optimizacion',
    CALCULAR_TIEMPO_ENTREGA: '/api/ia/calcular-tiempo',
    ESTADISTICAS_IA: '/api/ia/estadisticas',
    
    // Recursos adicionales
    CONDUCTORES_DISPONIBLES: '/api/conductores/disponibles',
    ENVIOS_PENDIENTES: '/api/envios/pendientes-agrupacion',
    RUTAS_ACTIVAS: '/api/rutas/activas',
    SIMULAR_PROCESO: '/api/ia/simular-proceso',
    ENVIOS_RECIENTES: '/api/envios/recientes',
  }
};

// Función helper para construir URLs completas
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Función helper para hacer requests a la API
export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = buildApiUrl(endpoint);
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};
