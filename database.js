import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config();

// Schéma Compteur
const compteurSchema = new mongoose.Schema({
    nom: { type: String, default: 'compteur_principal' },
    valeur: { type: Number, default: 0 }
});

export const Compteur = mongoose.model('Compteur', compteurSchema);

export const connect = async () => {
    await mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connexion à la base de données effectuée avec succès");
        })
        .catch((error) => {
            console.log("Connexion à la base de données échouée.");
            console.error(error);
            process.exit(1);
        });
};