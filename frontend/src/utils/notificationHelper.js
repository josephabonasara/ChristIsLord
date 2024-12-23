import { toast } from 'react-toastify';

export const scheduleNotifications = () => {
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
