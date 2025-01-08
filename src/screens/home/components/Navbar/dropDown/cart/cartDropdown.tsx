import React, { useState } from "react";
import cartDropdown_styles from "./cartDropdown.module.css";

//icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Delete } from "@mui/icons-material";

//components
import Quantity from "./components/quantity";

//services
import { RemoveProduct } from "../../../../../../features/services/Cart/RemoveProduct";
import { formatNumber } from "../../../../../../features/services/formatNumber";
import { CartDropdown_quantity } from "../../../../../../features/services/Cart/CartDropdownProducts"; 

type userProducts = {
  Products: CartDropdown_quantity[];
};

type CartDropdownProps = userProducts & {
  setCart: React.Dispatch<React.SetStateAction<CartDropdown_quantity[]>>;
  theme: string;
};

const CartDropdown: React.FC<CartDropdownProps> = ({
  Products,
  setCart,
  theme,
}) => {
  const [showDropdownCart, setShowDropdownCart] = useState(false);

  // Calcular el total basado en productos y sus cantidades
  const total = Products.reduce(
    (sum, product) => sum + product.Price * product.quantity,
    0
  );

  return (
    <div className={cartDropdown_styles.container}>
      <div className={cartDropdown_styles.cartIcon}>
        <ShoppingCartIcon
          onClick={() => setShowDropdownCart(!showDropdownCart)}
          sx={{
            color: theme === "light" ? "white" : "black",
            fontSize: "2rem",
            marginRight: "20px",
            transition: "all 0.3s ease",
            "&:hover": {
              scale: "1.1",
              cursor: "pointer",
            },
          }}
        />
        {Products.length > 0 && (
          <span className={cartDropdown_styles.badge}>{Products.length}</span>
        )}
      </div>

      {showDropdownCart && (
        <div className={cartDropdown_styles["dropdown-menu"]}>
          {Products.length === 0 ? (
            <p className={cartDropdown_styles.emptyCart}>No products in cart</p>
          ) : (
            <>
              <ul className={cartDropdown_styles.cartList}>
                {Products.map((productCart) => (
                  <li
                    key={productCart.id}
                    className={cartDropdown_styles.cartItem}
                  >
                    <div className={cartDropdown_styles.productImage}>
                      <img src={productCart.ImageURL} alt={productCart.Title} />
                    </div>
                    <div className={cartDropdown_styles.productInfo}>
                      <h3>{productCart.Title}</h3>
                      <p className={cartDropdown_styles.price}>
                        ${formatNumber(productCart.Price * productCart.quantity)}
                      </p>
                      <Quantity 
                        productId={productCart.id}
                        quantity={productCart.quantity}
                        setCart={setCart}
                      />
                    </div>

                    <button
                      onClick={() => RemoveProduct(productCart.id, setCart )}
                      className={cartDropdown_styles["remove-product"]}
                    >
                      <Delete
                        sx={{
                          fontSize: "1.1rem",
                          verticalAlign: "middle",
                          color: "white",
                          "&:hover": {
                            color: "black",
                          },
                        }}
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <div className={cartDropdown_styles.cartTotal}>
                <p>Total: ${formatNumber(total)}</p>
              </div>
              <div className={cartDropdown_styles.cartFooter}>
                <button className={cartDropdown_styles.checkoutButton}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
