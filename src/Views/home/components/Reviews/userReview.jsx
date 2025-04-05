import React from "react";
import userReviewStyles from "./userReview.module.css";

//import components material ui
import {
  Card,
  Avatar,
  Typography,
  Box,
  Rating,
  IconButton,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

//import components slick carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Tarjeta de reseña individual
const ReviewCard = ({ name, photo, rating, review, color }) => (
  <Card
    style={{
      display: "flex",
      padding: "4% 10% 4% 0",
      backgroundColor: "#f3f0f0",
      borderRadius: "15px",
      boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.75)",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: { xs: "center", sm: "flex-start" },
    }}
  >
    <Avatar
      src={photo || ""}
      alt={name}
      sx={{
        marginRight: { xs: 0, sm: 1, md: 2 },
        marginLeft: "1%",
        marginBottom: { xs: 2, sm: 0 },
        width: { xs: 50, sm: 50 },
        height: { xs: 50, sm: 50 },
        backgroundColor: color,
      }}
    >
      {!photo && name.charAt(0)}
    </Avatar>
    <Box
      sx={{
        width: "100%",
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
        }}
      >
        {name}
      </Typography>
      <Rating
        value={rating}
        readOnly
        sx={{
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      />
      <FormatQuoteIcon
        sx={{
          display: "block",
          margin: { xs: "0 auto", sm: "0 auto" },
          fontSize: { xs: 30, sm: 40, md: 50 },
          color: "#4A90E7",
        }}
      />
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: 14, sm: 16, md: 17 },
          fontStyle: "italic",
          marginTop: 2,
          fontFamily: "Poppins",
        }}
      >
        {review}
      </Typography>
    </Box>
  </Card>
);

// Botones personalizados para el carrusel
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className={userReviewStyles["next-arrow"]}
      style={{
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        backgroundColor: "#fff",
        border: "1px solid #868686",
        color: "#000",
        zIndex: 1,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: -10,
        transform: "translateY(-50%)",
        backgroundColor: "#fff",
        border: "1px solid #868686",
        color: "#000",
        zIndex: 1,
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};

// Carrusel con tarjetas
const ReviewCarousel = () => {
  const reviews = [
    {
      name: "Alejandro G.",
      photo: "",
      rating: 5,
      color: getRandomColor(),
      review:
        "Fashion is, without a doubt, my new favorite store for buying caps. From the moment I entered the website, I noticed it was designed with the customer in mind. The variety of caps they offer is impressive, ranging from classic styles to modern and unique designs.",
    },
    {
      name: "Maria López",
      photo: "",
      rating: 4,
      color: getRandomColor(),
      review:
        "I loved my shopping experience at Fashion. They have an incredible selection of caps that you don’t easily find in other stores, and the prices are quite competitive. I chose a cap with an exclusive design that I absolutely loved, and the quality exceeded my expectations",
    },
    {
      name: "Laura Martínez",
      photo: "",
      rating: 4.5,
      color: getRandomColor(),
      review:
        "Fashion is my go-to shop for trendy accessories. I recently purchased a pair of sunglasses, and they exceeded my expectations. The frames are super stylish, lightweight, and durable, perfect for daily wear. What stood out to me the most was their customer service; they promptly answered all my questions and even helped me pick the best model for my face shape.",
    },
    {
      name: "Carlos Sánchez",
      photo: "",
      rating: 5,
      color: getRandomColor(),
      review:
        "Fashion is the perfect place to find the ideal cap. I’m a cap enthusiast and always look for designs that stand out, and here I found exactly what I was looking for. I bought a limited-edition cap, and you can tell the care they put into every detail, from the design to the quality of the materials.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "0 auto",
        padding: { xs: 2, sm: 3 },
        "& .slick-slide": {
          opacity: 0.5,
          transform: "scale(0.8)",
          transition: "all 0.3s ease",
        },
        "& .slick-center": {
          opacity: 1,
          transform: "scale(1)",
        },
        "& .slick-track": {
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Slider>
    </Box>
  );
};

export default function App() {
  return <ReviewCarousel />;
}
