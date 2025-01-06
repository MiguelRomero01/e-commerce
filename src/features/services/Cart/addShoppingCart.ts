import { CartDropdownProducts } from "./CartDropdownProducts";
import { isInCart } from "./isInCart";

interface Product {
     product: any;
     setCart: React.Dispatch<React.SetStateAction<CartDropdownProducts[]>>;
     cart: CartDropdownProducts[];
}

export const handleAddToCart = ({product, setCart, cart}: Product) => {
     if (!isInCart({cart, productId: product.id})) {
          setCart((prevCart) => [...prevCart, product]);
     }
};