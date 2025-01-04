import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/auth/login/Login';
import Home from './screens/home/Home';
import RegisterScreen from './screens/auth/register/Register';
import { CartDropdownProducts } from './screens/home/components/Navbar/dropDown/cart/cartDropdown';
import { ProductDetail } from './screens/productDetail';
const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [cart, setCart] = useState<CartDropdownProducts[]>([]);

    const handleAuthSuccess = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home isLogged={isAuthenticated} onLogout={handleLogout} setCart={setCart} cart={cart} />} 
                />
                <Route 
                    path="/login" 
                    element={<Login onAuthSuccess={handleAuthSuccess} />} 
                />

                <Route
                    path='/register'
                    element={<RegisterScreen/>}
                />

                <Route
                    path='/product/:id/:name'
                    element={<ProductDetail/>}
                />
            </Routes>
        </Router>
    );
};

export default App;
