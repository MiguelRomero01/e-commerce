import React from "react";
import { getImages } from "../../features/database/queries/get/images/getImages";
import { GetTitle } from "../../features/database/queries/get/images/info/getTitle";

export const ImageGallery = () => {
  const [imagenes, setImagenes] = React.useState([]);
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    const fetchImages = async () => {
      const data = await getImages();

      setImagenes(data);
    };

    fetchImages();
  }, []);

  return (
    <div>
      {imagenes.map((img, index) => (
        <img key={index} src={img.ImageURL} alt="Imagen subida" />
        
      ))}
    </div>
  );
};