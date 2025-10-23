# Sistema de Login - Documentación

## ✅ Implementación Completada

El sistema de login con dos roles (Cliente y Administrativo) ha sido implementado exitosamente.

## 🎯 Características Implementadas

### 1. **Servicio de Autenticación** (`src/lib/services/auth-service.ts`)
- Manejo de login con credenciales
- Validación de roles (cliente / administrativo)
- Generación y verificación de tokens
- Persistencia de sesión en localStorage
- Usuarios mock para pruebas

### 2. **Componente LoginModal** (`src/components/auth/LoginModal.tsx`)
- Modal de login con formulario completo
- Campos: email, password, rol
- Validación de errores
- Estados de carga
- Mostrar/ocultar contraseña
- Credenciales de prueba visibles

### 3. **AppProvider Actualizado** (`src/app/providers/AppProvider.tsx`)
- Estados de autenticación (usuario, rol, logueado)
- Funciones: `login()`, `logout()`, `checkAuth()`
- Verificación automática de sesión al cargar la app
- Persistencia entre recargas de página

### 4. **MainLayout con Login Funcional** (`src/app/components/layout/MainLayout.tsx`)
- Botón "Acceder" que abre el modal de login
- Muestra información del usuario logueado (nombre y rol)
- Botón "Cerrar Sesión" cuando está autenticado
- Avatar del usuario en el header

### 5. **Protección de Rutas** (`src/components/layout/Sidebar.tsx`)
- Deshabilita opciones que requieren autenticación
- Alerta al usuario si intenta acceder sin login
- Muestra rol actual en el footer del sidebar

## 🔐 Credenciales de Prueba

### Cliente
- **Email:** cliente@valorexpress.com
- **Password:** cliente123
- **Rol:** Cliente

### Administrativo
- **Email:** admin@valorexpress.com
- **Password:** admin123
- **Rol:** Administrativo

### Cliente Adicional
- **Email:** cliente2@valorexpress.com
- **Password:** cliente123
- **Rol:** Cliente

## 🚀 Cómo Usar el Sistema

1. **Acceder al Login:**
   - Haz clic en el botón "Acceder" en la esquina superior derecha
   - Se abrirá un modal con el formulario de login

2. **Iniciar Sesión:**
   - Ingresa el email y contraseña
   - Selecciona el tipo de usuario (Cliente o Administrativo)
   - Haz clic en "Iniciar Sesión"

3. **Después del Login:**
   - El sistema muestra tu nombre y rol en el header
   - El sidebar muestra tu rol en el footer
   - Las opciones protegidas ahora están disponibles
   - Tu sesión se guarda (persiste entre recargas)

4. **Cerrar Sesión:**
   - Haz clic en "Cerrar Sesión" en el header
   - Se limpia la sesión y vuelves al estado inicial

## 📁 Archivos Creados/Modificados

### Nuevos Archivos:
- `src/lib/services/auth-service.ts` - Servicio de autenticación
- `src/components/auth/LoginModal.tsx` - Modal de login

### Archivos Modificados:
- `src/app/providers/AppProvider.tsx` - Agregadas funciones de auth
- `src/app/components/layout/MainLayout.tsx` - Integración del login
- `src/components/layout/Sidebar.tsx` - Soporte para rol nullable

## 🔧 Funcionalidades Técnicas

### Persistencia de Sesión
```typescript
// Se guarda en localStorage:
- auth_token: Token de sesión
- auth_user: Datos del usuario

// Se verifica automáticamente al cargar la app
useEffect(() => {
  checkAuth();
}, []);
```

### Protección de Rutas
```typescript
// En opcionesSidebar:
{
  id: 'historial',
  label: 'Mis Envíos',
  icon: History,
  requiereAuth: true  // Solo accesible si está logueado
}
```

### Flujo de Autenticación
1. Usuario hace clic en "Acceder"
2. Se abre LoginModal
3. Usuario ingresa credenciales
4. AuthService valida y retorna token + usuario
5. Se guarda en localStorage
6. Se actualiza el estado global (AppProvider)
7. Se cierra el modal
8. La UI se actualiza automáticamente

## 🎨 Diferencias por Rol

### Cliente
- Puede realizar envíos
- Ve su historial de envíos
- Accede a soporte
- Puede configurar su cuenta

### Administrativo
- Acceso a todas las funciones de cliente
- Panel de administración
- Gestión de envíos
- Gestión de IA
- Gestión de base de datos
- Reportes y estadísticas

## 🔄 Próximas Mejoras (Opcional)

1. **Backend Real:**
   - Conectar con API real
   - JWT tokens reales
   - Base de datos de usuarios

2. **Recuperación de Contraseña:**
   - Flujo de "Olvidé mi contraseña"
   - Envío de emails

3. **Registro de Usuarios:**
   - Formulario de registro
   - Verificación de email

4. **Perfil de Usuario:**
   - Editar información personal
   - Cambiar contraseña
   - Foto de perfil

5. **Roles Adicionales:**
   - Operador
   - Supervisor
   - Repartidor

## ✨ Estado Actual

✅ Sistema de login completamente funcional
✅ Dos roles implementados
✅ Persistencia de sesión
✅ Protección de rutas
✅ UI completa y responsive
✅ Credenciales de prueba disponibles
✅ Build exitoso
✅ Listo para usar

---

**Servidor de desarrollo:** http://localhost:3000

**Para iniciar:** `npm run dev`

