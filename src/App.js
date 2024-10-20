// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Feelings from './pages/Feelings';
import Bible from './pages/Bible';
import Verse from './pages/Verse';
import './styles/App.css'; // Import custom global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feelings" element={<Feelings />} />
          <Route path="/bible" element={<Bible />} />
          <Route path="/verse" element={<Verse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
