import React, { useState } from 'react';

//routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//screens
import Login from './screens/auth/login/Login';
import Home from './screens/home/Home';
import RegisterScreen from './screens/auth/register/Register';
import ProductDetailsPage from './screens/productDetail/ProductDetailsPage';

//types
import { CartDropdown_quantity } from './features/services/Cart/CartDropdownProducts';
import { Shop } from './screens/shop';

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); //verify if the user is authenticated
    const [cart, setCart] = useState<CartDropdown_quantity[]>([]); //products in the cart

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
                    element={<Home 
                                isLogged={isAuthenticated} 
                                onLogout={handleLogout} 
                                setCart={setCart} 
                                cart={cart} 
                            />} 
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
                    path='/product/:id/:title'
                    element={
                        <ProductDetailsPage 
                            isLogged={isAuthenticated} 
                            onLogout={handleLogout} 
                            cart={cart} 
                            setCart={setCart}
                        />
                    }
                />

                <Route
                    path='/shop'
                    element={<Shop />}
                />
            </Routes>
        </Router>
    );
};

export default App;
