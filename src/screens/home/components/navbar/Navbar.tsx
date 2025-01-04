import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import navbar_styles from './navbar.module.css';

import UserDropdown from './dropDown/user/userDropdown';
import CartDropdown from './dropDown/cart/cartDropdown';
import { CartDropdownProducts } from './dropDown/cart/cartDropdown';

interface NavbarProps {
    isLogged: boolean;
    onLogout: () => void;
    cart: CartDropdownProducts[];
    setCart: React.Dispatch<React.SetStateAction<CartDropdownProducts[]>>;
    theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ isLogged, onLogout, cart, setCart, theme }) => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/login');
    };

    return (
        <nav className={navbar_styles['navbar']} >
            <div className={navbar_styles['logo-container']}>
                {theme === 'light' ? <img src="/Images/Navbar/logo.png" alt="logo" /> : <img src="/Images/Navbar/logoDark.png" alt="logo" />}
            </div>
            <div className={navbar_styles['links-container']}>
                <ul>
                    <li>
                        <Link to="/" className={navbar_styles['navbar-links']} style={{color: theme === 'light' ? 'white' : 'black'}}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="" className={navbar_styles['navbar-links']} style={{color: theme === 'light' ? 'white' : 'black'}}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="" className={navbar_styles['navbar-links']} style={{color: theme === 'light' ? 'white' : 'black'}}>
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="" className={navbar_styles['navbar-links']} style={{color: theme === 'light' ? 'white' : 'black'}}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={navbar_styles['auth-container']}>
                {!isLogged ? (
                    <button 
                        className={navbar_styles['sign-in-button']} 
                        onClick={handleSignIn}
                        style={{
                            color: theme === 'light' ? 'black' : 'white',
                            backgroundColor: theme === 'light' ? 'white' : 'black',
                        }}
                    >
                        SIGN IN
                    </button>
                ) : (
                    <div style={{ position: 'relative', display: 'flex', marginBottom: '-1vh'}}>
                        <UserDropdown onLogout={onLogout}/>
                        <CartDropdown Products={cart || []} setCart={setCart}/>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
