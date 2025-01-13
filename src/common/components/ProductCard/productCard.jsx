import React, { useEffect, useCallback, memo } from "react";
import productStyles from "./productsCard.module.css";

//animations
import AOS from "aos";
import "aos/dist/aos.css"; //AOS styles
import LoadingAnimation from "../animations/loading";

//functions and queries
import { Link } from "react-router-dom";
import { formatNumber } from "../../../features/services/formatPrice"; //format number

//card from Material UI
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import NotFoundAnimation from "../animations/notFound";

// Componente individual de tarjeta memoizado
const SingleProductCard = memo(({ product, isInCart, onAddToCart }) => (
  <Card
    data-aos="flip-up"
    className={productStyles.card}
    key={product.id}
    sx={{
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      "&:hover": {
        backgroundColor: "#E0E0E0",
        scale: "1.02",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
      },
    }}
  >
    <Link
      to={`/product/${product.id}/${product.Title}`}
      style={{ textDecoration: "none" }}
    >
      <CardActionArea disableRipple>
        {/*Card Image*/}
        <CardMedia
          component="img"
          image={product.ImageURL}
          loading="lazy"
          alt={product.Title}
          className={productStyles["product-image"]}
          sx={{ backgroundColor: "#f8f7f7" }}
        />

        <CardContent sx={{ padding: "5px 20px", position: "relative" }}>
          {/*Card Title*/}
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={productStyles["product-title"]}
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              textTransform: "uppercase",
              fontSize: "clamp(0.5rem, 2vw, 1.2rem)",
              color: "black",
              marginBottom: "0.3rem",
            }}
          >
            {product.Title}
          </Typography>

          {/*Card product rating*/}
          <Typography className={productStyles["product-rating"]}>
            <Rating
              value={product.Rating}
              readOnly
              precision={0.5}
              sx={{
                fontSize: "1.3rem",
                marginRight: 1,
              }}
            />
            ({product.Rating})
          </Typography>

          {/*Card Price*/}
          <Typography
            variant="body2"
            className={productStyles["product-price"]}
            sx={{
              fontSize: "clamp(0.8rem, 2vw, 1.4rem)",
              color: "black",
              fontWeight: "800",
              marginTop: "2rem",
            }}
          >
            ${formatNumber(product.Price)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Link>

    {/*Button to add to cart*/}
    <button
      className={`${productStyles["add-to-cart-button"]} ${
        isInCart(product.id) ? productStyles["in-cart"] : ""
      }`}
      onClick={() => onAddToCart(product)}
      disabled={isInCart(product.id)}
    >
      {isInCart(product.id) ? "In Cart" : "Add to Cart"}
    </button>
  </Card>
));

// Componente principal optimizado
export default function ProductCard({ setCart, cart, getProduct_Function }) {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Memoizar la función isInCart
  const isInCart = useCallback(
    (productId) => cart.some((item) => item.id === productId),
    [cart]
  );

  // Memoizar handleAddToCart
  const handleAddToCart = useCallback(
    (product) => {
      if (!isInCart(product.id)) {
        const productToAdd = {
          ...product,
          quantity: 1,
          Price: product.Price,
        };
        setCart((prevCart) => [...prevCart, productToAdd]);
      }
    },
    [isInCart, setCart]
  );

  // Optimizar useEffect para AOS
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  // Optimizar fetch de productos
  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      try {
        const data = await getProduct_Function;
        if (isMounted) {
          setProduct(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [getProduct_Function]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80vw",
        }}
      >
        <LoadingAnimation />
      </div>
    );
  }

  if (!product.length) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <NotFoundAnimation />
        <h1>No products found</h1>
      </div>
    );
  }

  return (
    <div className={productStyles.cardContainer}>
      {product.map((item) => (
        <SingleProductCard
          key={item.id}
          product={item}
          isInCart={isInCart}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
