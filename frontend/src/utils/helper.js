// src/utils/helpers.js
export const getStreak = () => {
    const storedStreak = localStorage.getItem('streak');
    const lastLogin = localStorage.getItem('lastLogin');
    
    const today = new Date().toISOString().split('T')[0]; // Get today's date
  
    if (lastLogin !== today) {
      localStorage.setItem('lastLogin', today); // Update last login
      if (isNextDay(lastLogin, today)) {
        // Continue streak
        const newStreak = parseInt(storedStreak || '0') + 1;
        localStorage.setItem('streak', newStreak);
        return newStreak;
      } else {
        // Reset streak
        localStorage.setItem('streak', 1);
        return 1;
      }
    }
    return parseInt(storedStreak || '0');
  };
  
  const isNextDay = (lastLogin, today) => {
    const lastDate = new Date(lastLogin);
    const todayDate = new Date(today);
    const difference = todayDate - lastDate;
    return difference === 86400000; // 1 day in milliseconds
  };
  