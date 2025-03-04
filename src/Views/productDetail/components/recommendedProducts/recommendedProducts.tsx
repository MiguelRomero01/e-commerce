import React from "react";
import recommendStyles from "./recommendedProducts.module.css";
import TitleWithUnderline from "../../../common/components/Titles/TitleUnderline";
import ProductCard from "../../../common/components/ProductCard";
import { getRelatedProducts } from "../../../../controllers/database/queries/get/product/getRelatedProductsController";

//model
import { RecommendedProductsProps } from "../../../../models/productDetail/RecommendProdModel";


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
