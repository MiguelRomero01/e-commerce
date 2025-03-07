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

## 📌 Models  

| **Categoría**    | **Archivo**                      | **Descripción**  |
|-----------------|--------------------------------|------------------------------------------------|
| **🔑 Auth**       | `auth.ts`                     | Contiene los datos de entrada necesarios para la autenticación. |
|                 | `actionModel.ts`               | Contiene la entrada para el registro. |
|                 | `stateModel.ts`                | Contiene la entrada de datos del usuario para el registro. |
| **🏠 Home**      | `HomePropsMode.ts`            | Props principales del navbar para pasarlos a los componentes hijos. |
|                 | `categoriePropsMode.ts`        | Props necesarios para `productCard.tsx`, permitiendo mostrar productos dinámicamente. |
| **🎟️ Memberships** | `memberShipModel.ts`         | Maneja los datos para replicar las membresías en los componentes. |
|                 | `memberShipsPropsModel.ts`     | Pasa los datos del navbar a las membresías. |
| **📌 Navbar**    | `NavbarPropsModel.ts`         | Maneja el `navbarProps` principal utilizado en `navbar.tsx`. |
|                 | `QuantityProps.ts`             | Props necesarios para sincronizar la cantidad de productos en el carrito. |
| **🛒 Product Detail** | `RecommendProdModel.ts`    | Props para recomendar productos y gestionar el carrito actual. |
|                 | `procuctDetailPropsModel.ts`   | Pasa los datos del navbar a los detalles del producto. |
| **🛍️ Shop**      | `CartDropdownModel.ts`        | Props principales del carrito, incluyendo imagen, ID, título, precio y cantidad. |
|                 | `FilterPropsModel.ts`          | Props utilizados en el filtro principal. |
|                 | `ShopModel.ts`                 | Pasa los datos del navbar a los detalles del producto. |
|                 | `filterStateModel.ts`          | Gestiona los filtros principales en `filterPropsModel.ts`. |
|                 | `ProductModel.ts`              | Pasa los datos del navbar a los detalles del producto. |



Views
auth 
-> components -> authinput: Input para manejar la autenticacion del usuario y evitar replicaciones
-> login -> LoginView.tsx: pagina principal con Interfaz del login con imagen, autenticacion, campos, botones, etc
-> register -> registerView.tsx: pagina principal del register que trae componentes y funciones
components -> errorRegister.tsx: si el usuario falla en la autenticacion se muestra un mensaje y campo que lo indica
              successRegister.tsx: si el usuario se autentica exitosamente, se muestra un campo y permite redirigir al login

common: componentes y animacion comunes usadas en varios componentes
->animations: animaciones en formason JSON para usar en distintos componentes con la libreria necesaria
->components -> animations: componentes con las animaciones integradas
-> footer: footer principal para el uso en diferentes secciones de la pagina
-> navbar -> DropDown: funciones del carrito para ser desplegado y usado y funcioens del usuario
navbar: navbar con el uso de componentes y funciones para su distribucion
others-> socialMedia.jsx: redes sociales de la pagina para ser usada en el heroSection
productCard -> productCard.jsx: Product card de la gorra con la informacion necesaria 
ReturnToPage->returnBack.jsx: componente para retornar siempre a la pagina anterior a la que se está
searchaBar -> searchbar.tsx:componente del serachBar utilizado en la shop para buscar productos
Titles -> titleUnderline.tsx: titulo con animacion y decoracion para ser utilizado como titulo principal
zoom -> zoomImage.jsx: Zoom para la imagen en el productdetails para mas detalles 

home







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
| `Material UI`         | Utilización de componentes e iconos, además de una mejora visual. |  _yarn add @mui/material @emotion/react @emotion/styled_|   
|                       | Uso de Iconos                                                     | _yarn add @mui/icons-material_                           |
|`bcryptjs`             | Encriptacion de datos para ser mandados a la DB                   | _yarn add bcryptjs_                                      |
|`lottie-react`         | Uso de animaciones                                                | _yarn add lottie-react_                                  |
|`sweetalert2`          | uso de alertas mejoradas                                          | _yarn add sweetalert2 react-sweetalert2_

## **Resumen Final 📝**
- 📁 `common` → Elementos globales reutilizables.  
- 📁 `features` → Funcionalidades agrupadas (auth, cart, etc.).  
- 📁 `database` y `queries` → Conexión y consultas a la base de datos.  
- 📁 `hooks` → Lógica encapsulada y reutilizable.  
- 📁 `services` → Lógica de negocio y comunicación con APIs.  
- 📁 `screens` → Pantallas organizadas con componentes específicos.  

---
