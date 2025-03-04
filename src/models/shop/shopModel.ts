import { CartDropdown_ProductsType } from "./CartDropdownModel";

export interface ShopProps {
  isLogged: boolean;
  onLogout: () => void;
  cart: CartDropdown_ProductsType[];
  setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
  membership: string | null;
}
