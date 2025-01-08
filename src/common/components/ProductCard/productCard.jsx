import React from "react";
import productStyles from "./productsCard.module.css";

//functions and queries
import { Link } from "react-router-dom";
import { formatNumber } from "../../../features/services/formatNumber"; //format number

//card from Material UI
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export default function ProductCard({ setCart, cart, getProduct_Function }) {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct_Function;
      setProduct(data);
    };

    fetchProduct();
  }, [getProduct_Function]);

  // Función para verificar si un producto está en el carrito
  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    if (!isInCart(product.id)) {
      // Aseguramos que el precio sea un número
      const productToAdd = {
        ...product,
        quantity: 1,
        Price: product.Price
      };
      setCart((prevCart) => [...prevCart, productToAdd]);
    }
  };

  return (
    <>
      {product.length > 0 ? (
        <div className={productStyles.cardContainer}>
          {/*Product Card*/}
          {product.map((product) => (
            <Card
              className={productStyles.card}
              key={product.id}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "#E0E0E0",
                  transition: "all 0.2s linear",
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

                  <CardContent
                    sx={{ padding: "5px 20px", position: "relative" }}
                  >
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
                onClick={() => handleAddToCart(product)}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? "In Cart" : "Add to Cart"}
              </button>
            </Card>
          ))}
        </div>
      ) : (
        <h1>{product.message}</h1>
      )}
    </>
  );
}
