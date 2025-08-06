import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../assets/default_image.svg"; // Assuming you have a default image in this path

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      alert("Please enter a description for the image.");
      return 0;
    }
    const response = await fetch("https://api.openai.com/v1/images/generations")
  }

  return (
    <div className="ai image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={image_url === "/" ? default_image : image_url} alt=""></img>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe your image..."
        />
        <div className="generate-btn">Generate</div>
        {/* <button className="generate-btn">Generate</button> */}
      </div>
    </div>
  );
};

export default ImageGenerator;
