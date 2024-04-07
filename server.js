import express from 'express';
import bodyParser from 'body-parser';
import { chat as openAIChat } from './openai.js'; // Ensure the .js extension is included
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve files from the public directory

// Endpoint to handle chat requests
app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const response = await openAIChat(messages);
    res.json(response);
  } catch (error) {
    res.status(500).send({ error: error.toString() });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
