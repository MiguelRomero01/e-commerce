//data obtained from the database
export type CartDropdownProducts = {
     id: number;
     Title: string;
     Price: number;
     ImageURL: string;
};

//add quantity to the product in the cart
export interface CartDropdown_ProductsType extends CartDropdownProducts {
     quantity: number;
}
