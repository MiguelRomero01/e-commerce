import { CartDropdown_quantity } from "./CartDropdownProducts";

export const RemoveProduct = (
     productId: number, 
     setProducts: React.Dispatch<React.SetStateAction<CartDropdown_quantity[]>>
) => {
     setProducts(prevProducts => prevProducts.filter(item => item.id !== productId));
};