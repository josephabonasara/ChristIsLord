export const getVerseOfTheDay = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/verse-of-the-day');
    const data = await response.json();
    return data.verse;
  } catch (error) {
    console.error('Error fetching verse of the day:', error);
    return 'Sorry, we couldn’t fetch the verse of the day at the moment.';
  }
};
