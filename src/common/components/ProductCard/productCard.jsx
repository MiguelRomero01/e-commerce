import React from "react";
import productStyles from "./productsCard.module.css";
import { getImages } from "../../../features/database/queries/get/images/getImages";

//card from Material UI
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductCard() {
  const [imagenes, setImagenes] = React.useState([]);

  React.useEffect(() => {
    const fetchImages = async () => {
      const data = await getImages();
      setImagenes(data);
    };

    fetchImages();
  }, []);

  const handleAddToCart = (imagen) => {
    console.log("Añadido al carrito:", imagen);
  };

  return (
    <div className={productStyles.cardContainer}>
      {imagenes.map((imagen) => (
        <Card
          key={imagen.ImageURL}
          className={productStyles.card}
          sx={{
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#E0E0E0",
              transition: "all 0.2s linear",
              scale: "1.02",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={imagen.ImageURL}
              loading="lazy"
              alt={imagen.Title}
              className={productStyles["product-image"]}
              sx={{ backgroundColor: "#f8f7f7" }}
            />
            <CardContent sx={{ padding: "5px 20px", position: "relative" }}>
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
                {imagen.Title}
              </Typography>
              <Typography
                variant="body2"
                className={productStyles["product-description"]}
                sx={{
                  color: "rgb(70, 70, 70)",
                  fontWeight: "200",
                  fontSize: "clamp(0.5rem, 2vw, 0.8rem)",
                }}
              >
                {imagen.Description}
              </Typography>
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
                ${imagen.Price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <button
            className={`${productStyles["add-to-cart-button"]}`}
            onClick={() => handleAddToCart(imagen)}
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
            }}
          >
            Añadir al carrito
          </button>
        </Card>
      ))}
    </div>
  );
}
