// src/pages/Home.js
import React, { useState } from 'react';
import { Container } from '@mui/material';
import StreakContainer from '../components/StreakContainer';
import MoodTracker from '../components/MoodTracker';
import VerseOfTheDay from '../components/VerseOfTheDay';
import { getBibleGuidance } from '../services/aiService';

const Home = ({ verseOfTheDay }) => {
  const [aiResponse, setAiResponse] = useState('');

  // Function to handle AI response from the Mood Tracker
  const handleAIResponse = async (userInput) => {
    const { mood, explanation } = userInput;
    const response = await getBibleGuidance(mood, explanation);
    setAiResponse(response);
  };

  return (
    <div
      style={{
        background: '#E6F0FF',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Container
        style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
        }}
      >
        {/* Streak Container */}
        <StreakContainer streakDays={5} />

        {/* Mood Tracker */}
        <MoodTracker handleAIResponse={handleAIResponse} />

        {/* Verse of the Day */}
        <VerseOfTheDay verse={verseOfTheDay} />

        {/* AI Response Display from Mood */}
        {aiResponse && (
          <div style={{ marginTop: '30px' }}>
            <h6>Based on your feelings, here’s a Bible passage for you:</h6>
            <p>{aiResponse}</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
