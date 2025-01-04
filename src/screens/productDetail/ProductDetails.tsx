import React, { useState, useEffect } from "react";
import Product_detailsStyles from "./ProductDetail.module.css";

import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../features/database/queries/get/product/getProduct";
import ImageZoom from "../../common/components/zoom/zoomImage";
import { Rating } from "@mui/material";
import { formatNumber } from "../../features/services/formatNumber";
import Navbar from "../home/components/Navbar";
import { CartDropdownProducts } from "../home/components/Navbar/dropDown/cart/cartDropdown";

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
  const navigate = useNavigate();
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

          <button className={Product_detailsStyles["product-buy-button"]}>
            Add to cart
          </button>

          {/*product-details*/}
          {productData.ProductDetails && (
            <ul className={Product_detailsStyles["product-details"]}>
              {productData.ProductDetails.split(",").map(
                (detalle: string, index: number) => (
                  <li key={index}>{detalle.trim()}</li>
                )
              )}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
