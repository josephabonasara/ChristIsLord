// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#0057D9', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1, fontWeight: 'bold' }}>
          ChristIsLord
        </Typography>
        <Button color="inherit" component={Link} to="/" style={{ marginRight: '20px' }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/feelings" style={{ marginRight: '20px' }}>
          Feelings
        </Button>
        <Button color="inherit" component={Link} to="/bible" style={{ marginRight: '20px' }}>
          Bible
        </Button>
        <Button color="inherit" component={Link} to="/verse">
          Verse of the Day
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
