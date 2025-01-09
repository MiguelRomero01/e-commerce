import { CartDropdown_ProductsType } from "./CartDropdownProducts";
import { isInCart } from "./isInCart";

interface Product {
     product: CartDropdown_ProductsType;
     setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
     cart: CartDropdown_ProductsType[];
}

export const handleAddToCart = ({product, setCart, cart}: Product) => {
     if (!isInCart({cart, productId: product.id})) {
          const newProduct: CartDropdown_ProductsType = {
               id: product.id,
               Title: product.Title,
               Price: product.Price,
               ImageURL: product.ImageURL,
               quantity: 1
          };
          
          setCart((prevCart) => [...prevCart, newProduct]);
     }
};