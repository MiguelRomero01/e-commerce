import React from 'react';
import navbar_styles from './navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <nav className={navbar_styles['navbar']}>
            <div className={navbar_styles['logo-container']}>
                <Link to={'/'}><img src='/Images/Home/Navbar/logo.png' alt='logo' /></Link>
            </div>
            <div className={navbar_styles['links-container']}>
                <ul>
                    <li><Link to={''} className={navbar_styles['navbar-links']}>Our Story</Link></li>
                    <li><Link to={''} className={navbar_styles['navbar-links']}>Shop</Link></li>
                    <li><Link to={''} className={navbar_styles['navbar-links']}>Contact</Link></li>
                </ul>
                <Link to={'/login'}><button className={navbar_styles['sign-in-button']}>SIGN IN</button></Link>
            </div>
        </nav>
    )
}
