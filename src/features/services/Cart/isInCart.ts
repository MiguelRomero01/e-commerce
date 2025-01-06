import { CartDropdownProducts } from "./CartDropdownProducts";

interface Cart {
     cart: CartDropdownProducts[];
     productId: number;
}

export const isInCart = ({cart, productId}: Cart) => {
     return cart.some((item) => item.id === productId);
};