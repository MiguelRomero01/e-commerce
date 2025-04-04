import React, { useEffect, useState } from "react";

//routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//screens
import { Login } from "./auth/login";
import { Home } from "./home";
import { RegisterScreen } from "./auth/register";
import { ProductDetailsPage } from "./productDetail";

//types
import { CartDropdown_ProductsType } from "../models/shop/CartDropdownModel";
import { Shop } from "./shop";
import { MemberShips } from "./memberships";
import { getmembershipValue } from "../controllers/services/helpers/membershipValueController";
import { PayView } from "./paySection";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); //verify if the user is authenticated
  const [animationOcurred, setanimationOcurred] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [userMembership, setUserMembership] = useState<any>(null);
  const [cart, setCart] = useState<CartDropdown_ProductsType[]>([]); //products in the cart

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    setUserMembership(null);
  };

  const handleUser = (username: string) => {
    setUsername(username);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const membership = await getmembershipValue(username);
      setUserMembership(membership);
    };
    fetchUser();
  }, [username]);

  useEffect(() => {
    setTimeout(() => {
      setanimationOcurred(true);
    }, 1800);
  }, []);

  const commonProps = {
    isLogged: isAuthenticated,
    onLogout: handleLogout,
    setCart: setCart,
    cart: cart,
    membership: userMembership,
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home {...commonProps} animationOcurred={animationOcurred} />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              onAuthSuccess={handleAuthSuccess}
              onUsernameSuccess={handleUser}
            />
          }
        />

        <Route path="/register" element={<RegisterScreen />} />

        <Route
          path="/product/:id/:title"
          element={<ProductDetailsPage {...commonProps} />}
        />

        <Route path="/memberships" element={<MemberShips {...commonProps} />} />

        <Route path="/shop" element={<Shop {...commonProps} />} />
        <Route path="/shop/:category" element={<Shop {...commonProps} />} />
        <Route path="/paySection" element={<PayView {...commonProps} />} />
      </Routes>
    </Router>
  );
};

export default App;
