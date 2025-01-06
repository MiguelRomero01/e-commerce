import React, { useState, useEffect } from "react";
import Product_detailsStyles from "./ProductDetail.module.css";

//components
import ImageZoom from "../../common/components/zoom/zoomImage";
import Navbar from "../home/components/Navbar";

//services
import { useParams } from "react-router-dom";
import { getProduct } from "../../features/database/queries/get/product/getProduct";
import { Rating } from "@mui/material";
import { formatNumber } from "../../features/services/formatNumber";
import { CartDropdownProducts } from "../../features/services/Cart/CartDropdownProducts";
import { isInCart } from "../../features/services/Cart/isInCart";
import { handleAddToCart } from "../../features/services/Cart/addShoppingCart";
import ProductCard from "../../common/components/ProductCard/productCard";
import { getRelatedProducts } from "../../features/database/queries/get/product/getRelatedProducts";
import { Footer } from "../../common/components/Footer";

// Añade la interfaz para las props
interface ProductDetailProps {
  isLogged: boolean;
  onLogout: () => void;
  cart: CartDropdownProducts[];
  setCart: React.Dispatch<React.SetStateAction<CartDropdownProducts[]>>;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  isLogged,
  onLogout,
  cart,
  setCart,
}) => {
  const { id } = useParams();
  const [productData, setProductData] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(Number(id));
      setProductData(data); // Asigna directamente el producto
    };

    fetchProduct();
  }, [id]); // Incluye `id` como dependencia para evitar advertencias

  if (!productData) {
    return <div>Loading...</div>; // Muestra un mensaje mientras se carga
  }

  return (
    <div>
      <header>
        <Navbar
          isLogged={isLogged}
          onLogout={onLogout}
          cart={cart}
          setCart={setCart}
          theme="dark"
        />
      </header>

      <main className={Product_detailsStyles["productDetails-container"]}>
        <section className={Product_detailsStyles["images-container"]}>
          <div>
            <ImageZoom
              imageSrc={productData.ImageURL}
              altName={productData.Title}
            />
          </div>
        </section>

        <section className={Product_detailsStyles["product-info-container"]}>
          {/*product-title*/}
          <h2 className={Product_detailsStyles["product-title"]}>
            {productData.Title}
          </h2>

          {/*en el futuro poner las estrellas del producto aquí junto con su funcionalidad*/}
          <div id={Product_detailsStyles["product-rating"]}>
            <Rating
              value={productData.Rating}
              readOnly
              sx={{ fontSize: "2rem" }}
              precision={0.5}
            />
            <p>{productData.Rating}</p>
          </div>
          {/*product-description*/}
          <div
            className={Product_detailsStyles["product-description-container"]}
          >
            <h3>Description</h3>
            <p>{productData.Description}</p>
          </div>

          {/*product-price*/}
          <p className={Product_detailsStyles["product-price"]}>
            ${formatNumber(productData.Price)}
            <sup style={{ fontSize: "1rem" }}>COP</sup>
          </p>

          {/*add-to-cart-button*/}
          <button
            className={`${Product_detailsStyles["add-to-cart-button"]} ${
              isInCart({ cart, productId: productData.id })
                ? Product_detailsStyles["in-cart"]
                : ""
            }`}
            onClick={() =>
              handleAddToCart({
                product: productData,
                setCart: setCart,
                cart: cart,
              })
            }
            disabled={isInCart({ cart, productId: productData.id })}
          >
            {isInCart({ cart, productId: productData.id })
              ? "In Cart"
              : "Add to Cart"}
          </button>

          {/*product-details*/}
          {productData.ProductDetails && (
            <ul className={Product_detailsStyles["product-details"]}>
              {productData.ProductDetails.split(".").map(
                (detalle: string, index: number) => (
                  <li key={index}>{detalle.trim()}</li>
                )
              )}
            </ul>
          )}
        </section>
      </main>

      <section className={Product_detailsStyles["recommended-products"]}>
        <h2>Related Products</h2>
        <div
          className={Product_detailsStyles["recommended-products-container"]}
        >
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

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetail;
