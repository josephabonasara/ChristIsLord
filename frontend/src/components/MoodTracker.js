// src/components/MoodTracker.js
import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const MoodTracker = ({ handleAIResponse }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [feelingExplanation, setFeelingExplanation] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);

  // Mood options with emojis and labels
  const moods = [
    { label: 'happy', emoji: '😊' },
    { label: 'anxious', emoji: '😰' },
    { label: 'sad', emoji: '😢' },
    { label: 'overwhelmed', emoji: '😵' },
    { label: 'calm', emoji: '😌' },
  ];

  // Handle mood selection
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setShowExplanation(true); // Show explanation prompt after selecting a mood
  };

  return (
    <Container
      style={{
        backgroundColor: '#F9F9F9',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '30px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" style={{ marginBottom: '10px', fontWeight: 'bold' }}>
        How are you feeling today?
      </Typography>

      {/* Emoji mood selection */}
      <Box display="flex" justifyContent="center" gap="15px">
        {moods.map((mood, index) => (
          <Box key={index} textAlign="center">
            <Button
              onClick={() => handleMoodSelect(mood)}
              style={{
                backgroundColor: selectedMood?.label === mood.label ? '#FF5722' : '#E0E0E0',
                color: '#000',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                fontSize: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {mood.emoji}
            </Button>
            <Typography variant="body2" style={{ marginTop: '5px', color: '#555' }}>
              {mood.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Show "Need Guidance?" button when a mood is selected */}
      {selectedMood && (
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/guidance/${selectedMood.label}`}
            style={{ padding: '10px 20px', backgroundColor: '#FF5722', color: '#fff' }}
          >
            Need Guidance?
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default MoodTracker;
