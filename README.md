Nota: el readme se inicia con ctrl + shift + v
# E-commerce App 🚀

## **Base de Datos**
Se implementa **Supabase** como motor de base de datos, aprovechando su integración con **PostgreSQL** y la facilidad de modificación directa.

---

## **Organización y Estructura del Proyecto 📂**

### 1. **common**
- **Función**: Contiene elementos **reutilizables globalmente** en toda la aplicación, como componentes compartidos, estilos o layouts.

| Archivo           | Descripción                                               |
|-------------------|-----------------------------------------------------------|
| `Button.tsx`      | Componente reutilizable para botones (estilos y props).   |
| `Header.tsx`      | Encabezado común que se usa en varias pantallas.          |

---

### 2. **layouts** _(dentro de `common`)_
- **Función**: Define las **estructuras generales de página**, como distribuciones de contenido.

| Archivo            | Descripción                                                      |
|--------------------|------------------------------------------------------------------|
| `MainLayout.tsx`   | Layout principal con header, footer y sección de contenido.      |
| `AuthLayout.tsx`   | Layout específico para páginas de autenticación.                 |

---

### 4. **database** _(dentro de `features/auth`)_
- **Función**: Archivos relacionados con **consultas y conexión a la base de datos**.

| Archivo             | Descripción                                                   |
|----------------------|-------------------------------------------------------------|
| `dbConnection.ts`    | Configuración principal de conexión a Supabase.             |
| `userQueries.ts`     | Funciones para consultar o actualizar usuarios en la base.  |

---

### 5. **queries** _(dentro de `database`)_
- **Función**: Define **consultas específicas** a la base de datos o API.

| Archivo               | Descripción                                                     |
|------------------------|---------------------------------------------------------------|
| `fetchUserData.ts`     | Consulta los datos del usuario autenticado.                   |
| `updateUserProfile.ts` | Actualiza la información del perfil del usuario.              |

---

### 6. **hooks** _(dentro de `features/auth`)_
- **Función**: Contiene **custom hooks reutilizables** relacionados con la autenticación.

| Archivo             | Descripción                                                   |
|----------------------|-------------------------------------------------------------|
| `useLogin.ts`        | Maneja la lógica del proceso de inicio de sesión.           |
| `useAuthStatus.ts`   | Verifica y devuelve el estado de autenticación del usuario. |

---

### 7. **services**
- **Función**: Contiene la **lógica de negocio** o servicios generales como llamadas a APIs.

| Archivo                 | Descripción                                                       |
|--------------------------|-----------------------------------------------------------------|
| `apiService.ts`          | Configuración de llamadas genéricas a una API (GET, POST, etc). |
| `notificationService.ts` | Servicio para mostrar notificaciones (errores, éxitos).         |

---

### 8. **screens**
- **Función**: Contiene las **pantallas principales** de la aplicación, organizadas por módulos.

**Ejemplo (módulo `auth`):**

| Archivo               | Descripción                                                   |
|------------------------|-------------------------------------------------------------|
| `LoginScreen.tsx`      | Pantalla principal de inicio de sesión con hooks y componentes. |
| `RegisterScreen.tsx`   | Pantalla para registro de nuevos usuarios.                  |

---

### 9. **components** _(dentro de `screens/auth`)_
- **Función**: Contiene **componentes específicos** de la pantalla de autenticación.

| Archivo                | Descripción                                                   |
|-------------------------|-------------------------------------------------------------|
| `LoginForm.tsx`         | Componente del formulario de login (inputs y botones).      |
| `PasswordInput.tsx`     | Input reutilizable con funcionalidad de mostrar/ocultar contraseña. |

---

## 📚 **10. Librerías**

| **Librería**          | **Función**                                               | **Instalación**                                    |
|------------------------|----------------------------------------------------------|---------------------------------------------------|
| `Material UI`         | Utilización de componentes e iconos, además de una mejora visual. |  yarn add @mui/material @emotion/react @emotion/styled                                        |
|                        |                                                          | yarn add @mui/icons-material                      |

## **Resumen Final 📝**
- 📁 `common` → Elementos globales reutilizables.  
- 📁 `features` → Funcionalidades agrupadas (auth, cart, etc.).  
- 📁 `database` y `queries` → Conexión y consultas a la base de datos.  
- 📁 `hooks` → Lógica encapsulada y reutilizable.  
- 📁 `services` → Lógica de negocio y comunicación con APIs.  
- 📁 `screens` → Pantallas organizadas con componentes específicos.  

---
