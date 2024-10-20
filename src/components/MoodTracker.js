// src/components/MoodTracker.js
import React, { useState } from 'react';

const MoodTracker = ({ onMoodSelect }) => {
  const [selectedMood, setSelectedMood] = useState('');

  const handleMoodChange = (mood) => {
    setSelectedMood(mood);
    onMoodSelect(mood); // Pass the mood to the parent component for further processing (e.g., verse suggestion)
  };

  return (
    <div className="mood-tracker">
      <h2>How are you feeling today?</h2>
      <div className="mood-options">
        <button onClick={() => handleMoodChange('happy')}>😊 Happy</button>
        <button onClick={() => handleMoodChange('sad')}>😢 Sad</button>
        <button onClick={() => handleMoodChange('anxious')}>😰 Anxious</button>
        <button onClick={() => handleMoodChange('grateful')}>🙏 Grateful</button>
      </div>
      {selectedMood && <p>You are feeling {selectedMood} today.</p>}
    </div>
  );
};

export default MoodTracker;
