import React from "react";
import { Link } from "react-router-dom";
import productStyles from "./productsCard.module.css";
import { getProducts } from "../../../features/database/queries/get/product/getAllProducts";
import { formatNumber } from "../../../features/services/formatNumber";

//card from Material UI
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


export default function ProductCard({setCart, cart}) {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProducts();
      setProduct(data);
    };

    fetchProduct();
  }, []);

  // Función para verificar si un producto está en el carrito
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const handleAddToCart = (product) => {
    if (!isInCart(product.id)) {
      setCart(prevCart => [...prevCart, product]);
    }
  };

  return (
    <div className={productStyles.cardContainer}>

      {/*Product Card*/}
      {product.map((product) => (
          <Card
          className={productStyles.card}
          key={product.id}
          sx={{
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#E0E0E0",
              transition: "all 0.2s linear",
              scale: "1.02",
            },
          }}
        >
          <Link 
            to={`/product/${product.id}`} 
            style={{textDecoration: "none"}}
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

            <CardContent sx={{ padding: "5px 20px", position: "relative" }} >
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
                  marginBottom: "0.5rem",
                }}
              >
                {product.Title}
              </Typography>

              {/*Card Description*/}
              <Typography
                variant="body2"
                className={productStyles["product-description"]}
                sx={{
                  color: "rgb(70, 70, 70)",
                  fontWeight: "400",
                  fontSize: "clamp(0.5rem, 2vw, 0.8rem)",
                }}
              >
                {product.Description}
              </Typography>

              {/*Card Price*/}
              <Typography
                variant="body2"
                className={productStyles["product-price"]}
                sx={{
                  fontSize: "clamp(0.5rem, 2vw, 1.2rem)",
                  color: "black",
                  fontWeight: "600",
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
            onClick={() => handleAddToCart(product)}
            disabled={isInCart(product.id)}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              cursor: "pointer",
              zIndex: "100",
            }}
          >
            {isInCart(product.id) ? "In Cart" : "Add to Cart"}
          </button>
        </Card>
        
      ))}
    </div>
  );
}
