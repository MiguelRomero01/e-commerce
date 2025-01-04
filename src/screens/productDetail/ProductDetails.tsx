import React, { useState, useEffect } from "react";
import Product_detailsStyles from "./ProductDetail.module.css";

import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../features/database/queries/get/product/getProduct";
import ImageZoom from "../../common/components/zoom/zoomImage";
import { Rating } from "@mui/material";

const ProductDetail: React.FC = () => {
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
        <h1 className={Product_detailsStyles["product-title"]}>
          {productData.Title}
        </h1>

        {/*en el futuro poner las estrellas del producto aquí*/}
          <Rating defaultValue={2} max={5} />
        {/*product-description*/}
        <p className={Product_detailsStyles["product-description"]}>
          {productData.Description}
        </p>

        {/*product-price*/}
        <p className={Product_detailsStyles["product-price"]}>
          {productData.Price}
        </p>

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
  );
};

export default ProductDetail;
