import React from "react";
import "./ImageGenerator.css"; 
import default_image from "../assets/default_image.svg"; // Assuming you have a default image in this path

const ImageGenerator = () => {
  return (
    <div className="ai image-generator">
        <div className="header">AI Image <span>Generator</span></div>
        <div className="img-loading">
          <div className="image"><img src={default_image} alt=""></img></div>
        </div>

        <div className="search-box">
          <input type="text" className="search-input" placeholder="Describe your image..." />
          <div className="generate-btn">Generate</div>
            {/* <button className="generate-btn">Generate</button> */}
        </div>
      </div>
  )
};

export default ImageGenerator;
