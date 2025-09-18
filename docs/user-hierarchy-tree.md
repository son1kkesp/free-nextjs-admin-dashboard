# Estructura Jerárquica de Usuarios - Árbol Genealógico

## Esquema de la Organización

```
                    SUPER_ADMIN
                         │
                    ┌────┴────┐
                    │         │
                 ADMIN_1    ADMIN_2    ADMIN_N...
                    │         │         │
              ┌─────┼─────┐   │    ┌────┼────┐
              │     │     │   │    │    │    │
         PREMIUM  ADVANCED BASIC  PREMIUM ADVANCED BASIC
         RESELLER RESELLER RESELLER RESELLER RESELLER RESELLER
              │     │
              │     └─── ADVANCED_RESELLER_1.1
              │           │
              │           └─── ADVANCED_RESELLER_1.1.1
              │
              └─── PREMIUM_RESELLER_1.1
                    │
                    └─── PREMIUM_RESELLER_1.1.1

                    TECH_ADMIN (ROL PARALELO - NO JERÁRQUICO)
                         │
                    ┌────┴────┐
                    │         │
              Configuración  Mantenimiento
              Desarrollo     Recuperación
```

## Estructura Detallada

### Nivel 0: Roles Principales (Paralelos)
- **SUPER_ADMIN** (admin@emby.com)
  - Administrador principal del sistema
  - Control total sobre usuarios, servidores, paquetes, ADMINs, RESELLERs
  - **NO es ascendiente de TECH_ADMIN**

- **TECH_ADMIN** (tech@emby.com)
  - Administrador técnico del panel
  - Acceso a configuración de desarrollo, mantenimiento y recuperación
  - **ROL PARALELO - NO JERÁRQUICO con SUPER_ADMIN**

### Nivel 1: Administradores Regionales/De Área
- **ADMIN** (nuevo rol a crear)
  - Administradores de área/región
  - **Descendientes directos de SUPER_ADMIN**
  - Permisos similares a SUPER_ADMIN pero limitados a su área
  - Créditos ilimitados
  - Pueden tener múltiples ADMIN (ADMIN_1, ADMIN_2, ADMIN_N...)
  - **NO pueden crear otros ADMIN**

### Nivel 2: Resellers (Descendientes de ADMIN)
Cada ADMIN puede tener como descendientes:

#### 2.1 PREMIUM_RESELLER
- Descendiente directo de ADMIN
- Puede tener sus propios descendientes PREMIUM_RESELLER

#### 2.2 ADVANCED_RESELLER
- Descendiente directo de ADMIN
- Puede tener sus propios descendientes ADVANCED_RESELLER
- **Puede tener múltiples niveles** (ADVANCED_RESELLER_1.1, ADVANCED_RESELLER_1.1.1, etc.)

#### 2.3 BASIC_RESELLER
- Descendiente directo de ADMIN
- Nivel final (no puede tener descendientes)

## Reglas de la Jerarquía

### 1. **Roles Principales (Paralelos)**
- **SUPER_ADMIN** y **TECH_ADMIN** son roles paralelos, NO jerárquicos
- **SUPER_ADMIN** gestiona: usuarios, servidores, paquetes, ADMINs, RESELLERs
- **TECH_ADMIN** gestiona: configuración de desarrollo, mantenimiento, recuperación del panel

### 2. **Herencia de Permisos**
- Los descendientes heredan permisos de sus ascendientes
- Los permisos se van reduciendo conforme se baja en la jerarquía
- **TECH_ADMIN** no hereda permisos de **SUPER_ADMIN** (son paralelos)

### 3. **Gestión de Descendientes**
- **SUPER_ADMIN:** Puede crear y gestionar ADMINs
- **TECH_ADMIN:** Puede crear y gestionar herramientas técnicas (NO usuarios)
- **ADMIN:** Puede crear y gestionar PREMIUM_RESELLER, ADVANCED_RESELLER, BASIC_RESELLER (NO puede crear otros ADMIN)
- **PREMIUM_RESELLER:** Puede crear otros PREMIUM_RESELLER
- **ADVANCED_RESELLER:** Puede crear otros ADVANCED_RESELLER
- **BASIC_RESELLER:** No puede crear descendientes

### 4. **Visibilidad**
- **SUPER_ADMIN:** Ve todo el árbol de usuarios (ADMINs y sus descendientes)
- **TECH_ADMIN:** Ve solo herramientas técnicas y configuración del panel
- **ADMIN:** Ve solo a sus descendientes directos
- **Resellers:** Ven solo a sus descendientes directos

### 5. **Límites de Creación**
- **SUPER_ADMIN:** Puede crear ADMIN
- **TECH_ADMIN:** Puede crear herramientas técnicas (NO usuarios)
- **ADMIN:** Puede crear PREMIUM_RESELLER, ADVANCED_RESELLER, BASIC_RESELLER (NO puede crear otros ADMIN)
- **PREMIUM_RESELLER:** Puede crear otros PREMIUM_RESELLER
- **ADVANCED_RESELLER:** Puede crear otros ADVANCED_RESELLER
- **BASIC_RESELLER:** No puede crear descendientes

## Ejemplo Práctico

```
SUPER_ADMIN (admin@emby.com) ← ROL PRINCIPAL
    └── ADMIN_EUROPA (admin-europa@emby.com)
            ├── PREMIUM_RESELLER_ESPAÑA (premium-es@emby.com)
            │       └── PREMIUM_RESELLER_MADRID (premium-madrid@emby.com)
            ├── ADVANCED_RESELLER_FRANCIA (advanced-fr@emby.com)
            │       └── ADVANCED_RESELLER_PARIS (advanced-paris@emby.com)
            │               └── ADVANCED_RESELLER_DISTRITO1 (advanced-d1@emby.com)
            └── BASIC_RESELLER_ITALIA (basic-it@emby.com)

TECH_ADMIN (tech@emby.com) ← ROL PARALELO (NO JERÁRQUICO)
    ├── Configuración de Desarrollo
    ├── Mantenimiento del Panel
    └── Recuperación del Sistema
```

## Campos Necesarios en la Base de Datos

Para implementar esta estructura, necesitaremos agregar campos a la tabla `User`:

```sql
ALTER TABLE users ADD COLUMN parent_id VARCHAR(255);
ALTER TABLE users ADD COLUMN hierarchy_level INTEGER;
ALTER TABLE users ADD COLUMN can_create_descendants BOOLEAN DEFAULT false;
ALTER TABLE users ADD COLUMN max_descendants INTEGER;
```

## Preguntas para el Nuevo Rol ADMIN

Antes de implementar el rol ADMIN, necesito saber:

1. **¿Qué permisos específicos tendrá el rol ADMIN?**
2. **¿Podrá gestionar servidores o solo usuarios?**
3. **¿Tendrá acceso a analytics?**
4. **¿Cuál será su sistema de créditos?**
5. **¿Podrá crear otros ADMIN o solo resellers?**
6. **¿Tendrá acceso a logs del sistema?**
7. **¿Qué herramientas de configuración tendrá?**
8. **¿Habrá límites en el número de descendientes que puede crear?**
