import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../../features/services/formatPrice";
import { Rating } from "@mui/material";

interface ProductSearchProps {
  product: any;
}

const ProductSearch = ({ product }: ProductSearchProps) => {
  return (
     <Link to={`/product/${product.id}/${product.Title}`} style={{ textDecoration: "none" }}>
    <div style={{ 
      display: "flex", 
      alignItems: "center",
      padding: "5px 0"
    }}>
      
      <img
        src={product.ImageURL}
        alt={product.Title}
        style={{ 
          width: "10vmin",
          height: "10vmin",
          objectFit: "cover",
          borderRadius: "8px",
          marginRight: "15px",
        }}
      />
      <div style={{ flex: 1 }}>
        <h4 style={{ 
          margin: 0, 
          marginBottom: "4px",
          fontSize: "1rem",
          color: "#1a202c",
          fontFamily: "Poppins",
          fontWeight: "700",
          textTransform: "uppercase"
        }}>
          {product.Title}
        </h4>
        <Rating 
          defaultValue={product.Rating} 
          max={5} 
          sx={{ 
            fontSize: "1.1em",
            marginBottom: "4px"
          }}
          readOnly
        />
        <p style={{ 
          margin: 0, 
          fontSize: "0.9rem",
          color: "#2563eb",
          fontWeight: "600"
        }}>
          ${formatNumber(product.Price)}
        </p>
      </div>
    </div>
      </Link>
  );
};

export default ProductSearch;
