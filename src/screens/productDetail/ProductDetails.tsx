import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../features/database/queries/get/product/getProduct";

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
          <article>
               <button onClick={() => navigate(-1)}>Back</button>
               <h1>{productData.Title}</h1>
               <p>{productData.Description}</p>
               <p>{productData.Price}</p>
               <img src={productData.ImageURL} alt={productData.Title} />
          </article>
     );
};

export default ProductDetail;
