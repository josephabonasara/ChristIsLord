// src/services/aiService.js
export const getAIExplanation = async (verse) => {
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_API_KEY_HERE`,
        },
        body: JSON.stringify({
          model: "text-davinci-003", // Example OpenAI model
          prompt: `Explain this Bible verse in modern-day terms: ${verse}`,
          max_tokens: 150,
        }),
      });
      const data = await response.json();
      return data.choices[0].text; // Extract the AI-generated explanation from the response
    } catch (error) {
      console.error('Error fetching AI explanation:', error);
      return 'Sorry, we couldn’t generate an explanation at the moment.';
    }
  };
  
  // src/services/aiService.js
export const getBibleGuidance = async (mood, explanation) => {
  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_API_KEY`,
      },
      body: JSON.stringify({
        model: "text-davinci-003", // Example model
        prompt: `A user feels ${mood} and says "${explanation}". Provide relevant Bible passages and advice.`,
        max_tokens: 150,
      }),
    });
    const data = await response.json();
    return data.choices[0].text; // Extract AI response
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return 'Unable to fetch guidance at this time.';
  }
};
