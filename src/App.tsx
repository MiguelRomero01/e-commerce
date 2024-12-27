import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/auth/login/Login';
import Home from './screens/home/Home';
import RegisterScreen from './screens/auth/register/Register';

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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
                    element={<Home isLogged={isAuthenticated} onLogout={handleLogout} />} 
                />
                <Route 
                    path="/login" 
                    element={<Login onAuthSuccess={handleAuthSuccess} />} 
                />

                <Route
                    path='/register'
                    element={<RegisterScreen/>}
                />
            </Routes>
        </Router>
    );
};

export default App;
