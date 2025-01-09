import React from "react";
import recommendStyles from "./recommendedProducts.module.css";
import TitleWithUnderline from "../../../../common/components/Titles/TitleUnderline";
import ProductCard from "../../../../common/components/ProductCard";
import { getRelatedProducts } from "../../../../features/database/queries/get/product/getRelatedProducts";
import { CartDropdown_ProductsType } from "../../../../features/services/Cart/CartDropdownProducts";

interface RecommendedProductsProps {
     setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
     cart: CartDropdown_ProductsType[];
     productData: any;
}

const RecommendedProducts = ({setCart, cart, productData}: RecommendedProductsProps) => {
     return (
          <section className={recommendStyles["recommended-products"]}>
               <TitleWithUnderline title="Related Products" level={2} />
               <div className={recommendStyles["recommended-products-container"]}>
                    <ProductCard
                         setCart={setCart}
                         cart={cart}
                         getProduct_Function={getRelatedProducts(
                         productData.Type,
                         productData.id
                         )}
                    />
               </div>
          </section>
     );
};

export default RecommendedProducts;
