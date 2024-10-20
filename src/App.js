// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIChatPage from './pages/AIChatPage';

function App() {
  const verseOfTheDay = "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home verseOfTheDay={verseOfTheDay} />} />
        <Route path="/ask-ai" element={<AIChatPage verse={verseOfTheDay} />} />
      </Routes>
    </Router>
  );
}

export default App;
