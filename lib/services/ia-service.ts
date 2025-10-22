// Servicio para manejar operaciones de IA y optimización

import { apiRequest, API_CONFIG } from '../api-config';

export class IAService {
  // Obtener rutas optimizadas
  static async obtenerRutasOptimizadas(): Promise<any> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.RUTAS_OPTIMIZADAS, {
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error al obtener rutas optimizadas:', error);
      throw error;
    }
  }

  // Consultar estimación de entrega
  static async consultarEstimacion(datosEnvio: any): Promise<any> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.CONSULTAR_ESTIMACION, {
        method: 'POST',
        body: JSON.stringify(datosEnvio)
      });
      return response;
    } catch (error) {
      console.error('Error al consultar estimación:', error);
      throw error;
    }
  }

  // Obtener notificaciones de estimaciones
  static async obtenerNotificacionesEstimaciones(): Promise<any[]> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.NOTIFICACIONES_ESTIMACIONES, {
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error al obtener notificaciones:', error);
      throw error;
    }
  }

  // Forzar optimización manual
  static async forzarOptimizacion(): Promise<any> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.FORZAR_OPTIMIZACION, {
        method: 'POST'
      });
      return response;
    } catch (error) {
      console.error('Error al forzar optimización:', error);
      throw error;
    }
  }

  // Calcular tiempo de entrega
  static async calcularTiempoEntrega(datosRuta: any): Promise<any> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.CALCULAR_TIEMPO_ENTREGA, {
        method: 'POST',
        body: JSON.stringify(datosRuta)
      });
      return response;
    } catch (error) {
      console.error('Error al calcular tiempo de entrega:', error);
      throw error;
    }
  }

  // Obtener estadísticas de IA
  static async obtenerEstadisticasIA(): Promise<any> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.ESTADISTICAS_IA, {
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error al obtener estadísticas de IA:', error);
      throw error;
    }
  }

  // Simular proceso completo
  static async simularProcesoCompleto(): Promise<any> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.SIMULAR_PROCESO, {
        method: 'POST'
      });
      return response;
    } catch (error) {
      console.error('Error al simular proceso:', error);
      throw error;
    }
  }

  // Obtener conductores disponibles
  static async obtenerConductoresDisponibles(): Promise<any[]> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.CONDUCTORES_DISPONIBLES, {
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error al obtener conductores:', error);
      throw error;
    }
  }

  // Obtener envíos pendientes para agrupación
  static async obtenerEnviosPendientesAgrupacion(): Promise<any[]> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.ENVIOS_PENDIENTES, {
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error al obtener envíos pendientes:', error);
      throw error;
    }
  }

  // Obtener rutas activas
  static async obtenerRutasActivas(): Promise<any[]> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.RUTAS_ACTIVAS, {
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error al obtener rutas activas:', error);
      throw error;
    }
  }
}
