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
# MIT License

## Copyright (c) 2025 Nitish

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

