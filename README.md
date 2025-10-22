# 📦 VALOR Express - Sistema de Envíos

Sistema de gestión de envíos con inteligencia artificial para optimización de rutas y logística.

## 🚀 Características

- ✅ **Gestión de Envíos**: Crear, rastrear y administrar envíos
- ✅ **Formulario Completo**: Captura de datos de remitente, destinatario y paquete
- ✅ **Múltiples Páginas**:
  - Inicio con dashboard
  - Realizar Envío (formulario completo)
  - Tarifas (nacional e internacional)
  - Soporte al Cliente
  - Ubicaciones de oficinas
- ✅ **Interfaz Moderna**: Diseño responsivo con Tailwind CSS
- ✅ **Componentes UI**: Basados en Radix UI y shadcn/ui
- 🚧 **IA para Optimización**: Sistema de optimización de rutas (próximamente)
- 🚧 **Backend NestJS**: API RESTful (en desarrollo)
- 🚧 **Base de Datos**: PostgreSQL (pendiente integración)

## 📋 Tecnologías

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: Radix UI + shadcn/ui
- **Iconos**: Lucide React
- **Formularios**: React Hook Form (preparado)
- **Gráficos**: Recharts (preparado)

### Backend (Próximamente)
- **Framework**: NestJS
- **Base de Datos**: PostgreSQL
- **ORM**: TypeORM / Prisma
- **IA**: Sistema de optimización de rutas

## 🛠️ Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd "Sistema de Envíos - PG"
```

2. **Entrar a la carpeta del proyecto Next.js**
```bash
cd app
```

3. **Instalar dependencias**
```bash
npm install
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
app/
├── (pages)/                    # Páginas de la aplicación
│   ├── inicio/                 # Página principal
│   ├── realizar-envio/         # Formulario de envíos
│   ├── soporte/                # Soporte al cliente
│   ├── tarifas/                # Información de tarifas
│   └── ubicaciones/            # Ubicaciones de oficinas
├── components/                 # Componentes reutilizables
│   ├── forms/                  # Componentes de formularios
│   ├── layout/                 # Layout y navegación
│   └── ui/                     # Componentes UI base
├── lib/                        # Utilidades y configuración
│   ├── api-config.ts          # Configuración de API
│   ├── constants.ts           # Constantes de la app
│   ├── services/              # Servicios (IA, envíos)
│   └── utils.ts               # Funciones auxiliares
├── types/                      # Tipos TypeScript
│   └── index.ts               # Definiciones de tipos
├── globals.css                # Estilos globales
├── layout.tsx                 # Layout raíz
├── page.tsx                   # Página principal (App)
└── package.json               # Dependencias
```

## 🎨 Características Implementadas

### 1. Página de Inicio
- Dashboard con estadísticas
- Lista de envíos recientes
- Búsqueda de envíos
- Tarjetas de estado (En Tránsito, Entregados, Pendientes)

### 2. Formulario de Envío
- **Sección Remitente**: Nombre, teléfono, dirección completa
- **Sección Destinatario**: Datos completos de destino
- **Sección Paquete**: Peso, dimensiones, valor, tipo de servicio
- **Características**:
  - Asignación automática de región según departamento
  - 21 departamentos de Guatemala
  - 12 países disponibles
  - 5 monedas (Q, $, €, MXP, C$)
  - 4 tipos de servicio (Express/Estándar, Nacional/Internacional)
  - Validación de formularios
  - Mensaje de éxito tras crear envío
  - Limpieza automática del formulario

### 3. Página de Tarifas
- Tarifas nacionales e internacionales
- Descripción de servicios
- Tiempos estimados de entrega
- Información sobre factores de precio

### 4. Página de Soporte
- Información de contacto
- Formulario de contacto
- Preguntas frecuentes (FAQ)
- Horarios de atención

### 5. Página de Ubicaciones
- Mapa de oficinas y centros de distribución
- Información detallada de cada ubicación
- Horarios y servicios disponibles

## 🔄 Estado del Proyecto

### ✅ Completado
- [x] Estructura base Next.js
- [x] Sistema de navegación (Sidebar)
- [x] Componentes UI base
- [x] Página de inicio
- [x] Formulario de envío completo
- [x] Página de tarifas
- [x] Página de soporte
- [x] Página de ubicaciones
- [x] Tipos TypeScript
- [x] Mock data para pruebas

### 🚧 En Desarrollo
- [ ] Integración con backend NestJS
- [ ] Conexión a base de datos PostgreSQL
- [ ] Sistema de autenticación
- [ ] Sistema de IA para optimización de rutas
- [ ] Cálculo real de tarifas
- [ ] Tracking en tiempo real
- [ ] Notificaciones automáticas

### 📝 Pendiente
- [ ] Panel administrativo completo
- [ ] Reportes y estadísticas
- [ ] Integración con servicios de pago
- [ ] API de terceros para tracking
- [ ] Documentación API
- [ ] Tests unitarios e integración
- [ ] Deploy a producción

## 🎯 Próximos Pasos

1. **Backend NestJS**: Configurar servidor y API
2. **Base de Datos**: Crear esquema PostgreSQL
3. **Autenticación**: Implementar login/registro
4. **IA Logistics**: Sistema de optimización
5. **Testing**: Pruebas unitarias y e2e

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción

# Linting
npm run lint         # Ejecuta ESLint
```

## 🌐 Variables de Entorno

Crea un archivo `.env.local` en la carpeta `app/`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Database (cuando se implemente)
DATABASE_URL=postgresql://user:password@localhost:5432/valor_express

# JWT (cuando se implemente)
JWT_SECRET=your-secret-key
```

## 👥 Contribución

Este es un proyecto en desarrollo activo. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está en desarrollo.

## 📞 Contacto

VALOR Express - Sistema de Envíos
- Email: soporte@valorexpress.com
- Teléfono: +502 1234-5678

## 🙏 Créditos

- Componentes UI: [shadcn/ui](https://ui.shadcn.com/)
- Iconos: [Lucide](https://lucide.dev/)
- Framework: [Next.js](https://nextjs.org/)
- Estilos: [Tailwind CSS](https://tailwindcss.com/)
