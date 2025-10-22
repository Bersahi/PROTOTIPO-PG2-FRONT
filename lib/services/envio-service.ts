// Servicio para manejar operaciones de envíos

import { apiRequest, API_CONFIG } from '../api-config';
import { FormularioEnvio as FormularioEnvioType, Envio } from '@/types';

export class EnvioService {
  // Crear un nuevo envío
  static async crearEnvio(formulario: FormularioEnvioType): Promise<Envio> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.CREAR_ENVIO, {
        method: 'POST',
        body: JSON.stringify(formulario)
      });
      return response;
    } catch (error) {
      console.error('Error al crear envío:', error);
      throw error;
    }
  }

  // Obtener todos los envíos
  static async obtenerEnvios(): Promise<Envio[]> {
    try {
      const response = await apiRequest(API_CONFIG.ENDPOINTS.OBTENER_ENVIOS, {
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error al obtener envíos:', error);
      throw error;
    }
  }

  // Rastrear un envío específico
  static async rastrearEnvio(numeroRastreo: string): Promise<Envio> {
    try {
      const response = await apiRequest(`${API_CONFIG.ENDPOINTS.RASTREAR_ENVIO}/${numeroRastreo}`, {
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error al rastrear envío:', error);
      throw error;
    }
  }

  // Obtener envíos recientes
  static async obtenerEnviosRecientes(limit: number = 5): Promise<Envio[]> {
    try {
      const response = await apiRequest(`${API_CONFIG.ENDPOINTS.ENVIOS_RECIENTES}?limit=${limit}`, {
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error al obtener envíos recientes:', error);
      throw error;
    }
  }
}
