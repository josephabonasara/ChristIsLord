// src/pages/Feelings.js
import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';

const Feelings = () => {
  const [mood, setMood] = useState('');

  const handleMoodChange = (selectedMood) => {
    setMood(selectedMood);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container style={{ textAlign: 'center', backgroundColor: '#f0f0f0', padding: '50px', borderRadius: '12px' }}>
        <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', fontWeight: 'bold' }}>
          How are you feeling today?
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
          <Button variant="contained" color="primary" onClick={() => handleMoodChange('Happy')} style={{ fontSize: '1.2rem', padding: '10px 20px' }}>😊 Happy</Button>
          <Button variant="contained" color="primary" onClick={() => handleMoodChange('Anxious')} style={{ fontSize: '1.2rem', padding: '10px 20px' }}>😰 Anxious</Button>
          <Button variant="contained" color="primary" onClick={() => handleMoodChange('Grateful')} style={{ fontSize: '1.2rem', padding: '10px 20px' }}>🙏 Grateful</Button>
        </div>
        {mood && (
          <Typography variant="h5" style={{ color: '#0057D9' }}>
            You are feeling {mood}. A Bible verse will be suggested based on your mood.
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default Feelings;
