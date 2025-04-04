import React, { useState } from "react";
import cartDropdown_styles from "./cartDropdown.module.css";

//icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Delete } from "@mui/icons-material";

//components
import Quantity from "./components/quantity";

//services
import { RemoveProduct } from "../../../../../../controllers/services/Cart/RemoveProductController";
import { formatNumber } from "../../../../../../controllers/services/helpers/formatPriceController";
import { CartDropdown_ProductsType } from "../../../../../../models/shop/CartDropdownModel";
import { useNavigate } from "react-router-dom";

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
}) => {
  const navigate = useNavigate();
  const [showDropdownCart, setShowDropdownCart] = useState(false);

  //navegar
  const handlePaySection = () => {
    navigate("/paySection");
  };

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
              <div className={cartDropdown_styles.cartFooter}>
                <button
                  className={cartDropdown_styles.checkoutButton}
                  onClick={handlePaySection}
                >
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
