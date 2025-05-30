const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

// Function to escape CSV values
function escapeCSV(value) {
  if (typeof value !== 'string') return '';
  
  // If the value contains comma, quote, or newline, wrap in quotes and escape internal quotes
  if (value.includes(',') || value.includes('"') || value.includes('\n') || value.includes('\r')) {
    return '"' + value.replace(/"/g, '""') + '"';
  }
  return value;
}

// Function to parse Q&A content
function parseQAContent(content) {
  const pairs = [];
  const lines = content.split('\n');
  let currentQuestion = '';
  let currentAnswer = '';
  let isCollectingAnswer = false;
  
  for (let line of lines) {
    line = line.trim();
    
    if (line.toLowerCase().startsWith('question:')) {
      // Save previous pair if exists
      if (currentQuestion && currentAnswer) {
        pairs.push({
          question: currentQuestion.trim(),
          answer: currentAnswer.trim()
        });
      }
      
      // Start new question
      currentQuestion = line.substring(9).trim(); // Remove "Question:" prefix
      currentAnswer = '';
      isCollectingAnswer = false;
    } else if (line.toLowerCase().startsWith('answer:')) {
      currentAnswer = line.substring(7).trim(); // Remove "Answer:" prefix
      isCollectingAnswer = true;
    } else if (isCollectingAnswer && line) {
      // Continue collecting answer lines
      currentAnswer += ' ' + line;
    } else if (!isCollectingAnswer && line && currentQuestion) {
      // Continue collecting question lines
      currentQuestion += ' ' + line;
    }
  }
  
  // Don't forget the last pair
  if (currentQuestion && currentAnswer) {
    pairs.push({
      question: currentQuestion.trim(),
      answer: currentAnswer.trim()
    });
  }
  
  return pairs;
}

// API endpoint to generate CSV
app.post('/generate-csv', (req, res) => {
  try {
    const { content, filename } = req.body;
    
    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }
    
    // Parse the Q&A content
    const qaPairs = parseQAContent(content);
    
    if (qaPairs.length === 0) {
      return res.status(400).json({ error: 'No valid Q&A pairs found. Please ensure your content follows the format "Question: ... Answer: ..."' });
    }
    
    // Generate CSV content
    let csvContent = '';
    
    for (const pair of qaPairs) {
      const question = escapeCSV(pair.question);
      const answer = escapeCSV(pair.answer);
      csvContent += `${question},${answer}\n`;
    }
    
    // Set headers for file download
    const csvFilename = filename || 'flashcards.csv';
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="${csvFilename}"`);
    
    // Send CSV content
    res.send(csvContent);
    
  } catch (error) {
    console.error('Error generating CSV:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Flashcard CSV Generator API is running' });
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Only listen directly when not on Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;