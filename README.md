# AI Image Generator

A modern, responsive React application that generates stunning AI images using OpenAI's DALL-E 3 model. Features an intuitive interface with animated loading bars, rotating placeholder images, and seamless image downloads.

## Demo

### Screen Recording
[Watch Demo Video](src/components/assets/Screen%20Recording%202025-08-06%20at%2015.38.18.mov)

*Note: Click the link above to download and view the demo video*

### Screenshots
![Main Interface](src/components/assets/Screenshot%202025-08-06%20at%2015.31.58.png)

![Generated Image](src/components/assets/Screenshot%202025-08-06%20at%2015.37.44.png)

## Features

- **AI-Powered Image Generation**: Uses OpenAI's DALL-E 3 for high-quality image creation
- **Dynamic Placeholders**: Rotating gallery of AI-generated example images every 40 seconds
- **Animated Loading Bar**: Progressive loading animation that fills up during generation
- **One-Click Download**: Download generated images with timestamp-based filenames
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Secure API Management**: Environment variables for safe API key storage

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dalle-image-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
   ```
   
   **⚠️ Important**: 
   - Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
   - Never commit your `.env` file to version control
   - The `.env` file is already included in `.gitignore`

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Configuration

### API Settings

The application uses **DALL-E 3** with the following configuration:
- **Model**: `dall-e-3`
- **Image Size**: `1024x1024`
- **Number of Images**: 1 per generation
- **Response Format**: URL

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_OPENAI_API_KEY` | Your OpenAI API key | Yes |

## Usage

1. **Enter a description** in the search input field
2. **Click "Generate"** to create your AI image
3. **Watch the progress** with the animated loading bar
4. **Download your image** using the download button
5. **Generate more images** with different prompts

### Example Prompts
- "A surreal landscape with floating islands and waterfalls"
- "A cyberpunk cat wearing neon sunglasses"
- "Abstract art in the style of Van Gogh"
- "A cozy coffee shop in a fantasy forest"


## Features in Detail

### Dynamic Placeholder System
- Displays 9 different AI-generated example images
- Automatically rotates every 40 seconds
- Provides inspiration for users

### Progressive Loading Animation
- 15-second animated progress bar
- Non-linear progression (realistic loading feel)
- Pink gradient matching the app theme

### Smart Download System
- Fetches full-resolution images
- Automatic filename with timestamp
- Error handling for failed downloads
- Only appears when image is generated

### Responsive Design
- Mobile-optimized layout
- Scalable components
- Touch-friendly interface

## Built With

- **React** - Frontend framework
- **OpenAI DALL-E 3** - AI image generation
- **CSS3** - Styling and animations
- **Fetch API** - HTTP requests

## Security Notes

- API keys are stored in environment variables
- `.env` file is excluded from version control
- Client-side API calls (consider backend proxy for production)
