// src/components/VerseOfTheDay.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const VerseOfTheDay = ({ verse }) => {
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
      <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '15px' }}>
        Verse of the Day
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '20px', color: '#555' }}>
        {verse}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/ask-ai"
        style={{
          backgroundColor: '#FF5722',
          color: '#fff',
          padding: '10px 20px',
        }}
      >
        Ask AI
      </Button>
    </Container>
  );
};

export default VerseOfTheDay;
