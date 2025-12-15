import express from 'express';
import * as dotenv from 'dotenv';
import * as database from './database.js';

database.connect();

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Sample route
app.post('/plus', (req, res) => {
  
});


// Start the server
app.listen(PORT, () => {
  console.log(`Serveur disponible sur l'adresse suivante : http://localhost:${PORT}`);
});