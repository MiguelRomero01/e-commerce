import { CartDropdown_quantity } from "./CartDropdownProducts";
import { isInCart } from "./isInCart";

interface Product {
     product: CartDropdown_quantity;
     setCart: React.Dispatch<React.SetStateAction<CartDropdown_quantity[]>>;
     cart: CartDropdown_quantity[];
}

export const handleAddToCart = ({product, setCart, cart}: Product) => {
     if (!isInCart({cart, productId: product.id})) {
          const newProduct: CartDropdown_quantity = {
               id: product.id,
               Title: product.Title,
               Price: product.Price,
               ImageURL: product.ImageURL,
               quantity: 1
          };
          
          setCart((prevCart) => [...prevCart, newProduct]);
     }
};