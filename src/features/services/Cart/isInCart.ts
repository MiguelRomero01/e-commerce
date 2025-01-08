import { CartDropdown_quantity } from "./CartDropdownProducts";

interface Cart {
     cart: CartDropdown_quantity[];
     productId: number;
}

export const isInCart = ({cart, productId}: Cart) => {
     return cart.some((item) => item.id === productId);
};