import React, { useState } from "react";
import cartDropdown_styles from './cartDropdown.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartDropdown = () => {
     const [showDropdownCart, setShowDropdownCart] = useState(false);
     return (
          <div>
               <ShoppingCartIcon 
                    onClick={() => setShowDropdownCart(!showDropdownCart)}
                    sx={{
                         fontSize: '2rem', 
                         marginRight:'20px',
                         transition: 'all 0.3s ease',
                         '&:hover':{
                              scale: '1.1',
                              cursor:'pointer'
                         }
                    }}
               />

               {showDropdownCart && (
                    <div className={cartDropdown_styles['dropdown-menu']}>
                         <ul>
                              <li>Cart</li>
                              <li>Checkout</li>
                         </ul>
                    </div>
               )} 
          </div>
     )
}

export default CartDropdown;