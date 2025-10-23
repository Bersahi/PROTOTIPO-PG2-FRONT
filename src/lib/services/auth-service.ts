// Servicio de autenticación para manejar login y roles

export interface LoginCredentials {
  email: string;
  password: string;
  rol: 'cliente' | 'administrativo';
}

export interface AuthUser {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  rol: 'cliente' | 'administrativo';
  fechaRegistro: string;
}

export interface AuthResponse {
  success: boolean;
  user?: AuthUser;
  token?: string;
  error?: string;
}

export class AuthService {
  // Usuarios mock para demostración
  private static usuariosMock: AuthUser[] = [
    {
      id: '1',
      nombre: 'Juan Pérez',
      email: 'cliente@valorexpress.com',
      telefono: '+502 1234-5678',
      rol: 'cliente',
      fechaRegistro: '2025-01-15'
    },
    {
      id: '2',
      nombre: 'María González',
      email: 'admin@valorexpress.com',
      telefono: '+502 2345-6789',
      rol: 'administrativo',
      fechaRegistro: '2025-01-10'
    },
    {
      id: '3',
      nombre: 'Carlos López',
      email: 'cliente2@valorexpress.com',
      telefono: '+502 3456-7890',
      rol: 'cliente',
      fechaRegistro: '2025-01-20'
    }
  ];

  // Simular login con credenciales
  static async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Buscar usuario por email y rol
      const usuario = this.usuariosMock.find(
        user => user.email === credentials.email && user.rol === credentials.rol
      );

      if (!usuario) {
        return {
          success: false,
          error: 'Credenciales incorrectas o rol no válido'
        };
      }

      // Simular validación de contraseña (en producción sería más complejo)
      const passwordValid = this.validatePassword(credentials.password, usuario.rol);
      
      if (!passwordValid) {
        return {
          success: false,
          error: 'Contraseña incorrecta'
        };
      }

      // Generar token simulado
      const token = this.generateToken(usuario);

      return {
        success: true,
        user: usuario,
        token
      };
    } catch (error) {
      return {
        success: false,
        error: 'Error interno del servidor'
      };
    }
  }

  // Validar contraseña (simulado)
  private static validatePassword(password: string, rol: string): boolean {
    // Contraseñas de ejemplo para cada rol
    const passwords = {
      cliente: 'cliente123',
      administrativo: 'admin123'
    };
    
    return password === passwords[rol as keyof typeof passwords];
  }

  // Generar token simulado
  private static generateToken(user: AuthUser): string {
    const payload = {
      userId: user.id,
      email: user.email,
      rol: user.rol,
      timestamp: Date.now()
    };
    
    // En producción usarías JWT o similar
    return btoa(JSON.stringify(payload));
  }

  // Verificar token
  static async verifyToken(token: string): Promise<AuthResponse> {
    try {
      const payload = JSON.parse(atob(token));
      
      // Verificar que el token no haya expirado (24 horas)
      const tokenAge = Date.now() - payload.timestamp;
      const maxAge = 24 * 60 * 60 * 1000; // 24 horas
      
      if (tokenAge > maxAge) {
        return {
          success: false,
          error: 'Token expirado'
        };
      }

      // Buscar usuario
      const usuario = this.usuariosMock.find(user => user.id === payload.userId);
      
      if (!usuario) {
        return {
          success: false,
          error: 'Usuario no encontrado'
        };
      }

      return {
        success: true,
        user: usuario,
        token
      };
    } catch (error) {
      return {
        success: false,
        error: 'Token inválido'
      };
    }
  }

  // Cerrar sesión
  static logout(): void {
    // Limpiar token del localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  }

  // Obtener usuario actual del localStorage
  static getCurrentUser(): AuthUser | null {
    try {
      const userStr = localStorage.getItem('auth_user');
      if (!userStr) return null;
      
      return JSON.parse(userStr);
    } catch (error) {
      return null;
    }
  }

  // Guardar sesión en localStorage
  static saveSession(user: AuthUser, token: string): void {
    localStorage.setItem('auth_user', JSON.stringify(user));
    localStorage.setItem('auth_token', token);
  }

  // Verificar si hay sesión activa
  static async checkActiveSession(): Promise<AuthResponse> {
    const token = localStorage.getItem('auth_token');
    const user = this.getCurrentUser();
    
    if (!token || !user) {
      return {
        success: false,
        error: 'No hay sesión activa'
      };
    }

    return await this.verifyToken(token);
  }
}

