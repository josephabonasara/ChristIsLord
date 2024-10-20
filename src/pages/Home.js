// src/pages/Home.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import StreakContainer from '../components/StreakContainer';
import { Link } from 'react-router-dom';

const Home = () => {
  const streakDays = 5;

  return (
    <div
      style={{
        background: '#E6F0FF', // Lighter overall background for the home page
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
          backgroundColor: '#FFFFFF', // White background for main content
          borderRadius: '12px',
          boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
        }}
      >
        {/* Streak Container at the top */}
        <StreakContainer streakDays={streakDays} />

        <Typography variant="h2" style={{ marginBottom: '20px', fontWeight: 'bold', color: '#333' }}>
          Welcome to ChristIsLord
        </Typography>
        <Typography variant="h6" style={{ marginBottom: '30px', color: '#666' }}>
          Strengthen your faith journey with personalized Bible verses, daily devotionals, and spiritual insights.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/feelings"
          style={{
            backgroundColor: '#FFD700',
            fontSize: '1.2rem',
            padding: '12px 24px',
            transition: '0.3s',
          }}
        >
          Get Started with Mood Tracker
        </Button>
      </Container>
    </div>
  );
};

export default Home;
