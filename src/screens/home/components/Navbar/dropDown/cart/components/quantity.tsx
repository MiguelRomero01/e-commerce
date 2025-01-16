import React from "react";
import quantityStyles from "./quantity.module.css";
import { CartDropdown_ProductsType } from "../../../../../../../features/services/Cart/CartDropdownProducts";

interface QuantityProps {
     productId: number;
     quantity: number;
     setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
}

const Quantity: React.FC<QuantityProps> = ({ productId, quantity, setCart }) => {
     const handleIncrease = () => {
          setCart(prevCart =>
               prevCart.map(item =>
                    item.id === productId
                         ? { ...item, quantity: item.quantity + 1 }
                         : item
               )
          );
     };

     const handleDecrease = () => {
          setCart(prevCart =>
               prevCart.map(item =>
                    item.id === productId && item.quantity > 1
                         ? { ...item, quantity: item.quantity - 1 }
                         : item
               )
          );
     };

     return (
          <div>
               <button
                    className={quantityStyles["quantity-button-add"]}
                    onClick={handleDecrease}
               >
                    -
               </button>
               <span className={quantityStyles["quantity-number"]}>{quantity}</span>
               <button
                    className={quantityStyles["quantity-button-substract"]}
                    onClick={handleIncrease}
               >
                    +
               </button>
          </div>
     );
};

export default Quantity;
