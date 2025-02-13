AI Chatbot with Google Gemini

Overview

This is an AI-powered chatbot using Google's Gemini API, built with Node.js and Express.

Features

AI chat response using Google Gemini API

Simple and interactive UI

Secure API key handling

Docker support

Installation

Prerequisites

Node.js (v18 or later)

Git

Docker (optional)

Steps

Clone the repository:

git clone <your-repo-url>
cd <your-repo-name>

Install dependencies:

npm install

Configure API Key:

Create a .env file and add your API key:

API_KEY=your-google-gemini-api-key

Start the server:

npm start

Usage

Open http://localhost:3000 in your browser.

Enter a message to start the conversation.

Running with Docker

Build the Docker image:

docker build -t ai-chatbot .

Run the container:

docker run -p 3000:3000 -d ai-chatbot

License

This project is licensed under the MIT License.
