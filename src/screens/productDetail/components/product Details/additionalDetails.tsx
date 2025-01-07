import React from "react";
import additionalDetailsStyles from "./additionalDetails.module.css";
import { GitHub } from "@mui/icons-material";

interface AdditionalDetailsProps {
  productData: any;
}

const AdditionalDetails = ({ productData }: AdditionalDetailsProps) => {
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
                      <GitHub />
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
