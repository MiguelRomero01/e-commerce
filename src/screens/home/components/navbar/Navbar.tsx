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
}

const Navbar: React.FC<NavbarProps> = ({ isLogged, onLogout, cart, setCart }) => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/login');
    };

    return (
        <nav className={navbar_styles['navbar']}>
            <div className={navbar_styles['logo-container']}>
                <img src="/Images/Home/Navbar/logo.png" alt="logo" />
            </div>
            <div className={navbar_styles['links-container']}>
                <ul>
                    <li>
                        <Link to="/" className={navbar_styles['navbar-links']}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="" className={navbar_styles['navbar-links']}>
                            About
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
            </div>
            <div className={navbar_styles['auth-container']}>
                {!isLogged ? (
                    <button 
                        className={navbar_styles['sign-in-button']} 
                        onClick={handleSignIn}
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
