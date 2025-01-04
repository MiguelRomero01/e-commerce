import React from "react";
import userReviewStyles from './userReview.module.css'

//import components material ui
import { Card, Avatar, Typography, Box, Rating, IconButton } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

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
  <Card style={{ 
    display: "flex", 
    padding: { xs: 2, sm: 3, md: 5 },
    backgroundColor: 'transparent', 
    border: 'none', 
    boxShadow: 'none',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'center', sm: 'flex-start' }
  }}>
    <Avatar
      src={photo || ""}
      alt={name}
      sx={{
        marginRight: { xs: 0, sm: 3, md: 4 },
        marginBottom: { xs: 2, sm: 0 },
        width: { xs: 60, sm: 50 },
        height: { xs: 60, sm: 50 },
        backgroundColor: color,
      }}
    >
      {!photo && name.charAt(0)}
    </Avatar>
    <Box sx={{
      width: '100%',
      textAlign: { xs: 'center', sm: 'left' }
    }}>
      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: "bold",
          fontSize: { xs: '1.2rem', sm: '1.5rem' }
        }}
      >
        {name}
      </Typography>
      <Rating 
        value={rating} 
        readOnly 
        sx={{
          justifyContent: { xs: 'center', sm: 'flex-start' }
        }}
      />
      <FormatQuoteIcon sx={{
        display: 'block',
        margin: { xs: '0 auto', sm: '0' },
        fontSize: { xs: 40, sm: 50, md: 60 },
        color: '#4A90E7'
      }}/>
      <Typography 
        variant="body1" 
        sx={{ 
          fontSize: { xs: 14, sm: 16, md: 17 },
          fontStyle: "italic",
          marginTop: 2,
          fontFamily: 'Poppins'
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
      className={userReviewStyles['next-arrow']}
      style={{
        position: "absolute",
        top: "50%",
        right: -55,
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
      clas
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
      review: "Fashion is, without a doubt, my new favorite store for buying caps. From the moment I entered the website, I noticed it was designed with the customer in mind. The variety of caps they offer is impressive, ranging from classic styles to modern and unique designs. I bought an urban-style cap, and it arrived in perfect condition, with impeccable packaging. Also, the shipping time was fast, even quicker than I expected. The customer service team is another highlight; they answered all my questions with kindness and efficiency. I will definitely shop here again and recommend Fashion to all my friends." 
    },
    { 
      name: "Maria López", 
      photo: "", 
      rating: 4, 
      color: getRandomColor(),
      review: "I loved my shopping experience at Fashion. They have an incredible selection of caps that you don’t easily find in other stores, and the prices are quite competitive. I chose a cap with an exclusive design that I absolutely loved, and the quality exceeded my expectations: durable materials and luxurious finishes. However, the only reason I didn’t give them five stars is that it took a little longer than expected to process my order. Despite this, the cap arrived in excellent condition, and I will definitely shop at Fashion again. I hope they improve processing times because their catalog is amazing." 
    },
    { 
      name: "Carlos Sánchez", 
      photo: "", 
      rating: 5, 
      color: getRandomColor(),
      review: "Fashion is the perfect place to find the ideal cap. I’m a cap enthusiast and always look for designs that stand out, and here I found exactly what I was looking for. I bought a limited-edition cap, and you can tell the care they put into every detail, from the design to the quality of the materials. I was pleasantly surprised that the store offers free shipping for orders over a certain amount, which is a great bonus. I also loved that they have constant promotions, making it easier to get amazing products without overspending. I’ll definitely keep shopping at Fashion and recommend it to all my friends!" 
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600, // mobile devices
        settings: {
          arrows: false, // hide arrows on mobile
          dots: true
        }
      }
    ]
  };

  return (
    <Box sx={{ 
      maxWidth: { xs: '100%', sm: 500, md: 600, lg: 700 },
      margin: "0 auto",
      padding: { xs: 2, sm: 3 }
    }}>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Slider>
    </Box>
  );
};

export default function App() {
     return (
          <ReviewCarousel />
     );
}
