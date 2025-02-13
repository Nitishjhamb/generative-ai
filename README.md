# AI Chatbot with Google Gemini

## Overview
An AI-powered chatbot utilizing Google's Gemini API, built with Node.js and Express, offering a seamless and interactive conversation experience.

## Features
- AI chat responses powered by Google Gemini API
- User-friendly and interactive UI
- Secure API key handling with environment variables
- Docker support for easy deployment

## Installation
### Prerequisites
- Node.js (v18 or later)
- Git
- Docker (optional)

### Steps
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <your-repo-name>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure API Key:
   - Create a `.env` file and add your API key:
     ```env
     API_KEY=your-google-gemini-api-key
     ```
4. Start the server:
   ```sh
   npm start
   ```

## Usage
- Open `http://localhost:3000` in your browser.
- Type a message to start interacting with the chatbot.

## Running with Docker
1. Build the Docker image:
   ```sh
   docker build -t ai-chatbot .
   ```
2. Run the container:
   ```sh
   docker run -p 3000:3000 -d ai-chatbot
   ```

## License
This project is licensed under the MIT License.

