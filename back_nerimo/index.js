import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import planeteRoutes from './routes/planeteRoutes.js';
import personnageRoutes from './routes/personnageRoutes.js';
import utilisateurRoutes from './routes/utilisateurRoutes.js';
import sessionRoutes from './routes/sessionRoutes.js';

// Connexion MongoDB
async function connexionMongo() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connexion à la base de données réussie sur l/'environnement ${process.env.NODE_ENV}`);
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error.message);
    process.exit(1); 
  }
}

// Configuration dotenv pour l'API
function configurationDotenv() {
  
  const env = process.env.NODE_ENV || 'development';
  const envFile = env === 'test' ? '.env.test' : '.env';
  const result = dotenv.config({ path: envFile });
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
  app.use('/api/session', sessionRoutes());

  
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

