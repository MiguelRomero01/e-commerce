import { CartDropdown_ProductsType } from "../shop/CartDropdownModel";

export interface PayProps {
  isLogged: boolean;
  onLogout: () => void;
  cart: CartDropdown_ProductsType[];
  setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
  membership: string | null;
}
