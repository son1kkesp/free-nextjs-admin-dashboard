# Roles de Usuario y Funciones del Sistema

## SUPER_ADMIN (admin@emby.com)
**Descripción:** Administrador principal con acceso completo al sistema

### Funciones Principales:
- **Gestión de Usuarios:**
  - Crear, editar, eliminar usuarios de cualquier rol
  - Activar/desactivar cuentas de usuario
  - Asignar y modificar roles
  - Resetear contraseñas
  - Gestionar límites y cuotas por usuario

- **Gestión de Servidores:**
  - Añadir nuevos servidores Emby
  - Configurar conexiones y API keys
  - Eliminar servidores
  - Monitorear estado y rendimiento
  - Asignar servidores a resellers

- **Gestión de Demos:**
  - Crear, editar, eliminar demos
  - Configurar limpieza automática
  - Gestionar políticas de demos
  - Monitorear uso de demos

- **Configuración del Sistema:**
  - Ajustes globales de la aplicación
  - Configuración de integraciones
  - Políticas de seguridad
  - Configuración de jobs y automatizaciones

- **Analytics y Reportes:**
  - Acceso completo a métricas de servidores
  - Reportes de uso por usuario/servidor
  - Análisis de rendimiento de servidores
  - Reportes de facturación
  - ❌ NO tiene acceso a analytics del panel (solo TECH_ADMIN)

- **Logs y Auditoría:**
  - Visualización de logs relacionados con servidores
  - Auditoría de acciones de usuarios
  - Monitoreo de errores y excepciones

- **Gestión de Resellers:**
  - Crear y gestionar cuentas de resellers
  - Asignar límites y permisos
  - Configurar automatizaciones

---

## TECH_ADMIN (tech@emby.com)
**Descripción:** Administrador técnico con acceso a funciones operativas

### Funciones Principales:
- **Gestión de Usuarios:**
  - Crear y editar usuarios (no eliminar)
  - Asistir con problemas de acceso
  - Gestionar cuentas técnicas
  - ✅ Gestión de usuarios del panel (crear, modificar y eliminar SUPER_ADMIN, TECH_ADMIN)

- **Gestión de Servidores:**
  - Añadir y configurar servidores Emby
  - Solucionar problemas de conectividad
  - Monitorear rendimiento técnico
  - Mantenimiento de servidores

- **Gestión de Demos:**
  - Crear, editar, eliminar demos
  - Configurar limpieza automática
  - Solucionar problemas técnicos

- **Configuración Técnica:**
  - Configuración de jobs técnicos
  - Mantenimiento del sistema
  - Optimización de rendimiento

- **Analytics Técnicos:**
  - Reportes de rendimiento del panel
  - Métricas técnicas del sistema
  - Análisis de uso de recursos
  - ✅ Analytics del panel (exclusivo de TECH_ADMIN)

- **Logs Técnicos:**
  - Visualización de logs del sistema
  - Monitoreo de errores técnicos
  - Debugging de problemas

- **Soporte Técnico:**
  - Asistencia a resellers
  - Resolución de problemas técnicos
  - Documentación técnica

- **Herramientas de Desarrollo:**
  - Acceso a herramientas de debug
  - Configuración de entornos
  - Testing de integraciones

- **Sistema de Créditos:**
  - ✅ CRÉDITOS ILIMITADOS

---

## PREMIUM_RESELLER (premium@emby.com)
**Descripción:** Reseller premium con acceso amplio a gestión de usuarios y servidores

### Funciones Principales:
- **Gestión de Usuarios Propios:**
  - Crear y editar usuarios bajo su gestión
  - Asignar servidores a usuarios
  - Gestionar cuotas y límites
  - Activar/desactivar cuentas

- **Gestión de Servidores Asignados:**
  - ✅ Configuración mínima de servidores asignados
  - Monitorear estado y uso
  - Gestionar usuarios por servidor

- **Gestión de Demos:**
  - Crear, editar, eliminar demos
  - Configurar políticas de demos
  - Gestionar acceso a demos

- **Analytics Avanzados:**
  - Reportes de uso de sus usuarios
  - Métricas de servidores asignados
  - Análisis de rendimiento
  - Reportes de facturación

- **Logs de Operaciones:**
  - Visualizar logs de sus operaciones
  - Monitorear actividad de usuarios
  - Auditoría de cambios

- **Sistema de Créditos:**
  - ✅ CRÉDITOS ILIMITADOS

---

## ADVANCED_RESELLER (advanced@emby.com)
**Descripción:** Reseller avanzado con acceso a gestión básica

### Funciones Principales:
- **Gestión de Usuarios Propios:**
  - ✅ Gestión básica de usuarios propios

- **Logs de Operaciones:**
  - ✅ Logs básicos de operaciones

- **Sistema de Créditos:**
  - ✅ CRÉDITOS LIMITADOS

---

## BASIC_RESELLER (basic@emby.com)
**Descripción:** Mismas funciones que ADVANCED_RESELLER pero con sistema de créditos diferente

### Funciones Principales:
- **Gestión de Usuarios Propios:**
  - ✅ Gestión básica de usuarios propios

- **Logs de Operaciones:**
  - ✅ Logs básicos de operaciones

- **Sistema de Créditos:**
  - ⚠️ SISTEMA DE CRÉDITOS A DESARROLLAR

---

## Matriz de Permisos

| Función | SUPER_ADMIN | TECH_ADMIN | PREMIUM_RESELLER | ADVANCED_RESELLER | BASIC_RESELLER |
|---------|-------------|------------|------------------|-------------------|----------------|
| **Usuarios** | CRUD completo | CRUD (sin delete) + Panel | Gestión completa | Gestión básica | Gestión básica |
| **Servidores** | CRUD completo | CRUD (sin delete) | Configuración mínima | Sin acceso | Sin acceso |
| **Demos** | CRUD completo | CRUD completo | CRUD completo | CRUD completo | CRUD completo |
| **Analytics** | Solo servidores | Panel + Técnico | Avanzado | Sin acceso | Sin acceso |
| **Logs** | Servidores | Sistema completo | Propios | Básicos | Básicos |
| **Configuración** | Sistema completo | Técnica | Sin acceso | Sin acceso | Sin acceso |
| **Políticas** | Todas | Técnicas | Sin acceso | Sin acceso | Sin acceso |
| **Jobs** | Todos | Técnicos | Sin acceso | Sin acceso | Sin acceso |
| **Debug** | Sin acceso | Completo | Sin acceso | Sin acceso | Sin acceso |
| **Créditos** | Sin límite | ILIMITADOS | ILIMITADOS | LIMITADOS | A DESARROLLAR |

---

## Notas de Implementación

1. **Jerarquía de Roles:** SUPER_ADMIN > TECH_ADMIN > PREMIUM_RESELLER > ADVANCED_RESELLER > BASIC_RESELLER

2. **Principio de Menor Privilegio:** Cada rol tiene solo los permisos necesarios para sus funciones

3. **Separación de Responsabilidades:**
   - **SUPER_ADMIN:** Enfocado en servidores y gestión de resellers
   - **TECH_ADMIN:** Enfocado en panel, debug y gestión de usuarios del panel
   - **Resellers:** Enfocados en gestión de usuarios propios

4. **Sistema de Créditos:**
   - **TECH_ADMIN y PREMIUM_RESELLER:** Créditos ilimitados
   - **ADVANCED_RESELLER:** Créditos limitados
   - **BASIC_RESELLER:** Sistema de créditos a desarrollar

5. **Analytics Especializados:**
   - **SUPER_ADMIN:** Solo analytics de servidores
   - **TECH_ADMIN:** Analytics del panel (exclusivo)

6. **Auditoría:** Todas las acciones importantes deben ser registradas en logs

7. **Escalabilidad:** El sistema debe permitir agregar nuevos roles fácilmente

8. **Seguridad:** Los permisos deben validarse tanto en frontend como backend
