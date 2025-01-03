import { CartDropdownProducts } from "../../screens/home/components/Navbar/dropDown/cart/cartDropdown";

export const RemoveProduct = (
     productId: number, 
     setProducts: React.Dispatch<React.SetStateAction<CartDropdownProducts[]>>
) => {
     setProducts(prevProducts => prevProducts.filter(item => item.id !== productId));
};