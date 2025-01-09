import { CartDropdown_ProductsType } from "./CartDropdownProducts";

export const RemoveProduct = (
     productId: number, 
     setProducts: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>
) => {
     setProducts(prevProducts => prevProducts.filter(item => item.id !== productId));
};