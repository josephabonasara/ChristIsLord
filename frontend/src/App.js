import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import GuidancePage from './pages/GuidancePage.js';
import AIChatPage from './pages/AIChatPage.js';
import BibleReader from './components/BibleReader.js';
import { getVerseOfTheDay } from './services/bibleService.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [verseOfTheDay, setVerseOfTheDay] = useState('');

  useEffect(() => {
    const fetchVerse = async () => {
      const dailyVerse = await getVerseOfTheDay();
      setVerseOfTheDay(dailyVerse);
    };
    fetchVerse();
  }, []);

  useEffect(() => {
    const scheduleNotifications = () => {
      const now = new Date();
      const nextQuizReminder = new Date();
      nextQuizReminder.setHours(9, 0, 0, 0); // 9:00 AM
      if (now > nextQuizReminder) {
        nextQuizReminder.setDate(nextQuizReminder.getDate() + 1);
      }

      const timeUntilQuizReminder = nextQuizReminder - now;
      setTimeout(() => {
        toast.info('Time for your daily quiz!');
      }, timeUntilQuizReminder);

      const nextLoginReminder = new Date();
      nextLoginReminder.setHours(18, 0, 0, 0); // 6:00 PM
      if (now > nextLoginReminder) {
        nextLoginReminder.setDate(nextLoginReminder.getDate() + 1);
      }

      const timeUntilLoginReminder = nextLoginReminder - now;
      setTimeout(() => {
        toast.info('Don\'t forget to log in!');
      }, timeUntilLoginReminder);
    };

    scheduleNotifications();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home verseOfTheDay={verseOfTheDay} />} />
        <Route path="/ask-ai" element={<AIChatPage verse={verseOfTheDay} />} />
        <Route path="/guidance/:mood" element={<GuidancePage />} /> {/* New route for mood guidance */}
        <Route path="/bible" element={<BibleReader />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
