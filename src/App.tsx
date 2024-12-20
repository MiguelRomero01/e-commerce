import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/auth/login/Login';
import RegisterScreen from './screens/auth/register/Register';
import HomeScreen from './screens/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='login' element={<LoginScreen/>}/>
        <Route path='register' element={<RegisterScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
