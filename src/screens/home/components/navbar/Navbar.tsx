import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import navbar_styles from './navbar.module.css';

import { useState } from 'react';
import UserDropdown from './dropDown/user/userDropdown';
import CartDropdown from './dropDown/cart/cartDropdown';

interface NavbarProps {
    isLogged: boolean;
    onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLogged, onLogout }) => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/login');
    };

    return (
        <nav className={navbar_styles['navbar']}>
            <div className={navbar_styles['logo-container']}>
                <Link to="/">
                    <img src="/Images/Home/Navbar/logo.png" alt="logo" />
                </Link>
            </div>
            <div className={navbar_styles['links-container']}>
                <ul>
                    <li>
                        <Link to="" className={navbar_styles['navbar-links']}>
                            Our Story
                        </Link>
                    </li>
                    <li>
                        <Link to="" className={navbar_styles['navbar-links']}>
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="" className={navbar_styles['navbar-links']}>
                            Contact
                        </Link>
                    </li>
                </ul>
                {!isLogged ? (
                    <button 
                        className={navbar_styles['sign-in-button']} 
                        onClick={handleSignIn}
                    >
                        SIGN IN
                    </button>
                ) : (
                    <div style={{ position: 'relative', display: 'flex' }}>
                        <UserDropdown onLogout={onLogout}/> {/* user dropdown */}
                        <CartDropdown/> {/* cart dropdown */}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
