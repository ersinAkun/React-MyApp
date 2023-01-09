import React from "react";
import "./gallery.scss";
import images from "./images.json";


const Gallery = () => {
  return (

    <div className="gallery">

      {images.map((img, i) => (
        <div key={i}>
          <img src={require(`../../assets/img/${img.name}`)} alt="" />
        </div>
      ))}
      
    </div>
  );
};
export default Gallery;