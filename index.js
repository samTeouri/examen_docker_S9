import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});