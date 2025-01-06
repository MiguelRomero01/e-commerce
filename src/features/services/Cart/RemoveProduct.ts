import { CartDropdownProducts } from "./CartDropdownProducts";

export const RemoveProduct = (
     productId: number, 
     setProducts: React.Dispatch<React.SetStateAction<CartDropdownProducts[]>>
) => {
     setProducts(prevProducts => prevProducts.filter(item => item.id !== productId));
};