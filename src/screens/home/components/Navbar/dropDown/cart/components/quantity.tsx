import React from "react";
import quantityStyles from "./quantity.module.css";

type quantityProps = {
     quantity: number;
     setQuantity: (quantity: number) => void;
}

const Quantity:React.FC<quantityProps> = ({quantity, setQuantity}) => {
     return(
          <div>
               <button className={quantityStyles['quantity-button-add']} onClick={() => quantity > 1? setQuantity(quantity-1): setQuantity(1)}>-</button>
               <span className={quantityStyles['quantity-number']}>{quantity}</span>
               <button className={quantityStyles['quantity-button-substract']} onClick={() => setQuantity(quantity+1)}>+</button>
          </div>
     )
}

export default Quantity;