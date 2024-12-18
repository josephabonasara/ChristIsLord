export const fetchVerseOfTheDay = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/random-verse');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching verse of the day:', error);
    return 'Error fetching verse of the day';
  }
};
