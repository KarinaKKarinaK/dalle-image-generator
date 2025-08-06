import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../assets/default_image.svg"; // Assuming you have a default image in this path
 // Adjust the path as necessary

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      alert("Please enter a description for the image.");
      return;
    }

    // Check if API key is available
    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      alert("OpenAI API key is not configured. Please check your .env file.");
      return;
    }

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            prompt: inputRef.current.value,
            n: 1,
            size: "512x512"
          }),
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Invalid API key. Please check your OpenAI API key in the .env file.");
        } else if (response.status === 429) {
          throw new Error("Rate limit exceeded. Please try again later.");
        } else {
          throw new Error(`API request failed with status ${response.status}`);
        }
      }

      const data = await response.json();
      console.log(data);
      
      // Set the generated image URL
      if (data.data && data.data[0] && data.data[0].url) {
        setImage_url(data.data[0].url);
      } else {
        throw new Error("No image URL received from API");
      }
      
    } catch (error) {
      console.error("Error generating image:", error);
      alert(`Error: ${error.message}`);
    }
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
        <div className="generate-btn" onClick={()=>{imageGenerator()}}>Generate</div>
        {/* <button className="generate-btn">Generate</button> */}
      </div>
    </div>
  );
};

export default ImageGenerator;
