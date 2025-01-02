import React, { useState } from "react";
import cartDropdown_styles from './cartDropdown.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Quantity from "./components/quantity";
import { Delete } from "@mui/icons-material";

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

                                                  <button className={cartDropdown_styles['remove-product']}>
                                                       <Delete 
                                                            sx={{ 
                                                                 fontSize: '1.1rem', 
                                                                 verticalAlign: 'middle',
                                                                 color: 'white',
                                                                 "&:hover":{
                                                                      color: 'black',
                                                                 }
                                                                 }}
                                                            />
                                                  </button>
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
     )
}

export default CartDropdown;