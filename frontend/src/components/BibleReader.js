import React, { useState, useEffect } from 'react';
import { Container, Typography, MenuItem, Select, FormControl, Box, Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios';

const BibleReader = () => {
  const [version, setVersion] = useState('de4e12af7f28f599-02'); // Default to King James Version
  const [bookId, setBookId] = useState('GEN'); // Default to Genesis
  const [chapter, setChapter] = useState(1);
  const [chapterContent, setChapterContent] = useState('');
  const [loading, setLoading] = useState(true); // Loading state for better UX

  // Fetch Bible chapter content when the version, book, or chapter changes
  useEffect(() => {
    const fetchBibleChapter = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(
          `http://localhost:5001/api/bible`, {
            params: {
              version,
              bookId,
              chapter
            }
          }
        );

        setChapterContent(response.data); // Set chapter content (HTML formatted)
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error fetching Bible chapter:', error);
        setLoading(false); // Stop loading even on error
      }
    };

    fetchBibleChapter();
  }, [version, bookId, chapter]);

  return (
    <div
      style={{
        background: '#FAF9F6',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Container
        style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
        }}
      >
        <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'bold', color: '#2C3E50' }}>
          {`${bookId} Chapter ${chapter}`}
        </Typography>

        {/* Version Selection */}
        <FormControl variant="outlined" style={{ marginBottom: '20px', minWidth: '200px' }}>
          <Select
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            label="Version"
          >
            <MenuItem value="de4e12af7f28f599-02">King James Version (KJV)</MenuItem>
            <MenuItem value="06125adad2d5898a-01">New International Version (NIV)</MenuItem>
            <MenuItem value="01b29f4b342acc35-01">English Standard Version (ESV)</MenuItem>
          </Select>
        </FormControl>

        {/* Book and Chapter Selection */}
        <FormControl variant="outlined" style={{ marginBottom: '20px', minWidth: '200px' }}>
          <Select value={bookId} onChange={(e) => setBookId(e.target.value)} label="Book">
          <MenuItem value="GEN">Genesis</MenuItem>
          <MenuItem value="EXO">Exodus</MenuItem>
          <MenuItem value="LEV">Leviticus</MenuItem>
          <MenuItem value="NUM">Numbers</MenuItem>
          <MenuItem value="DEU">Deuteronomy</MenuItem>
          <MenuItem value="JOS">Joshua</MenuItem>
          <MenuItem value="JDG">Judges</MenuItem>
          <MenuItem value="RUT">Ruth</MenuItem>
          <MenuItem value="1SA">1 Samuel</MenuItem>
          <MenuItem value="2SA">2 Samuel</MenuItem>
          <MenuItem value="1KI">1 Kings</MenuItem>
          <MenuItem value="2KI">2 Kings</MenuItem>
          <MenuItem value="1CH">1 Chronicles</MenuItem>
          <MenuItem value="2CH">2 Chronicles</MenuItem>
          <MenuItem value="EZR">Ezra</MenuItem>
          <MenuItem value="NEH">Nehemiah</MenuItem>
          <MenuItem value="EST">Esther</MenuItem>
          <MenuItem value="JOB">Job</MenuItem>
          <MenuItem value="PSA">Psalms</MenuItem>
          <MenuItem value="PRO">Proverbs</MenuItem>
          <MenuItem value="ECC">Ecclesiastes</MenuItem>
          <MenuItem value="SNG">Song of Solomon</MenuItem>
          <MenuItem value="ISA">Isaiah</MenuItem>
          <MenuItem value="JER">Jeremiah</MenuItem>
          <MenuItem value="LAM">Lamentations</MenuItem>
          <MenuItem value="EZK">Ezekiel</MenuItem>
          <MenuItem value="DAN">Daniel</MenuItem>
          <MenuItem value="HOS">Hosea</MenuItem>
          <MenuItem value="JOL">Joel</MenuItem>
          <MenuItem value="AMO">Amos</MenuItem>
          <MenuItem value="OBA">Obadiah</MenuItem>
          <MenuItem value="JON">Jonah</MenuItem>
          <MenuItem value="MIC">Micah</MenuItem>
          <MenuItem value="NAM">Nahum</MenuItem>
          <MenuItem value="HAB">Habakkuk</MenuItem>
          <MenuItem value="ZEP">Zephaniah</MenuItem>
          <MenuItem value="HAG">Haggai</MenuItem>
          <MenuItem value="ZEC">Zechariah</MenuItem>
          <MenuItem value="MAL">Malachi</MenuItem>
          <MenuItem value="MAT">Matthew</MenuItem>
          <MenuItem value="MRK">Mark</MenuItem>
          <MenuItem value="LUK">Luke</MenuItem>
          <MenuItem value="ACT">Acts</MenuItem>
          <MenuItem value="ROM">Romans</MenuItem>
          <MenuItem value="1CO">1 Corinthians</MenuItem>
          <MenuItem value="2CO">2 Corinthians</MenuItem>
          <MenuItem value="GAL">Galatians</MenuItem>
          <MenuItem value="EPH">Ephesians</MenuItem>
          <MenuItem value="PHP">Philippians</MenuItem>
          <MenuItem value="COL">Colossians</MenuItem>
          <MenuItem value="1TH">1 Thessalonians</MenuItem>
          <MenuItem value="2TH">2 Thessalonians</MenuItem>
          <MenuItem value="1TI">1 Timothy</MenuItem>
          <MenuItem value="2TI">2 Timothy</MenuItem>
          <MenuItem value="TIT">Titus</MenuItem>
          <MenuItem value="PHM">Philemon</MenuItem>
          <MenuItem value="HEB">Hebrews</MenuItem>
          <MenuItem value="JAS">James</MenuItem>
          <MenuItem value="1PE">1 Peter</MenuItem>
          <MenuItem value="2PE">2 Peter</MenuItem>
          <MenuItem value="1JN">1 John</MenuItem>
          <MenuItem value="2JN">2 John</MenuItem>
          <MenuItem value="3JN">3 John</MenuItem>
          <MenuItem value="JUD">Jude</MenuItem>
          <MenuItem value="REV">Revelation</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" style={{ marginBottom: '20px', minWidth: '100px' }}>
          <Select value={chapter} onChange={(e) => setChapter(e.target.value)} label="Chapter">
            {[...Array(50).keys()].map((i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Loading Spinner */}
        {loading && <CircularProgress />}

        {/* Display Bible Chapter Content */}
        <Box
          style={{
            maxHeight: '500px',
            overflowY: 'scroll',
            padding: '20px',
            marginBottom: '20px',
            border: '1px solid #E0E0E0',
            borderRadius: '8px',
            backgroundColor: '#F9F9F9',
            textAlign: 'left',  // Make text alignment left
            fontFamily: 'Georgia, serif', // Use a readable font
            lineHeight: '1.8', // Increased line height for readability
            fontSize: '18px', // Adjusted font size
            color: '#2C3E50', // Adjusted font color
          }}
        >
          {chapterContent && !loading ? (
            <div>
              {parse(chapterContent)}  {/* Render HTML content safely */}
            </div>
          ) : (
            <Typography variant="body1" style={{ fontStyle: 'italic', color: '#7F8C8D' }}>
              No content available
            </Typography>
          )}
        </Box>

        {/* Go Back to Home Page */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          style={{ padding: '10px 20px' }}
        >
          Go to Home
        </Button>
      </Container>
    </div>
  );
};

export default BibleReader;
