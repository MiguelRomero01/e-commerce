import React from "react";
import additionalDetailsStyles from "./additionalDetails.module.css";
import { Category, Shield, ThumbUp } from "@mui/icons-material";

interface AdditionalDetailsProps {
  productData: any;
}

const AdditionalDetails = ({ productData }: AdditionalDetailsProps) => {
  const iconsList = [
    { icon: <Category sx={{ color: '#fff', fontSize: 35}}/>},
    { icon: <ThumbUp sx={{ color: '#fff', fontSize: 35}}/>},
    { icon: <Shield sx={{ color: '#fff', fontSize: 35}}/>},
  ]

  return (
    <>
      {/*product details*/}
      {productData.ProductDetails && (
        <div className={additionalDetailsStyles["product-details-container"]}>
          <ul className={additionalDetailsStyles["product-details"]}>
            {productData.ProductDetails.split(".").map(
              (detalle: string, index: number) =>
                detalle.trim() && (
                  <li key={index}>
                    <div
                      className={additionalDetailsStyles["product-detail-icon"]}
                    >
                      {iconsList[index].icon}
                    </div>
                    {detalle.trim()}
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default AdditionalDetails;
