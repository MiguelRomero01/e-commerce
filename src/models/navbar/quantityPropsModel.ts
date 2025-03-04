import { CartDropdown_ProductsType } from "../shop/CartDropdownModel";

export interface QuantityProps {
     productId: number;
     quantity: number;
     setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
}