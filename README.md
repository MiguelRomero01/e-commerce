## Instalación de las extensiones necesarias en VS Code para visualizar mejor el Readme

1. **Markdown Preview Enhanced**:
   - Instala esta extensión desde el Marketplace de Visual Studio Code para una vista previa mejorada de archivos Markdown.
   - [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

## Resolves utilizados

- **crypto**:  
  `require.resolve("crypto-browserify")`  
  - Resolución para el módulo `crypto` en entornos de navegador.

- **buffer**:  
  `require.resolve("buffer/")`  
  - Resolución para el módulo `buffer` en entornos de navegador.

- **stream**:  
  `require.resolve("stream-browserify")`  
  - Resolución para el módulo `stream` en entornos de navegador.

- **vm**:  
  `require.resolve("vm-browserify")`  
  - Resolución para el módulo `vm` en entornos de navegador.

## **Base de Datos**
Se implementa **Supabase** como motor de base de datos, aprovechando su integración con **PostgreSQL** y la facilidad de modificación directa.

---

## **Organización y Estructura del Proyecto 📂**

### 1. **common**
- **Función**: Contiene elementos **reutilizables globalmente** en toda la aplicación, como componentes compartidos, estilos o layouts.

| Archivo           | Descripción                                               |
|-------------------|-----------------------------------------------------------|
| `Button.tsx`      | _Componente reutilizable para botones (estilos y props)._   |
| `Header.tsx`      | _Encabezado común que se usa en varias pantallas._          |

---

### 2. **layouts** _(dentro de `common`)_
- **Función**: Define las **estructuras generales de página**, como distribuciones de contenido.

| Archivo            | Descripción                                                      |
|--------------------|------------------------------------------------------------------|
| `MainLayout.tsx`   | _Layout principal con header, footer y sección de contenido._      |
| `AuthLayout.tsx`   | _Layout específico para páginas de autenticación._                 |

---

### 4. **database** _(dentro de `features/auth`)_
- **Función**: Archivos relacionados con **consultas y conexión a la base de datos**.

| Archivo             | Descripción                                                   |
|----------------------|-------------------------------------------------------------|
| `dbConnection.ts`    | _Configuración principal de conexión a Supabase._             |
| `userQueries.ts`     | _Funciones para consultar o actualizar usuarios en la base._  |

---

### 5. **queries** _(dentro de `database`)_
- **Función**: Define **consultas específicas** a la base de datos o API.

| Archivo               | Descripción                                                     |
|------------------------|---------------------------------------------------------------|
| `fetchUserData.ts`     | _Consulta los datos del usuario autenticado._                   |
| `updateUserProfile.ts` | _Actualiza la información del perfil del usuario._              |

---

### 6. **hooks** _(dentro de `features/auth`)_
- **Función**: Contiene **custom hooks reutilizables** relacionados con la autenticación.

| Archivo             | Descripción                                                   |
|----------------------|-------------------------------------------------------------|
| `useLogin.ts`        | _Maneja la lógica del proceso de inicio de sesión._           |
| `useAuthStatus.ts`   | _Verifica y devuelve el estado de autenticación del usuario._ |

---

### 7. **services**
- **Función**: Contiene la **lógica de negocio** o servicios generales como llamadas a APIs.

| Archivo                 | Descripción                                                       |
|--------------------------|-----------------------------------------------------------------|
| `apiService.ts`          | _Configuración de llamadas genéricas a una API (GET, POST, etc)._ |
| `notificationService.ts` | _Servicio para mostrar notificaciones (errores, éxitos)._         |

---

### 8. **screens**
- **Función**: Contiene las **pantallas principales** de la aplicación, organizadas por módulos.

**Ejemplo (módulo `auth`):**

| Archivo               | Descripción                                                   |
|------------------------|-------------------------------------------------------------|
| `LoginScreen.tsx`      | _Pantalla principal de inicio de sesión con hooks y componentes._ |
| `RegisterScreen.tsx`   | _Pantalla para registro de nuevos usuarios._               |

---

### 9. **components** _(dentro de `screens/auth`)_
- **Función**: Contiene **componentes específicos** de la pantalla de autenticación.

| Archivo                | Descripción                                                   |
|-------------------------|-------------------------------------------------------------|
| `LoginForm.tsx`         | _Componente del formulario de login (inputs y botones)._      |
| `PasswordInput.tsx`     | _Input reutilizable con funcionalidad de mostrar/ocultar contraseña._ |

---

## 📚 **10. Librerías**

| **Librería**          | **Función**                                                       | **Instalación**                                        |
|-----------------------|-------------------------------------------------------------------|--------------------------------------------------------|
| `Material UI`         | Utilización de componentes e iconos, además de una mejora visual. |  _yarn add @mui/material @emotion/react @emotion/styled_|                                       |
|                       | Iconos utilizados                                                 | _yarn add @mui/icons-material_                           |
|`bcryptjs`             | Encriptacion de datos para ser mandados a la DB                   | _yarn add bcryptjs_                                      |

## **Resumen Final 📝**
- 📁 `common` → Elementos globales reutilizables.  
- 📁 `features` → Funcionalidades agrupadas (auth, cart, etc.).  
- 📁 `database` y `queries` → Conexión y consultas a la base de datos.  
- 📁 `hooks` → Lógica encapsulada y reutilizable.  
- 📁 `services` → Lógica de negocio y comunicación con APIs.  
- 📁 `screens` → Pantallas organizadas con componentes específicos.  

---
