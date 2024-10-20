// src/components/AIExplanation.js
import React, { useState } from 'react';
import { getAIExplanation } from '../services/aiService'; // Import the AI service

const AIExplanation = ({ verse }) => {
  const [explanation, setExplanation] = useState('');

  const handleExplain = async () => {
    const aiResponse = await getAIExplanation(verse);
    setExplanation(aiResponse);
  };

  return (
    <div className="ai-explanation">
      <h2>Bible Passage: {verse}</h2>
      <button onClick={handleExplain}>Explain This Verse</button>
      {explanation && <p>{explanation}</p>}
    </div>
  );
};

export default AIExplanation;
