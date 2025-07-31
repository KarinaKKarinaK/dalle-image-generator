import React from "react";
import "./ImageGenerator.css"; 

const ImageGenerator = () => {
  return (
    <div className="ai image-generator">
        <div className="header">AI Image <span>generator</span></div>
        <div className="img-loading">
          <div className="image"></div>
        </div>
    </div>
  )
};

export default ImageGenerator;
