import React, { useState } from "react";
import cartDropdown_styles from "./cartDropdown.module.css";

//icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Delete } from "@mui/icons-material";

//components
import Quantity from "./components/quantity";

//services
import { RemoveProduct } from "../../../../../features/services/Cart/RemoveProduct";
import { formatNumber } from "../../../../../features/services/formatPrice";
import { CartDropdown_ProductsType } from "../../../../../features/services/Cart/CartDropdownProducts";

type userProducts = {
  Products: CartDropdown_ProductsType[];
};

type CartDropdownProps = userProducts & {
  setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
  theme: string;
  membership: string | null;
};

const CartDropdown: React.FC<CartDropdownProps> = ({
  Products,
  setCart,
  theme,
  membership,
}) => {
  const [showDropdownCart, setShowDropdownCart] = useState(false);

  // Calcular el subtotal basado en productos y sus cantidades
  const subtotal = Products.reduce(
    (sum, product) => sum + product.Price * product.quantity,
    0
  );

  //calcular el total
  let total = 0;
  if (membership) {
    const membershipFloat = parseFloat(membership);
    total = subtotal - subtotal * (membershipFloat / 100);
  } else {
    total = subtotal;
  }

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
                        $
                        {formatNumber(productCart.Price * productCart.quantity)}
                      </p>
                      <Quantity
                        productId={productCart.id}
                        quantity={productCart.quantity}
                        setCart={setCart}
                      />
                    </div>

                    <button
                      onClick={() => RemoveProduct(productCart.id, setCart)}
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
                <p>SubTotal: ${formatNumber(subtotal)}</p>
                <p>Descount membership: {membership}%</p>
                <p id={cartDropdown_styles["cart-total"]}>
                  Total: ${formatNumber(total)}
                </p>
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
