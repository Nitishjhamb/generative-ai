import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
dotenv.config();
const API_KEY = process.env.API_KEY;
const MODEL_NAME = "gemini-1.0-pro";

app.use(express.json()); // Ensure that you can parse JSON requests
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;
    console.log("User message:", userMessage);

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const result = await model.generateContent(userMessage);

        console.log("AI Response:", result.response.text());
        res.json({ message: result.response.text() });
    } catch (error) {
        console.error("Error fetching AI response:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "An error occurred while getting the AI response." });
    }
});



app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
