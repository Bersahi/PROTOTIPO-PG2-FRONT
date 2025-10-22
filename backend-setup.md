# Configuración del Backend NestJS

## 🚀 Estructura del Proyecto Backend

```
backend-api/
├── src/
│   ├── modules/
│   │   ├── envios/
│   │   │   ├── entities/
│   │   │   │   └── envio.entity.ts
│   │   │   ├── dto/
│   │   │   │   ├── crear-envio.dto.ts
│   │   │   │   └── actualizar-envio.dto.ts
│   │   │   ├── envios.controller.ts
│   │   │   ├── envios.service.ts
│   │   │   └── envios.module.ts
│   │   ├── usuarios/
│   │   │   ├── entities/
│   │   │   │   └── usuario.entity.ts
│   │   │   ├── dto/
│   │   │   │   └── crear-usuario.dto.ts
│   │   │   ├── usuarios.controller.ts
│   │   │   ├── usuarios.service.ts
│   │   │   └── usuarios.module.ts
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.module.ts
│   │   │   └── jwt.strategy.ts
│   │   └── ia/
│   │       ├── dto/
│   │       │   └── optimizacion.dto.ts
│   │       ├── ia.controller.ts
│   │       ├── ia.service.ts
│   │       └── ia.module.ts
│   ├── database/
│   │   ├── entities/
│   │   │   ├── base.entity.ts
│   │   │   ├── envio.entity.ts
│   │   │   ├── usuario.entity.ts
│   │   │   └── ruta.entity.ts
│   │   ├── migrations/
│   │   └── seeds/
│   │       └── initial-data.seed.ts
│   ├── common/
│   │   ├── decorators/
│   │   ├── filters/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── pipes/
│   ├── config/
│   │   ├── database.config.ts
│   │   └── app.config.ts
│   ├── app.module.ts
│   └── main.ts
├── package.json
├── .env
├── .env.example
└── README.md
```

## 📦 Dependencias Principales

```bash
# Framework y core
npm install @nestjs/core @nestjs/common @nestjs/platform-express

# Base de datos
npm install @nestjs/typeorm typeorm pg @types/pg
# o para SQLite:
npm install @nestjs/typeorm typeorm sqlite3

# Configuración
npm install @nestjs/config

# Validación
npm install class-validator class-transformer

# Autenticación
npm install @nestjs/jwt @nestjs/passport passport passport-jwt @types/passport-jwt

# Documentación
npm install @nestjs/swagger swagger-ui-express

# Utilidades
npm install bcrypt @types/bcrypt
npm install uuid @types/uuid
```

## 🔧 Configuración Inicial

### 1. Crear el Proyecto
```bash
# Instalar NestJS CLI globalmente
npm install -g @nestjs/cli

# Crear nuevo proyecto
nest new backend-api
cd backend-api
```

### 2. Configurar Base de Datos
```typescript
// src/config/database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres', // o 'sqlite'
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'envios_db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV === 'development',
};
```

### 3. Variables de Entorno
```env
# .env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=envios_db
DATABASE_USER=postgres
DATABASE_PASSWORD=password

PORT=3001
API_PREFIX=api

JWT_SECRET=tu_jwt_secret_muy_seguro
JWT_EXPIRES_IN=7d

NODE_ENV=development
```

## 🗄️ Entidades de Base de Datos

### Entidad Base
```typescript
// src/database/entities/base.entity.ts
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### Entidad Envío
```typescript
// src/modules/envios/entities/envio.entity.ts
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../database/entities/base.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('envios')
export class Envio extends BaseEntity {
  @Column({ unique: true })
  numeroRastreo: string;

  @Column('jsonb')
  remitente: any;

  @Column('jsonb')
  destinatario: any;

  @Column('jsonb')
  paquete: any;

  @Column({ default: 'pendiente' })
  estado: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  costo: number;

  @Column()
  moneda: string;

  @Column({ nullable: true })
  fechaEstimada: Date;

  @Column({ nullable: true })
  fechaEntrega: Date;

  @Column({ nullable: true })
  vehiculoAsignado: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

  @Column()
  usuarioId: string;
}
```

### Entidad Usuario
```typescript
// src/modules/usuarios/entities/usuario.entity.ts
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../database/entities/base.entity';
import { Envio } from '../../envios/entities/envio.entity';

@Entity('usuarios')
export class Usuario extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  nombre: string;

  @Column()
  telefono: string;

  @Column()
  password: string;

  @Column({ default: 'cliente' })
  rol: string;

  @OneToMany(() => Envio, envio => envio.usuario)
  envios: Envio[];
}
```

## 🎯 Controladores y Servicios

### Controlador de Envíos
```typescript
// src/modules/envios/envios.controller.ts
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { CrearEnvioDto } from './dto/crear-envio.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/envios')
@UseGuards(JwtAuthGuard)
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

  @Post()
  async crearEnvio(@Body() crearEnvioDto: CrearEnvioDto) {
    return this.enviosService.crearEnvio(crearEnvioDto);
  }

  @Get()
  async obtenerEnvios() {
    return this.enviosService.obtenerTodos();
  }

  @Get('rastrear/:numeroRastreo')
  async rastrearEnvio(@Param('numeroRastreo') numeroRastreo: string) {
    return this.enviosService.rastrearEnvio(numeroRastreo);
  }
}
```

### Servicio de Envíos
```typescript
// src/modules/envios/envios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Envio } from './entities/envio.entity';
import { CrearEnvioDto } from './dto/crear-envio.dto';

@Injectable()
export class EnviosService {
  constructor(
    @InjectRepository(Envio)
    private envioRepository: Repository<Envio>,
  ) {}

  async crearEnvio(crearEnvioDto: CrearEnvioDto): Promise<Envio> {
    const envio = this.envioRepository.create(crearEnvioDto);
    envio.numeroRastreo = this.generarNumeroRastreo();
    return this.envioRepository.save(envio);
  }

  async obtenerTodos(): Promise<Envio[]> {
    return this.envioRepository.find({
      relations: ['usuario'],
      order: { createdAt: 'DESC' },
    });
  }

  async rastrearEnvio(numeroRastreo: string): Promise<Envio> {
    return this.envioRepository.findOne({
      where: { numeroRastreo },
      relations: ['usuario'],
    });
  }

  private generarNumeroRastreo(): string {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substr(2, 3).toUpperCase();
    return `PKG${timestamp}${random}`;
  }
}
```

## 🚀 Scripts de Desarrollo

```json
// package.json
{
  "scripts": {
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "build": "nest build",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "typeorm": "typeorm-ts-node-commonjs",
    "migration:generate": "npm run typeorm -- migration:generate",
    "migration:run": "npm run typeorm -- migration:run",
    "migration:revert": "npm run typeorm -- migration:revert"
  }
}
```

## 🔄 Integración con Frontend

El frontend Next.js ya está configurado para conectarse a este backend a través de:

- **API Config**: `app/lib/api-config.ts`
- **Servicios**: `app/lib/services/envio-service.ts` y `app/lib/services/ia-service.ts`
- **Variables de entorno**: `NEXT_PUBLIC_API_BASE_URL=http://localhost:3001`

## 📚 Documentación API

Con Swagger configurado, la documentación estará disponible en:
- **URL**: http://localhost:3001/api/docs
- **JSON**: http://localhost:3001/api/docs-json

---

**¡Backend listo para desarrollo!** 🎉
