// src/components/VerseOfTheDay.js
import React, { useState, useEffect } from 'react';

const VerseOfTheDay = ({ fetchVerseOfTheDay }) => {
  const [verse, setVerse] = useState('');

  useEffect(() => {
    const fetchVerse = async () => {
      const dailyVerse = await fetchVerseOfTheDay();
      setVerse(dailyVerse);
    };
    fetchVerse();
  }, [fetchVerseOfTheDay]);

  return (
    <div className="verse-of-the-day">
      <h2>Verse of the Day</h2>
      <p>{verse}</p>
    </div>
  );
};

export default VerseOfTheDay;
