import React from "react";
import quantityStyles from "./quantity.module.css";

import { QuantityProps } from "../../../../../../../models/navbar/quantityPropsModel";

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
