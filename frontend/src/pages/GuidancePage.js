// src/pages/GuidancePage.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box, Avatar, IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home'; // Import the Home icon
import { getBibleGuidance } from '../services/aiService.js';

const AI_PROFILE_PIC = 'https://i.imgur.com/qIufhof.png';

const GuidancePage = () => {
  const { mood } = useParams();  // Get the mood from the route
  const [conversation, setConversation] = useState([]);
  const [userQuery, setUserQuery] = useState('');

  // Fetch initial AI guidance when the page loads
  useEffect(() => {
    const fetchGuidance = async () => {
      const response = await getBibleGuidance(mood, `The user feels ${mood}.`);
      setConversation([{ role: 'AI', text: response }]);
    };

    fetchGuidance();
  }, [mood]);

  // Handle user asking follow-up questions
  const handleAskAI = async () => {
    if (userQuery.trim()) {
      // Add user's query to the conversation
      const newConversation = [...conversation, { role: 'user', text: userQuery }];
      setConversation(newConversation);

      // Fetch AI response and add it to the conversation
      const response = await getBibleGuidance(mood, userQuery);
      setConversation([...newConversation, { role: 'AI', text: response }]);
      
      // Clear the input field
      setUserQuery('');
    }
  };

  return (
    <Container
      style={{
        backgroundColor: '#FFFFFF',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        marginTop: '30px',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Bible Guidance Based on Your Feelings
      </Typography>

      <Typography variant="body1" style={{ marginBottom: '20px', color: '#555' }}>
        You mentioned you're feeling {mood}. Here's some guidance from the Bible:
      </Typography>

      {/* Chat conversation area */}
      <Box
        style={{
          flexGrow: 1,
          overflowY: 'scroll',
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: '#F0F0F0',
          borderRadius: '8px',
        }}
      >
        {conversation.map((message, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="flex-start"
            justifyContent={message.role === 'user' ? 'flex-end' : 'flex-start'}
            mb={2}
          >
            {message.role === 'AI' && (
              <Avatar
                src={AI_PROFILE_PIC}
                alt="AI Avatar"
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
            )}
            <Box
              style={{
                backgroundColor: message.role === 'user' ? '#DCF8C6' : '#fff',
                border: message.role === 'user' ? '1px solid #DCF8C6' : '1px solid #ccc',
                borderRadius: '20px',
                padding: '10px 15px',
                maxWidth: '70%',
                color: message.role === 'user' ? '#333' : '#555',
                alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <Typography variant="body2" style={{ wordWrap: 'break-word' }}>
                {message.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Ask AI more about this feeling or the Bible */}
      <TextField
        fullWidth
        multiline
        rows={2}
        variant="outlined"
        placeholder="Ask a question..."
        value={userQuery}
        onChange={(e) => setUserQuery(e.target.value)}
        style={{ marginBottom: '15px' }}
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

      {/* Home Button at the bottom */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={2}
      >
        <IconButton
          component={Link}
          to="/"
          style={{
            backgroundColor: '#FF5722',
            color: '#fff',
            padding: '10px',
            borderRadius: '50%',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <HomeIcon style={{ fontSize: '28px' }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default GuidancePage;
