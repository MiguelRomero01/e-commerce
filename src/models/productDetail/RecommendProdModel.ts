import { CartDropdown_ProductsType } from "../shop/CartDropdownModel";

export interface RecommendedProductsProps {
     setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
     cart: CartDropdown_ProductsType[];
     productData: any;
}