import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navbar_styles from "./navbar.module.css";

import UserDropdown from "./dropDown/user/userDropdown";
import CartDropdown from "./dropDown/cart/cartDropdown";
import { CartDropdown_ProductsType } from "../../../features/services/Cart/CartDropdownProducts";

interface NavbarProps {
  isLogged: boolean;
  onLogout: () => void;
  cart: CartDropdown_ProductsType[];
  setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({
  isLogged,
  onLogout,
  cart,
  setCart,
  theme,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  

  const handleSignIn = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={navbar_styles["navbar"]}>
      <button className={navbar_styles["menu-button"]} onClick={toggleMenu}>
        <span
          style={{ backgroundColor: theme === "light" ? "white" : "black" }}
        ></span>
        <span
          style={{ backgroundColor: theme === "light" ? "white" : "black" }}
        ></span>
        <span
          style={{ backgroundColor: theme === "light" ? "white" : "black" }}
        ></span>
      </button>

      <div className={navbar_styles["logo-container"]}>
        {theme === "light" ? (
          <img src="/Images/Navbar/logo.png" alt="logo" />
        ) : (
          <img src="/Images/Navbar/logoDark.png" alt="logo" />
        )}
      </div>

      <div
        className={`${navbar_styles["links-container"]} ${
          isMenuOpen ? navbar_styles["menu-open"] : ""
        }`}
        data-theme={theme}
      >
        <ul>
          <li>
            <Link
              to="/"
              className={navbar_styles["navbar-links"]}
              style={{ color: theme === "light" ? "white" : "black" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/memberships"
              className={navbar_styles["navbar-links"]}
              style={{ color: theme === "light" ? "white" : "black" }}
            >
              Memberships
            </Link>
          </li>
          <li>
            <Link
              to="/shop/all"
              className={navbar_styles["navbar-links"]}
              style={{ color: theme === "light" ? "white" : "black" }}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to=""
              className={navbar_styles["navbar-links"]}
              style={{ color: theme === "light" ? "white" : "black" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className={navbar_styles["auth-container"]}>
        <div
          style={{
            position: "relative",
            display: "flex",
            marginBottom: "-1vh",
          }}
        >
          {!isLogged ? (
            <>
              <CartDropdown
                Products={cart || []}
                setCart={setCart}
                theme={theme}
              />
              <button
                className={navbar_styles["sign-in-button"]}
                onClick={handleSignIn}
                style={{
                  color: theme === "light" ? "black" : "white",
                  backgroundColor: theme === "light" ? "white" : "black",
                }}
              >
                SIGN IN
              </button>
            </>
          ) : (
            <>
              <UserDropdown onLogout={onLogout} theme={theme} />
              <CartDropdown
                Products={cart || []}
                setCart={setCart}
                theme={theme}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
