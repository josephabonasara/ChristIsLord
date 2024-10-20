// src/pages/Bible.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import BibleReader from '../components/BibleReader';

const Bible = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Read the Bible</Typography>
      <BibleReader />
    </Container>
  );
};

export default Bible;
