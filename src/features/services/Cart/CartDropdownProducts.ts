export type CartDropdownProducts = {
     id: number;
     Title: string;
     Price: number;
     ImageURL: string;
};

export interface CartDropdown_quantity extends CartDropdownProducts {
     quantity: number;
}
