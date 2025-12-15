import express from 'express';
import * as dotenv from 'dotenv';
import * as database from './database.js';

database.connect();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route pour incrémenter le compteur
app.post('/plus', async (req, res) => {
  try {
    let compteur = await database.Compteur.findOne({ nom: 'compteur_principal' });
    
    // Si le compteur n'existe pas, le créer
    if (!compteur) {
      compteur = new database.Compteur({ nom: 'compteur_principal', valeur: 0 });
    }
    
    compteur.valeur += 1;
    await compteur.save();
    
    res.json({ valeur: compteur.valeur });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l\'incrément' });
  }
});

// Route pour décrémenter le compteur
app.post('/minus', async (req, res) => {
  try {
    let compteur = await database.Compteur.findOne({ nom: 'compteur_principal' });
    
    // Si le compteur n'existe pas, le créer
    if (!compteur) {
      compteur = new database.Compteur({ nom: 'compteur_principal', valeur: 0 });
    }
    
    compteur.valeur -= 1;
    await compteur.save();
    
    res.json({ valeur: compteur.valeur });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors du décrément' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Serveur disponible sur l'adresse suivante : http://localhost:${PORT}`);
});