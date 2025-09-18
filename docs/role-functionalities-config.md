# Funcionalidades por Rol - Sistema Configurable

## Resumen Ejecutivo

Este documento define las funcionalidades específicas de cada rol en el sistema, todas ellas configurables desde el panel de **SUPER_ADMIN**. La configuración permite activar/desactivar funcionalidades por rol de forma dinámica sin necesidad de modificar código.

## Estructura de Configuración

### Tabla de Configuración de Roles
```sql
CREATE TABLE role_configurations (
  id VARCHAR(255) PRIMARY KEY,
  role VARCHAR(50) NOT NULL,
  functionality VARCHAR(100) NOT NULL,
  is_enabled BOOLEAN DEFAULT true,
  config_data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(role, functionality)
);
```

### Tabla de Permisos por Rol
```sql
CREATE TABLE role_permissions (
  id VARCHAR(255) PRIMARY KEY,
  role VARCHAR(50) NOT NULL,
  permission VARCHAR(100) NOT NULL,
  is_enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(role, permission)
);
```

## Funcionalidades por Rol

### 1. SUPER_ADMIN
**Rol:** `SUPER_ADMIN`  
**Descripción:** Administrador principal del sistema con control total

#### Funcionalidades Principales
- **Gestión de Usuarios**
  - Crear, editar, eliminar usuarios de cualquier rol
  - Asignar roles y permisos
  - Gestionar jerarquías de usuarios
  - Configurar límites de descendientes por rol

- **Gestión de Servidores**
  - Crear, editar, eliminar servidores Emby
  - Configurar conexiones y credenciales
  - Gestionar estados y monitoreo
  - Configurar sincronización automática

- **Gestión de Paquetes**
  - Crear, editar, eliminar paquetes de librerías
  - Configurar precios y límites
  - Gestionar disponibilidad por región

- **Configuración del Sistema**
  - Configurar funcionalidades por rol
  - Gestionar permisos globales
  - Configurar límites del sistema
  - Gestionar configuraciones de seguridad

- **Analytics y Reportes**
  - Ver estadísticas globales del sistema
  - Generar reportes de uso
  - Monitorear rendimiento del sistema
  - Gestionar logs del sistema

#### Configuraciones Específicas
```json
{
  "user_management": {
    "can_create_users": true,
    "can_edit_users": true,
    "can_delete_users": true,
    "can_assign_roles": true,
    "can_manage_hierarchies": true
  },
  "server_management": {
    "can_create_servers": true,
    "can_edit_servers": true,
    "can_delete_servers": true,
    "can_configure_sync": true
  },
  "system_configuration": {
    "can_configure_roles": true,
    "can_manage_permissions": true,
    "can_set_limits": true,
    "can_configure_security": true
  }
}
```

### 2. TECH_ADMIN
**Rol:** `TECH_ADMIN`  
**Descripción:** Administrador técnico del panel con acceso a herramientas de desarrollo

#### Funcionalidades Principales
- **Configuración de Desarrollo**
  - Acceso a herramientas de debug
  - Configuración de entornos
  - Gestión de variables de entorno
  - Configuración de APIs externas

- **Mantenimiento del Panel**
  - Monitoreo del sistema
  - Gestión de logs técnicos
  - Configuración de backups
  - Gestión de actualizaciones

- **Recuperación del Sistema**
  - Herramientas de recuperación de datos
  - Restauración de backups
  - Diagnóstico de problemas
  - Configuración de alertas

- **Analytics Técnicos**
  - Métricas de rendimiento del panel
  - Logs de errores y excepciones
  - Estadísticas de uso del sistema
  - Monitoreo de recursos

#### Configuraciones Específicas
```json
{
  "development_tools": {
    "can_access_debug": true,
    "can_configure_environments": true,
    "can_manage_env_vars": true,
    "can_configure_apis": true
  },
  "maintenance": {
    "can_monitor_system": true,
    "can_manage_logs": true,
    "can_configure_backups": true,
    "can_manage_updates": true
  },
  "recovery": {
    "can_recover_data": true,
    "can_restore_backups": true,
    "can_diagnose_issues": true,
    "can_configure_alerts": true
  }
}
```

### 3. ADMIN
**Rol:** `ADMIN`  
**Descripción:** Administradores regionales/de área con permisos similares a SUPER_ADMIN pero limitados a su área de gestión

#### Funcionalidades Principales
- **Gestión de Usuarios**
  - Crear, editar, eliminar usuarios resellers
  - Gestionar jerarquías de resellers
  - Asignar permisos a resellers
  - Configurar límites de usuarios
  - **NO puede crear otros ADMIN**

- **Gestión de Servidores**
  - Crear, editar, eliminar servidores Emby
  - Configurar conexiones y credenciales
  - Gestionar estados y monitoreo
  - Configurar sincronización automática
  - Gestionar usuarios de servidores

- **Gestión de Paquetes**
  - Crear, editar, eliminar paquetes de librerías
  - Configurar precios y límites
  - Gestionar disponibilidad por región
  - Configurar paquetes para su área

- **Analytics de Servidores**
  - Ver estadísticas de sus servidores
  - Reportes de uso de sus servidores
  - Métricas de rendimiento de sus servidores
  - **NO tiene acceso a analytics del panel**

- **Sistema de Créditos**
  - Créditos ilimitados (igual que SUPER_ADMIN)
  - Gestionar créditos de sus resellers
  - Configurar límites de créditos

- **Logs del Sistema**
  - Acceso a logs de sus cuentas
  - Logs de gestión de sus resellers
  - Logs de actividades bajo su gestión
  - **NO tiene acceso a logs del panel**

- **Herramientas de Configuración**
  - Configuración de servidores
  - Configuración de paquetes
  - Configuración de resellers
  - Herramientas de gestión similares a SUPER_ADMIN

#### Configuraciones Específicas
```json
{
  "user_management": {
    "can_create_resellers": true,
    "can_edit_resellers": true,
    "can_delete_resellers": true,
    "can_manage_hierarchies": true,
    "can_assign_permissions": true,
    "can_create_admin": false,
    "max_resellers": null
  },
  "server_management": {
    "can_create_servers": true,
    "can_edit_servers": true,
    "can_delete_servers": true,
    "can_configure_emby": true,
    "can_configure_sync": true,
    "max_servers": null
  },
  "package_management": {
    "can_create_packages": true,
    "can_edit_packages": true,
    "can_delete_packages": true,
    "can_configure_packages": true,
    "can_set_regional_prices": true,
    "can_manage_availability": true
  },
  "analytics": {
    "can_view_server_analytics": true,
    "can_view_panel_analytics": false,
    "can_generate_reports": true
  },
  "credits": {
    "unlimited_credits": true,
    "can_manage_reseller_credits": true,
    "can_set_credit_limits": true
  },
  "logs": {
    "can_view_account_logs": true,
    "can_view_reseller_logs": true,
    "can_view_activity_logs": true,
    "can_view_panel_logs": false
  }
}
```

### 4. PREMIUM_RESELLER
**Rol:** `PREMIUM_RESELLER`  
**Descripción:** Reseller premium con gestión avanzada de usuarios y servidores

#### Funcionalidades Principales
- **Gestión de Usuarios**
  - Crear, editar usuarios básicos
  - Gestionar jerarquías de usuarios
  - Asignar permisos básicos
  - Configurar límites de usuarios

- **Gestión de Servidores**
  - Crear, editar servidores asignados
  - Configurar conexiones Emby
  - Gestionar usuarios de servidores
  - Monitorear estado de servidores

- **Gestión de Paquetes**
  - Configurar paquetes básicos
  - Gestionar precios
  - Configurar disponibilidad

- **Analytics Básicos**
  - Ver estadísticas de usuarios
  - Reportes de uso básicos
  - Métricas de rendimiento

#### Configuraciones Específicas
```json
{
  "user_management": {
    "can_create_users": true,
    "can_edit_users": true,
    "can_manage_hierarchies": true,
    "max_users": 500
  },
  "server_management": {
    "can_create_servers": true,
    "can_edit_servers": true,
    "can_configure_emby": true,
    "max_servers": 20
  },
  "package_management": {
    "can_configure_packages": true,
    "can_set_prices": true,
    "can_manage_availability": true
  }
}
```

### 5. ADVANCED_RESELLER
**Rol:** `ADVANCED_RESELLER`  
**Descripción:** Reseller avanzado con gestión básica de usuarios y servidores

#### Funcionalidades Principales
- **Gestión de Usuarios**
  - Crear, editar usuarios básicos
  - Gestionar jerarquías de usuarios
  - Asignar permisos básicos
  - Configurar límites de usuarios

- **Gestión de Servidores**
  - Crear, editar servidores asignados
  - Configurar conexiones Emby
  - Gestionar usuarios de servidores
  - Monitorear estado de servidores

- **Gestión de Paquetes**
  - Configurar paquetes básicos
  - Gestionar precios
  - Configurar disponibilidad

- **Analytics Básicos**
  - Ver estadísticas de usuarios
  - Reportes de uso básicos
  - Métricas de rendimiento

#### Configuraciones Específicas
```json
{
  "user_management": {
    "can_create_users": true,
    "can_edit_users": true,
    "can_manage_hierarchies": true,
    "max_users": 200
  },
  "server_management": {
    "can_create_servers": true,
    "can_edit_servers": true,
    "can_configure_emby": true,
    "max_servers": 10
  },
  "package_management": {
    "can_configure_packages": true,
    "can_set_prices": true,
    "can_manage_availability": true
  }
}
```

### 6. BASIC_RESELLER
**Rol:** `BASIC_RESELLER`  
**Descripción:** Reseller básico con funcionalidades limitadas

#### Funcionalidades Principales
- **Gestión de Usuarios**
  - Crear, editar usuarios básicos
  - Gestionar jerarquías de usuarios
  - Asignar permisos básicos
  - Configurar límites de usuarios

- **Gestión de Servidores**
  - Crear, editar servidores asignados
  - Configurar conexiones Emby
  - Gestionar usuarios de servidores
  - Monitorear estado de servidores

- **Gestión de Paquetes**
  - Configurar paquetes básicos
  - Gestionar precios
  - Configurar disponibilidad

- **Analytics Básicos**
  - Ver estadísticas de usuarios
  - Reportes de uso básicos
  - Métricas de rendimiento

#### Configuraciones Específicas
```json
{
  "user_management": {
    "can_create_users": true,
    "can_edit_users": true,
    "can_manage_hierarchies": true,
    "max_users": 50
  },
  "server_management": {
    "can_create_servers": true,
    "can_edit_servers": true,
    "can_configure_emby": true,
    "max_servers": 5
  },
  "package_management": {
    "can_configure_packages": true,
    "can_set_prices": true,
    "can_manage_availability": true
  }
}
```

## Panel de Configuración desde SUPER_ADMIN

### Interfaz de Configuración
El panel de SUPER_ADMIN debe incluir:

1. **Gestión de Roles**
   - Lista de todos los roles
   - Activar/desactivar roles
   - Configurar permisos por rol

2. **Configuración de Funcionalidades**
   - Activar/desactivar funcionalidades por rol
   - Configurar límites y restricciones
   - Gestionar configuraciones específicas

3. **Gestión de Permisos**
   - Asignar permisos a roles
   - Crear permisos personalizados
   - Gestionar herencia de permisos

4. **Configuración de Límites**
   - Establecer límites por rol
   - Configurar restricciones de uso
   - Gestionar cuotas y límites

### API de Configuración
```typescript
// Endpoints para configuración
GET /api/admin/roles/configurations
POST /api/admin/roles/configurations
PUT /api/admin/roles/configurations/:id
DELETE /api/admin/roles/configurations/:id

GET /api/admin/roles/permissions
POST /api/admin/roles/permissions
PUT /api/admin/roles/permissions/:id
DELETE /api/admin/roles/permissions/:id
```

## Implementación

### 1. Base de Datos
- Crear tablas de configuración
- Migrar datos existentes
- Configurar índices y relaciones

### 2. Backend
- Implementar APIs de configuración
- Crear middleware de permisos
- Implementar validaciones

### 3. Frontend
- Crear panel de configuración
- Implementar gestión de roles
- Crear interfaz de permisos

### 4. Testing
- Pruebas unitarias de configuración
- Pruebas de integración
- Pruebas de permisos

## Consideraciones de Seguridad

1. **Validación de Permisos**
   - Verificar permisos en cada endpoint
   - Validar configuraciones antes de aplicar
   - Implementar auditoría de cambios

2. **Control de Acceso**
   - Solo SUPER_ADMIN puede configurar roles
   - Validar cambios de configuración
   - Implementar logs de auditoría

3. **Backup y Recuperación**
   - Backup automático de configuraciones
   - Procedimientos de recuperación
   - Rollback de cambios

## Conclusión

Este sistema de configuración permite una gestión flexible y dinámica de roles y permisos, manteniendo la seguridad y escalabilidad del sistema. La configuración desde SUPER_ADMIN garantiza el control centralizado mientras permite la personalización por rol.
