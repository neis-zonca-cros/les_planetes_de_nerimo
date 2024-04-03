import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import planeteRoutes from './routes/planeteRoutes.js';
import personnageRoutes from './routes/personnageRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT;


mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log('Connexion à la base de donnée réussie');
});


app.use(express.json());
app.use('/api/planete', planeteRoutes);
app.use('/api/personnage', personnageRoutes);
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});