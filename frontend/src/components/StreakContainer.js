// src/components/StreakContainer.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const StreakContainer = ({ streakDays }) => {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [dayStreak, setDayStreak] = useState([false, false, false, false, false, false, false]);

  useEffect(() => {
    // For now, we'll just set the current streak manually, in a real-world scenario, fetch from API or localStorage
    setCurrentStreak(streakDays);

    // Update streak for the last 7 days
    const newDayStreak = new Array(7).fill(false);
    for (let i = 0; i < streakDays; i++) {
      newDayStreak[i] = true; // Mark the streak days with fire emoji
    }
    setDayStreak(newDayStreak);
  }, [streakDays]);

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <Container
      style={{
        backgroundColor: '#F9F9F9', // Light background instead of dark
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        color: '#333', // Darker text for readability
        marginBottom: '30px',
      }}
    >
      {/* Fire icon and streak number */}
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Typography variant="h3" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FF5722' }}>
          🔥 {currentStreak}
        </Typography>
        <Typography variant="h6" style={{ color: '#FF5722', fontWeight: 'bold' }}>
          day streak!
        </Typography>
      </Box>

      {/* Day of the week and fire emoji underneath */}
      <Box display="flex" justifyContent="center" alignItems="center" gap="15px" marginTop="20px">
        {daysOfWeek.map((day, index) => (
          <Box key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>
              {day}
            </Typography>
            <Box
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: dayStreak[index] ? '#FFE4B5' : '#E0E0E0',
                borderRadius: '50%',
                border: dayStreak[index] ? '2px solid #FF5722' : '2px solid #ccc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography style={{ fontSize: '1.5rem' }}>
                {dayStreak[index] ? '🔥' : '⚪'}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Motivational message */}
      <Typography variant="body1" style={{ marginTop: '20px', color: '#666' }}>
        Keep going! You're building a powerful habit.
      </Typography>

      {/* Continue button */}
      <Button
        variant="contained"
        size="large"
        style={{
          marginTop: '20px',
          backgroundColor: '#FF5722',
          color: '#fff',
          fontWeight: 'bold',
          padding: '10px 20px',
        }}
      >
        CONTINUE
      </Button>
    </Container>
  );
};

export default StreakContainer;
