import React, { useRef, useState, useEffect } from "react";
import "./ImageGenerator.css";

// Import all images from ai-images folder
import image1 from "../assets/ai-images/ChatGPT Image Aug 6, 2025, 01_44_39 PM.png";
import image2 from "../assets/ai-images/ChatGPT Image Aug 6, 2025, 01_45_10 PM.png";
import image3 from "../assets/ai-images/ChatGPT Image Aug 6, 2025, 01_50_53 PM.png";
import image4 from "../assets/ai-images/ChatGPT Image Aug 6, 2025, 01_53_48 PM.png";
import image5 from "../assets/ai-images/ChatGPT Image Aug 6, 2025, 02_17_13 PM.png";
import image6 from "../assets/ai-images/ChatGPT Image Aug 6, 2025, 02_19_14 PM.png";
import image7 from "../assets/ai-images/ChatGPT Image Aug 6, 2025, 02_22_11 PM.png";
import image8 from "../assets/ai-images/ChatGPT Image Aug 6, 2025, 02_25_27 PM.png";
import image9 from "../assets/ai-images/ChatGPT Image Aug 6, 2025, 02_34_04 PM.png";

// Array of placeholder images
const placeholderImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false);
  const [loadingKey, setLoadingKey] = useState(0); // Key to restart animation
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0); // Index for current placeholder image
  let inputRef = useRef(null);

  // Effect to change placeholder image every 40 seconds
  useEffect(() => {
    const getRandomIndex = () => Math.floor(Math.random() * placeholderImages.length);
    
    // Set initial random image
    setCurrentPlaceholder(getRandomIndex());
    
    // Change image every 40 seconds
    const interval = setInterval(() => {
      setCurrentPlaceholder(getRandomIndex());
    }, 40000); // 40 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to download the generated image
  const downloadImage = async () => {
    if (image_url === "/") {
      alert("No image to download. Please generate an image first.");
      return;
    }

    try {
      const response = await fetch(image_url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `ai-generated-image-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the object URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Failed to download image. Please try again.");
    }
  };

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

    setLoading(true); // Start loading
    setLoadingKey(prev => prev + 1); // Reset animation by changing key

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "dall-e-3",
            prompt: inputRef.current.value,
            n: 1,
            size: "1024x1024",
            response_format: "url",
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        
        if (response.status === 401) {
          throw new Error("Invalid API key. Please check your OpenAI API key.");
        } else if (response.status === 429) {
          throw new Error("Rate limit exceeded. Please try again later.");
        } else if (response.status === 400) {
          throw new Error(`Bad request: ${errorData.error?.message || 'Invalid request format'}`);
        } else {
          throw new Error(`API request failed with status ${response.status}`);
        }
      }

      const data = await response.json();
      console.log("API Response:", data);
      
      // Check if data structure is correct
      if (data && data.data && data.data.length > 0 && data.data[0].url) {
        setImage_url(data.data[0].url);
      } else {
        console.error("Unexpected API response structure:", data);
        throw new Error("No image URL received from API");
      }
      
    } catch (error) {
      console.error("Error generating image:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <div className="ai image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img 
            src={image_url === "/" ? placeholderImages[currentPlaceholder] : image_url} 
            alt="AI Generated"
          />
        </div>
        
        {/* Download button - only show when there's a generated image */}
        {image_url !== "/" && (
          <button className="download-btn" onClick={downloadImage}>
            {/* <span className="download-icon">⬇️</span> */}
            Download Image
          </button>
        )}
        
        {image_url === "/" && (
          <button className="download-btn" disabled>
            {/* <span className="download-icon">⬇️</span> */}
            Generate Image To Download
          </button>
        )}
    
        
        {loading && (
          <div className="loading">
            <div className="loading-bar" key={loadingKey}></div>
            <div className="loading-text">Loading...</div>
          </div>
        )}
      </div>

      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe your image..."
        />
        <div
          className="generate-btn"
          onClick={() => {
            imageGenerator();
          }}
        >
          Generate
        </div>
        {/* <button className="generate-btn">Generate</button> */}
      </div>
    </div>
  );
};

export default ImageGenerator;
