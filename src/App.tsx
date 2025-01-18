import React, { useEffect, useState } from "react";

//routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//screens
import Login from "./screens/auth/login/Login";
import Home from "./screens/home/Home";
import RegisterScreen from "./screens/auth/register/Register";
import ProductDetailsPage from "./screens/productDetail/ProductDetailsPage";

//types
import { CartDropdown_ProductsType } from "./features/services/Cart/CartDropdownProducts";
import Shop from "./screens/shop/shop";
import { MemberShips } from "./screens/memberships";
import { getmembershipValue } from "./features/services/membershipValue";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); //verify if the user is authenticated
  const [username, setUsername] = useState<string | null>(null);
  const [userMembership, setUserMembership] = useState<any>(null);
  const [cart, setCart] = useState<CartDropdown_ProductsType[]>([]); //products in the cart

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername(null)
    setUserMembership(null)
  };

  const handleUser = (username: string) => {
    setUsername(username);
  };

  useEffect(() => {
    const fetchUser = async() => {
      const membership = await getmembershipValue(username);
      setUserMembership(membership)
    }
    fetchUser()
  }, [username])

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLogged={isAuthenticated}
              onLogout={handleLogout}
              setCart={setCart}
              cart={cart}
              membership={userMembership}
            />
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
          element={
            <ProductDetailsPage
              isLogged={isAuthenticated}
              onLogout={handleLogout}
              cart={cart}
              setCart={setCart}
              membership={userMembership}
            />
          }
        />

        <Route
          path="/memberships"
          element={
            <MemberShips
              isLogged={isAuthenticated}
              onLogout={handleLogout}
              cart={cart}
              setCart={setCart}
              membership={userMembership}
            />
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              isLogged={isAuthenticated}
              onLogout={handleLogout}
              cart={cart}
              setCart={setCart}
              membership={userMembership}
            />
          }
        />
        <Route
          path="/shop/:category"
          element={
            <Shop
              isLogged={isAuthenticated}
              onLogout={handleLogout}
              cart={cart}
              setCart={setCart}
              membership={userMembership}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
