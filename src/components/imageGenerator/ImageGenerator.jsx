import React from "react";
import "./ImageGenerator.css"; 
import default_image from "../../../assets/default_image.svg"; // Assuming you have a default image in this path

const ImageGenerator = () => {
  return (
    <div className="ai image-generator">
        <div className="header">AI Image <span>generator</span></div>
        <div className="img-loading">
          <div className="image"><img src={default_image} alt=""></img></div>
        </div>
    </div>
  )
};

export default ImageGenerator;
