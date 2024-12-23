import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import StreakContainer from '../components/StreakContainer.js';
import MoodTracker from '../components/MoodTracker.js';
import VerseOfTheDay from '../components/VerseOfTheDay.js';
import { Link } from 'react-router-dom';
import { scheduleNotifications } from '../utils/notificationHelper.js';

const Home = ({ verseOfTheDay }) => {
  const [quizAvailable, setQuizAvailable] = useState(false);

  useEffect(() => {
    scheduleNotifications();
  }, []);

  // Function to enable the quiz button when the user scrolls to the bottom
  const handleScroll = (e) => {
    const container = e.target;
    if (container.scrollHeight - container.scrollTop === container.clientHeight) {
      setQuizAvailable(true);
    }
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
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Welcome to the ChristIsLord App
        </Typography>

        {/* Streak Container */}
        <StreakContainer streakDays={5} />

        {/* Mood Tracker */}
        <MoodTracker />

        {/* Verse of the Day */}
        <VerseOfTheDay verse={verseOfTheDay} />

        {/* Bible Passage of the Day Section */}
        <Typography variant="h5" style={{ fontWeight: 'bold', marginTop: '30px' }}>
          Bible Passage of the Day
        </Typography>
        <Box
          style={{
            maxHeight: '200px',
            overflowY: 'scroll',
            padding: '20px',
            marginBottom: '20px',
            border: '1px solid #E0E0E0',
            borderRadius: '8px',
            backgroundColor: '#F9F9F9',
          }}
          onScroll={handleScroll}
        >
          <Typography variant="body1">
            "In the beginning was the Word, and the Word was with God, and the Word was God. 
            He was with God in the beginning. Through him all things were made; without him nothing was made that has been made. 
            In him was life, and that life was the light of all mankind. The light shines in the darkness, and the darkness has not overcome it." 
            - John 1:1-5
          </Typography>
          {/* Continue displaying the Bible passage here */}
        </Box>

        {/* Take Quiz Button */}
        <Button
          variant="contained"
          color="primary"
          disabled={!quizAvailable}  // Enable button only after scrolling
          style={{ backgroundColor: quizAvailable ? '#FF5722' : '#CCCCCC', padding: '10px 20px' }}
        >
          Take Quiz
        </Button>

        {/* Bible Reader Link */}
      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/bible"
          style={{ padding: '10px 20px' }}
        >
          Read the Bible
        </Button>
      </Box>
      </Container>
    </div>
  );
};

export default Home;
