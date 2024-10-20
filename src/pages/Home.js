// src/pages/Home.js
import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import StreakContainer from '../components/StreakContainer';
import MoodTracker from '../components/MoodTracker';
import { getBibleGuidance } from '../services/aiService';

const Home = () => {
  const [aiResponse, setAiResponse] = useState('');

  // Function to handle the AI response
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

        {/* AI Response Display */}
        {aiResponse && (
          <Box mt={4}>
            <Typography variant="h6" style={{ color: '#333' }}>
              Based on your feelings, here’s a Bible passage for you:
            </Typography>
            <Typography variant="body1" style={{ color: '#555', marginTop: '10px' }}>
              {aiResponse}
            </Typography>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Home;
