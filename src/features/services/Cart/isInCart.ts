import { CartDropdown_ProductsType } from "./CartDropdownProducts";

interface Cart {
     cart: CartDropdown_ProductsType[];
     productId: number;
}

export const isInCart = ({cart, productId}: Cart) => {
     return cart.some((item) => item.id === productId);
};