import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import GuidancePage from './pages/GuidancePage.js';
import AIChatPage from './pages/AIChatPage.js';
import BibleReader from './components/BibleReader.js';
import { getVerseOfTheDay } from './services/bibleService.js';

function App() {
  const [verseOfTheDay, setVerseOfTheDay] = useState('');

  useEffect(() => {
    const fetchVerse = async () => {
      const dailyVerse = await getVerseOfTheDay();
      setVerseOfTheDay(dailyVerse);
    };
    fetchVerse();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home verseOfTheDay={verseOfTheDay} />} />
        <Route path="/ask-ai" element={<AIChatPage verse={verseOfTheDay} />} />
        <Route path="/guidance/:mood" element={<GuidancePage />} /> {/* New route for mood guidance */}
        <Route path="/bible" element={<BibleReader />} />
      </Routes>
    </Router>
  );
}

export default App;
