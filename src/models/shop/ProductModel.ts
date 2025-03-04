import { CartDropdown_ProductsType } from "./CartDropdownModel";

export interface Product {
     product: CartDropdown_ProductsType;
     setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
     cart: CartDropdown_ProductsType[];
}