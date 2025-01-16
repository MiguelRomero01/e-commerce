import React, { useState, useEffect } from "react";
import ProductDetailsPageStyles from "./ProductDetailsPage.module.css";

//components
import ImageZoom from "../../common/components/zoom/zoomImage";
import Navbar from "../home/components/Navbar/Navbar";

//services
import { useParams } from "react-router-dom";
import { getProduct } from "../../features/database/queries/get/product/getProduct";
import { Rating } from "@mui/material";
import { formatNumber } from "../../features/services/formatPrice";
import { CartDropdown_ProductsType } from "../../features/services/Cart/CartDropdownProducts";
import { isInCart } from "../../features/services/Cart/isInCart";
import { handleAddToCart } from "../../features/services/Cart/addShoppingCart";
import { Footer } from "../../common/components/Footer";
import { ShoppingBag } from "@mui/icons-material";
import { RecommendedProducts } from "./components/recommendedProducts";
import { AdditionalDetails } from "./components/additional details";
import Return from "../../common/components/ReturnTopage/returnBack";

// Añade la interfaz para las props
interface ProductDetailProps {
  isLogged: boolean;
  onLogout: () => void;
  cart: CartDropdown_ProductsType[];
  setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
}

const ProductDetailsPage: React.FC<ProductDetailProps> = ({
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

      <Return />
      <main className={ProductDetailsPageStyles["productDetails-container"]}>
        <div className={ProductDetailsPageStyles["product-main-content"]}>
          <section className={ProductDetailsPageStyles["images-container"]}>
            <ImageZoom
              imageSrc={productData.ImageURL}
              altName={productData.Title}
            />
          </section>

          <section
            className={ProductDetailsPageStyles["product-info-container"]}
          >
            <div className={ProductDetailsPageStyles["product-header"]}>
              <h2 className={ProductDetailsPageStyles["product-title"]}>
                {productData.Title}
              </h2>

              <div className={ProductDetailsPageStyles["product-rating"]}>
                <Rating
                  value={productData.Rating}
                  readOnly
                  sx={{ fontSize: 25 }}
                  precision={0.5}
                />
              </div>
            </div>
            <p className={ProductDetailsPageStyles["product-price"]}>
              ${formatNumber(productData.Price)}
              <sup style={{ fontSize: "1rem" }}>COP</sup>
            </p>
            <div
              className={
                ProductDetailsPageStyles["product-description-container"]
              }
            >
              <h3>Description</h3>
              <p>{productData.Description}</p>
            </div>

            {/*add to cart*/}
            <div>
              <button
                className={`${ProductDetailsPageStyles["add-to-cart-button"]} ${
                  isInCart({ cart, productId: productData.id })
                    ? ProductDetailsPageStyles["in-cart"]
                    : ""
                }`}
                onClick={() => {
                  const productToAdd = {
                    ...productData,
                    quantity: 1,
                    Price: parseFloat(productData.Price)
                  };
                  console.log("Producto a añadir desde DetailPage:", productToAdd);
                  handleAddToCart({
                    product: productToAdd,
                    setCart: setCart,
                    cart: cart,
                  });
                }}
                disabled={isInCart({ cart, productId: productData.id })}
              >
                <ShoppingBag
                  sx={{
                    marginRight: "0.5rem",
                    fontSize: 25,
                    verticalAlign: "middle",
                  }}
                />
                {isInCart({ cart, productId: productData.id })
                  ? "in Cart"
                  : "add to Cart"}
              </button>
            </div>
          </section>

          <AdditionalDetails productData={productData} />
        </div>
      </main>

      {/*recommended-products*/}
      <RecommendedProducts
        setCart={setCart}
        cart={cart}
        productData={productData}
      />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetailsPage;
