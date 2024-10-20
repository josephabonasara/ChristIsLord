
// src/components/BibleReader.js
import React, { useState } from 'react';

const BibleReader = () => {
  const [selectedBook, setSelectedBook] = useState('Genesis');
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedVerse, setSelectedVerse] = useState(1);
  
  // Example Bible data (you would replace this with real Bible data or API)
  const bibleBooks = ['Genesis', 'Exodus', 'Leviticus'];
  const verses = {
    Genesis: { 1: ['In the beginning God created the heavens and the earth.'] },
    Exodus: { 1: ['These are the names of the sons of Israel who went to Egypt with Jacob.'] },
  };

  const handleBookChange = (event) => setSelectedBook(event.target.value);
  const handleChapterChange = (event) => setSelectedChapter(event.target.value);

  return (
    <div className="bible-reader">
      <h2>Bible Reader</h2>
      <div>
        <label>Select Book:</label>
        <select value={selectedBook} onChange={handleBookChange}>
          {bibleBooks.map((book, idx) => (
            <option key={idx} value={book}>
              {book}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Chapter:</label>
        <input
          type="number"
          value={selectedChapter}
          onChange={handleChapterChange}
          min="1"
        />
      </div>
      <div>
        <h3>
          {selectedBook} {selectedChapter}
        </h3>
        <p>{verses[selectedBook]?.[selectedChapter]?.[0]}</p>
      </div>
    </div>
  );
};

export default BibleReader;
