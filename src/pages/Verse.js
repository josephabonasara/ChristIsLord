// src/pages/Verse.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import VerseOfTheDay from '../components/VerseOfTheDay';
import AIExplanation from '../components/AIExplanation';
import { getVerseOfTheDay } from '../services/bibleService';

const Verse = () => {
  const [verse, setVerse] = useState('');

  useEffect(() => {
    const fetchVerse = async () => {
      const dailyVerse = await getVerseOfTheDay();
      setVerse(dailyVerse);
    };
    fetchVerse();
  }, []);

  return (
    <Container style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Verse of the Day
      </Typography>
      <Card style={{ maxWidth: '600px', margin: '20px auto', boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h6" color="textSecondary">
            {verse}
          </Typography>
        </CardContent>
      </Card>
      <AIExplanation verse={verse} />
    </Container>
  );
};

export default Verse;
