import React, { useState, useEffect } from 'react';
import { Container, Typography, MenuItem, Select, FormControl, Box, Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

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
        const response = await fetch(
          `https://api.scripture.api.bible/v1/bibles/${version}/chapters/${bookId}.${chapter}`, {
            headers: {
              'api-key': '97e7608ab90dd20d2c8d6cedfd734f47',  // Replace with your actual Scripture API key
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Bible chapter');
        }

        const data = await response.json();
        setChapterContent(data.data.content); // Set chapter content (HTML formatted)
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
        background: '#E6F0FF',
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
          maxWidth: '800px',
        }}
      >
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Bible Reader
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
            <MenuItem value="MAT">Matthew</MenuItem>
            <MenuItem value="JOH">John</MenuItem>
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
            maxHeight: '400px',
            overflowY: 'scroll',
            padding: '20px',
            marginBottom: '20px',
            border: '1px solid #E0E0E0',
            borderRadius: '8px',
            backgroundColor: '#F9F9F9',
            textAlign: 'left',  // Make text alignment left
          }}
        >
          {chapterContent && !loading ? (
            <div>
              {parse(chapterContent)}  {/* Render HTML content safely */}
            </div>
          ) : (
            <Typography variant="body1">No content available</Typography>
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
