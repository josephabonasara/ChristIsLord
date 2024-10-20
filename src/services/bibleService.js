// src/services/bibleService.js
export const getVerseOfTheDay = async () => {
    // In a real app, you'd use a Bible API to fetch data. Here, we simulate it.
    const verses = [
      'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11',
      'The Lord is my shepherd; I shall not want. - Psalm 23:1',
      'I can do all things through Christ who strengthens me. - Philippians 4:13',
    ];
  
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * verses.length);
        resolve(verses[randomIndex]);
      }, 1000); // Simulate network delay
    });
  };
  