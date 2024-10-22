// backend/server.js
import express from 'express';  // Use import instead of require
import cors from 'cors';        // Use import for CORS
import { bibleRoutes } from './routes/bible.js';  // Use named import for bibleRoutes

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS and allow requests from localhost:3000 (React frontend)
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/api/bible', bibleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
