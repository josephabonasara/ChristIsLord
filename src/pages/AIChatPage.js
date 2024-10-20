// src/pages/AIChatPage.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { getAIExplanation } from '../services/aiService';

const AIChatPage = ({ verse }) => {
  const [userQuery, setUserQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleAskAI = async () => {
    if (userQuery.trim()) {
      const response = await getAIExplanation(verse, userQuery);
      setAiResponse(response);
      setUserQuery('');
    }
  };

  return (
    <Container
      style={{
        backgroundColor: '#FFFFFF',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        textAlign: 'center',
        marginTop: '30px',
      }}
    >
      <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Verse of the Day
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '20px', color: '#555' }}>
        {verse}
      </Typography>

      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Ask AI about this passage:
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        placeholder="Ask a question about the passage..."
        value={userQuery}
        onChange={(e) => setUserQuery(e.target.value)}
        style={{ marginTop: '15px', marginBottom: '15px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAskAI}
        style={{
          backgroundColor: '#FF5722',
          color: '#fff',
          padding: '10px 20px',
        }}
      >
        Ask AI
      </Button>

      {/* Display AI response */}
      {aiResponse && (
        <Box mt={4}>
          <Typography variant="body1" style={{ marginTop: '20px', color: '#333' }}>
            AI's Response:
          </Typography>
          <Typography variant="body2" style={{ color: '#555', marginTop: '10px' }}>
            {aiResponse}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default AIChatPage;
