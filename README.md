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



## 📌 Views  

| **Categoría**       | **Archivo**                         | **Descripción**  |
|--------------------|---------------------------------|------------------------------------------------|
| **🔑 Auth**        | `authinput.tsx`                 | Input para manejar la autenticación del usuario y evitar replicaciones. |
|                    | **Login** → `LoginView.tsx`     | Página principal del login con imagen, autenticación, campos y botones. |
|                    | **Register** → `registerView.tsx` | Página principal del registro que trae componentes y funciones. |
| **⚠️ Mensajes**    | `errorRegister.tsx`             | Muestra un mensaje si el usuario falla en la autenticación. |
|                    | `successRegister.tsx`           | Indica autenticación exitosa y permite redirigir al login. |
| **🌍 Common**      | **Animations**                  | Animaciones en formato JSON para distintos componentes. |
|                    | **Components → Animations**     | Componentes con animaciones integradas. |
|                    | **Footer**                      | Footer principal reutilizable en varias secciones. |
|                    | **Navbar → DropDown**           | Funciones del carrito desplegable y gestión de usuario. |
| **📌 Navbar**      | `navbar.tsx`                    | Contiene la estructura y funciones del navbar. |
| **📲 Others**      | `socialMedia.jsx`               | Redes sociales utilizadas en `heroSection`. |
| **🛍️ Product Card** | `productCard.jsx`              | Tarjeta de producto con información detallada. |
| **🔙 Return**      | `returnBack.jsx`                | Componente para retornar a la página anterior. |
| **🔎 Search Bar**  | `searchbar.tsx`                 | Barra de búsqueda utilizada en la tienda (`shop`). |
| **📝 Titles**      | `titleUnderline.tsx`            | Título con animación y decoración como encabezado principal. |
| **🔍 Zoom**        | `zoomImage.jsx`                 | Función de zoom en imágenes para `productDetails`. |



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



## 📚 **10. Librerías**

| **Librería**          | **Función**                                                       | **Instalación**                                        |
|-----------------------|-------------------------------------------------------------------|--------------------------------------------------------|
| `Material UI`         | Utilización de componentes e iconos, además de una mejora visual. |  _yarn add @mui/material @emotion/react @emotion/styled_|   
|                       | Uso de Iconos                                                     | _yarn add @mui/icons-material_                           |
|`bcryptjs`             | Encriptacion de datos para ser mandados a la DB                   | _yarn add bcryptjs_                                      |
|`lottie-react`         | Uso de animaciones                                                | _yarn add lottie-react_                                  |
|`sweetalert2`          | uso de alertas mejoradas                                          | _yarn add sweetalert2 react-sweetalert2_