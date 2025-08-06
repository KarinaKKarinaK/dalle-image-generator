# AI Image Generator 🎨

A modern, responsive React application that generates stunning AI images using OpenAI's DALL-E 3 model. Features an intuitive interface with animated loading bars, rotating placeholder images, and seamless image downloads.

## 📱 Demo

### Screen Recording
![App Demo](src/components/assets/Screen%20Recording%202025-08-06%20at%2015.38.18.mov)

### Screenshots
![Main Interface](src/components/assets/Screenshot%202025-08-06%20at%2015.31.58.png)

![Generated Image](src/components/assets/Screenshot%202025-08-06%20at%2015.37.44.png)

## ✨ Features

- **🤖 AI-Powered Image Generation**: Uses OpenAI's DALL-E 3 for high-quality image creation
- **🔄 Dynamic Placeholders**: Rotating gallery of AI-generated example images every 40 seconds
- **⏳ Animated Loading Bar**: Progressive loading animation that fills up during generation
- **💾 One-Click Download**: Download generated images with timestamp-based filenames
- **📱 Responsive Design**: Optimized for both desktop and mobile devices
- **🎨 Modern UI**: Clean, professional interface with smooth animations
- **🔒 Secure API Management**: Environment variables for safe API key storage

## 🚀 Quick Start

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

## 🔧 Configuration

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

## 🎯 Usage

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

## 📁 Project Structure

```
dalle-image-generator/
├── public/
├── src/
│   ├── components/
│   │   ├── assets/
│   │   │   ├── ai-images/          # Placeholder image gallery
│   │   │   ├── Screen Recording... # Demo video
│   │   │   └── Screenshot...       # App screenshots
│   │   └── imageGenerator/
│   │       ├── ImageGenerator.jsx  # Main component
│   │       └── ImageGenerator.css  # Styling
│   ├── App.js
│   └── index.js
├── .env                           # Environment variables (create this)
├── .gitignore
└── README.md
```

## 🎨 Features in Detail

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

## 🛠️ Built With

- **React** - Frontend framework
- **OpenAI DALL-E 3** - AI image generation
- **CSS3** - Styling and animations
- **Fetch API** - HTTP requests

## 🔒 Security Notes

- API keys are stored in environment variables
- `.env` file is excluded from version control
- Client-side API calls (consider backend proxy for production)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
