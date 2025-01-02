import React, { useState } from "react";
import cartDropdown_styles from './cartDropdown.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Quantity from "./components/quantity";

export type CartDropdownProducts = {
     id: number;
     Title: string;
     Price: number;
     ImageURL: string;
};

type userProducts = {
     Products: CartDropdownProducts[];
}

const CartDropdown: React.FC<userProducts> = ({Products}) => {
     const [showDropdownCart, setShowDropdownCart] = useState(false);
     const [quantity, setQuantity] = useState(1);
     
     return (
          <div className={cartDropdown_styles.container}>
               <div className={cartDropdown_styles.cartIcon}>
                    <ShoppingCartIcon 
                         onClick={() => setShowDropdownCart(!showDropdownCart)}
                         sx={{
                              color: 'white',
                              fontSize: '2rem', 
                              marginRight:'20px',
                              transition: 'all 0.3s ease',
                              '&:hover':{
                                   scale: '1.1',
                                   cursor:'pointer'
                              }
                         }}
                    />
                    {Products.length > 0 && (
                         <span className={cartDropdown_styles.badge}>{Products.length}</span>
                    )}
               </div>

               {showDropdownCart && (
                    <div className={cartDropdown_styles['dropdown-menu']}>
                         {Products.length === 0 ? (
                              <p className={cartDropdown_styles.emptyCart}>No products in cart</p>
                         ) : (
                              <>
                                   <ul className={cartDropdown_styles.cartList}>
                                        {Products.map((productCart) => (
                                             
                                             <li key={productCart.id} className={cartDropdown_styles.cartItem}>
                                                  <div className={cartDropdown_styles.productImage}>
                                                       <img src={productCart.ImageURL} alt={productCart.Title} />
                                                  </div>
                                                  <div className={cartDropdown_styles.productInfo}>
                                                       <h3>{productCart.Title}</h3>
                                                       <p className={cartDropdown_styles.price}>${productCart.Price * quantity}</p>
                                                       <Quantity quantity={quantity} setQuantity={setQuantity}/>
                                                  </div>
                                             </li>
                                             
                                        ))
                                   
                                   }
                                   </ul>
                                   <div className={cartDropdown_styles.cartFooter}>
                                        <button className={cartDropdown_styles.checkoutButton}>
                                             Checkout
                                        </button>
                                   </div>
                              </>
                         )}
                    </div>
               )} 
          </div>
     );
};

export default CartDropdown;