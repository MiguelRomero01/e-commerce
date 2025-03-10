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

## 📌 Models:
`contiene los datos de entrada y salida necesarios para compartir entre componentes y funciones`

### 🔑 **Auth**
| **Archivo**             | **Descripción**  |
|-------------------------|------------------------------------------------|
| `auth.ts`              | Contiene los datos de entrada necesarios para la autenticación. |
| `actionModel.ts`       | Contiene la entrada para el registro. |
| `stateModel.ts`        | Contiene la entrada de datos del usuario para el registro. |

---

### 🏠 **Home**
| **Archivo**                  | **Descripción**  |
|------------------------------|------------------------------------------------|
| `HomePropsMode.ts`          | Props principales del navbar para pasarlos a los componentes hijos. |
| `categoriePropsMode.ts`     | Props necesarios para `productCard.tsx`, permitiendo mostrar productos dinámicamente. |

---

### 🎟️ **Memberships**
| **Archivo**                  | **Descripción**  |
|------------------------------|------------------------------------------------|
| `memberShipModel.ts`        | Maneja los datos para replicar las membresías en los componentes. |
| `memberShipsPropsModel.ts`  | Pasa los datos del navbar a las membresías. |

---

### 📌 **Navbar**
| **Archivo**                  | **Descripción**  |
|------------------------------|------------------------------------------------|
| `NavbarPropsModel.ts`       | Maneja el `navbarProps` principal utilizado en `navbar.tsx`. |
| `QuantityProps.ts`          | Props necesarios para sincronizar la cantidad de productos en el carrito. |

---

### 🛒 **Product Detail**
| **Archivo**                  | **Descripción**  |
|------------------------------|------------------------------------------------|
| `RecommendProdModel.ts`      | Props para recomendar productos y gestionar el carrito actual. |
| `procuctDetailPropsModel.ts` | Pasa los datos del navbar a los detalles del producto. |

---

### 🛍️ **Shop**
| **Archivo**                  | **Descripción**  |
|------------------------------|------------------------------------------------|
| `CartDropdownModel.ts`      | Props principales del carrito, incluyendo imagen, ID, título, precio y cantidad. |
| `FilterPropsModel.ts`       | Props utilizados en el filtro principal. |
| `ShopModel.ts`              | Pasa los datos del navbar a los detalles del producto. |
| `filterStateModel.ts`       | Gestiona los filtros principales en `filterPropsModel.ts`. |
| `ProductModel.ts`           | Pasa los datos del navbar a los detalles del producto. |

---


## 📌 Views:
`Contiene el frontEnd de la acplicacion. Es decir, la vista del usuario`

### 🔑 **Auth**
| **Archivo**             | **Descripción**  |
|-------------------------|------------------------------------------------|
| `authinput.tsx`         | Input para manejar la autenticación del usuario y evitar replicaciones. |
| **Login** → `LoginView.tsx` | Página principal del login con imagen, autenticación, campos y botones. |
| **Register** → `registerView.tsx` | Página principal del registro que trae componentes y funciones. |
| `errorRegister.tsx`     | Muestra un mensaje si el usuario falla en la autenticación. |
| `successRegister.tsx`   | Indica autenticación exitosa y permite redirigir al login. |

### 🌍 **Common**
| **Archivo**              | **Descripción**  |
|--------------------------|------------------------------------------------|
| **Animations**           | Animaciones en formato JSON para distintos componentes. |
| **Components → Animations** | Componentes con animaciones integradas. |
| **Footer**               | Footer principal reutilizable en varias secciones. |
| **Navbar → DropDown**    | Funciones del carrito desplegable y gestión de usuario. |

### 📌 **Navbar**
| **Archivo**      | **Descripción**  |
|------------------|------------------------------------------------|
| `navbar.tsx`    | Contiene la estructura y funciones del navbar. |

### 📲 **Others**
| **Archivo**           | **Descripción**  |
|-----------------------|------------------------------------------------|
| `socialMedia.jsx`     | Redes sociales utilizadas en `heroSection`. |
| `returnBack.jsx`      | Componente para retornar a la página anterior. |
| `searchbar.tsx`      | Barra de búsqueda utilizada en la tienda (`shop`). |
| `titleUnderline.tsx`  | Título con animación y decoración como encabezado principal. |
| `zoomImage.jsx`      | Función de zoom en imágenes para `productDetails`. |

---

## 🏠 **Home**
| **Archivo**               | **Descripción**  |
|---------------------------|------------------------------------------------|
| `HomeView.tsx`            | Página principal de la eCommerce que redirige al resto de páginas. |
| **Components**            | Contiene los siguientes subcomponentes: |
| `categorie.tsx`          | Componente de categorías de los productos. |
| `heroSection.jsx`        | Componente de la sección principal con más elementos internos. |
| `userReview.jsx`         | Tarjeta de reseña del usuario utilizada posteriormente. |

---

## 🎟️ **Memberships**
| **Archivo**                  | **Descripción**  |
|------------------------------|------------------------------------------------|
| `membershipsView.tsx`        | Contiene todas las membresías y su vinculación con otras páginas. |
| **Components**               | Contiene los siguientes subcomponentes: |
| `membership.tsx`             | Contiene la información e imágenes para crear **una** membresía. |

---

## 🛍️ **Product Detail**
| **Archivo**                      | **Descripción**  |
|----------------------------------|------------------------------------------------|
| `ProductDetailsPageView.tsx`    | Contiene todos los detalles del producto, incluyendo navbar, zoom, recomendaciones, etc. |
| **Components**                   | Contiene los siguientes subcomponentes: |
| `additionalDetails.tsx`          | Detalles adicionales del producto seleccionado. |
| `recommendedProducts.tsx`        | Muestra productos recomendados en base a la selección del usuario. |

---

## 🏪 **Shop**
| **Archivo**             | **Descripción**  |
|-------------------------|------------------------------------------------|
| `shopView.tsx`         | Área de compra con productos y redirección al producto escogido. |
| **Components**         | Contiene los siguientes subcomponentes: |
| **Filter**             | Contiene los siguientes archivos para la funcionalidad del filtrado: |
| `filter.tsx`         | Implementa los filtros y su relación con `shopView.tsx`. |
| **Components**         | Subcomponentes internos del filtro: |
| `combobox.tsx`       | Combobox para filtrar por selección de características. |
| `rangeSlider.tsx`    | Slider para filtrar por precios u otros rangos. |

---
## 📌 Controllers:
`Son las funciones de los componentes`

### 🔑 **Auth**
| **Archivo**                  | **Descripción**  |
|------------------------------|------------------------------------------------|
| `authUserController.ts`      | Autentica al usuario al momento de hacer login en la app. |

---

### 🗄️ **Database**  
#### 📌 **Queries**  

##### 📥 **GET**  
###### 👤 **Users**
| **Archivo**                         | **Descripción**  |
|--------------------------------------|------------------------------------------------|
| `getMembershipController.ts`         | Obtiene la membresía actual del usuario registrado. |
| `getUserCredentialsController.ts`    | Obtiene las credenciales del usuario para ser autenticado correctamente. |

###### 🛍️ **Product**
| **Archivo**                         | **Descripción**  |
|--------------------------------------|------------------------------------------------|
| `getAllProductsController.ts`       | Obtiene todos los productos de la base de datos con su información más relevante. |
| `getFilterProductsController.ts`    | Obtiene los productos filtrados en el shop. |
| `getProductController.ts`           | Obtiene un solo producto, es decir, el que fue seleccionado para ser mostrado en `productDetails`. |
| `getRelatedProductsController.ts`   | Obtiene los productos relacionados al momento de seleccionar un producto. |
| `getTopProductsController.ts`       | Obtiene los productos con más calificación de la base de datos. |

##### 📤 **POST**  
| **Archivo**                         | **Descripción**  |
|--------------------------------------|------------------------------------------------|
| `saveProductController.ts`          | Guarda el producto que se desea registrar. |

###### 👤 **Users**
| **Archivo**                         | **Descripción**  |
|--------------------------------------|------------------------------------------------|
| `createUserController.ts`           | Crea un usuario si es la primera vez que se registra. |

###### 🖼️ **Images**
| **Archivo**                         | **Descripción**  |
|--------------------------------------|------------------------------------------------|
| `uploadImageContent.ts`             | Va de la mano con `saveProductController`. Crea una URL en la base de datos vinculada a la imagen. |

---

## ⚙️ **Services**  

### 🛒 **Cart**
| **Archivo**                         | **Descripción**  |
|--------------------------------------|------------------------------------------------|
| `addShoppingCartController.ts`      | Añade el producto seleccionado al carrito de compras con su información más relevante. |
| `isInCartController.ts`             | Verifica si el producto ya está en el carrito. |
| `RemoveProductController.ts`        | Remueve el producto seleccionado del carrito. |

---

### 🗄️ **Database**
| **Archivo**                         | **Descripción**  |
|--------------------------------------|------------------------------------------------|
| `supabase.ts`                        | Crea la conexión con la base de datos (Supabase). |

---

### 📂 **File Upload**
| **Archivo**                         | **Descripción**  |
|--------------------------------------|------------------------------------------------|
| `fileUploadController.ts`           | Sube la imagen a la base de datos. |

---

### 🛠️ **Helpers**
| **Archivo**                         | **Descripción**  |
|--------------------------------------|------------------------------------------------|
| `formatPriceController.ts`          | Formatea el precio del producto, es decir, lo pone en puntos decimales. |
| `hashPasswordController.ts`         | Hashea la contraseña del usuario al momento del registro o login. |
| `membershipValueController.ts`      | Coloca los precios de las membresías de acuerdo a su categoría para ser usados en un componente `card`. |

---




## 📚 **10. Librerías**

| **Librería**          | **Función**                                                       | **Instalación**                                        |
|-----------------------|-------------------------------------------------------------------|--------------------------------------------------------|
| `Material UI`         | Utilización de componentes e iconos, además de una mejora visual. |  _yarn add @mui/material @emotion/react @emotion/styled_|   
|                       | Uso de Iconos                                                     | _yarn add @mui/icons-material_                           |
|`bcryptjs`             | Encriptacion de datos para ser mandados a la DB                   | _yarn add bcryptjs_                                      |
|`lottie-react`         | Uso de animaciones                                                | _yarn add lottie-react_                                  |
|`sweetalert2`          | uso de alertas mejoradas                                          | _yarn add sweetalert2 react-sweetalert2_