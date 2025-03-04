import React, { useState, useRef } from "react";
import './imageZoom.css'

const ImageZoom = ({ imageSrc, altName }) => {
  const [zoomStyle, setZoomStyle] = useState(null);
  const zoomContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { top, left, width, height } =
      e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calcular posición del zoom
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${imageSrc})`,
      backgroundPosition: `${xPercent}% ${yPercent}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle(null); // Oculta el zoom
  };

  return (
    <div className="image-zoom-container">
      <img
        src={imageSrc}
        alt={altName}
        className="image-base"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      {zoomStyle && (
        <div
          className="zoom-view"
          ref={zoomContainerRef}
          style={zoomStyle}
        />
      )}
    </div>
  );
};

export default ImageZoom;
