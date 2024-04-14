import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import planeteRoutes from './routes/planeteRoutes.js';
import personnageRoutes from './routes/personnageRoutes.js';
import utilisateurRoutes from './routes/utilisateurRoutes.js';
import { verifierToken } from './middlewares/verifierToken.js';

// Connexion MongoDB
async function connexionMongo() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connexion à la base de données réussie !');
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error.message);
    process.exit(1); 
  }
}

// Configuration dotenv pour l'API
function configurationDotenv() {
  const result = dotenv.config();
  if (result.error) {
    console.error('Erreur lors de la configuration de dotenv:', result.error.message);
    process.exit(1); 
  }
}

// Configuration de l'APP avec les routes
function configurationApp() {
  const app = express();
  const port = process.env.PORT;
  
  
  app.use(express.json());
  
  
  app.use('/api/planete', planeteRoutes());
  app.use('/api/personnage', personnageRoutes());
  app.use('/api/utilisateur', utilisateurRoutes());

  
  app.listen(port, (err) => {
    if (err) {
      console.error('Erreur lors du démarrage du serveur:', err);
      process.exit(1); 
    }
    console.log(`Serveur démarré sur le port ${port}`);
  });
}


configurationDotenv();
connexionMongo();
configurationApp();

