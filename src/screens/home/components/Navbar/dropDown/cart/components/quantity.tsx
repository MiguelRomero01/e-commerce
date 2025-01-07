import React, { useState } from "react";
import quantityStyles from "./quantity.module.css";

const Quantity: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  return (
     <div>
          <button
               className={quantityStyles["quantity-button-add"]}
               onClick={() =>
                    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
               }
          >
          -
          </button>
          <span className={quantityStyles["quantity-number"]}>{quantity}</span>
          <button
               className={quantityStyles["quantity-button-substract"]}
               onClick={() => setQuantity(quantity + 1)}
          >
          +
          </button>
     </div>
     );
};

export default Quantity;
