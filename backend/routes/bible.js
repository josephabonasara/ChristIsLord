// backend/routes/bible.js
import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

const API_KEY = '97e7608ab90dd20d2c8d6cedfd734f47';  // Replace with your actual Scripture API key
const API_URL = 'https://api.scripture.api.bible/v1/bibles';

// Fetch Bible content based on version, book, and chapter
router.get('/:version/:bookId/:chapter', async (req, res) => {
  const { version, bookId, chapter } = req.params;

  try {
    const response = await fetch(`${API_URL}/${version}/chapters/${bookId}.${chapter}`, {
      headers: {
        'api-key': API_KEY,
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch Bible data' });
    }

    const data = await response.json();
    res.json(data.data.content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Bible data' });
  }
});

export { router as bibleRoutes };  // Named export for bibleRoutes

