import { CartDropdown_ProductsType } from "../../../models/shop/CartDropdownModel";
import { isInCart } from "./isInCartController";

import { Product } from "../../../models/shop/ProductModel";

export const handleAddToCart = ({product, setCart, cart}: Product) => {
     if (!isInCart({cart, productId: product.id})) {
          const newProduct: CartDropdown_ProductsType = {
               id: product.id,
               Title: product.Title,
               Price: product.Price,
               ImageURL: product.ImageURL,
               quantity: 1
          };
          
          setCart((prevCart) => [...prevCart, newProduct]);
     }
};