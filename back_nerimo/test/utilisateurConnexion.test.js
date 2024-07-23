import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import utilisateurRoutes from '../routes/utilisateurRoutes.js';
import Utilisateur from '../models/Utilisateur.js';

dotenv.config({ path: '.env.test' });

const app = express();
app.use(express.json());
app.use('/api/utilisateur', utilisateurRoutes());

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  await Utilisateur.deleteMany({});
});
console.log(`connecté à la base de données ${process.env.MONGODB_URI}`),
  console.log(`connecté sur le port ${process.env.PORT}`),
  afterAll(async () => {
    await mongoose.disconnect();
  });

describe('POST /api/utilisateur/connexion', () => {
  it('post/utilisateur/connexion: retourne une erreur 401 si le mail est invalide', async () => {
    const response = await request(app)
      .post('/api/utilisateur/connexion')
      .send({ email: 'invalid@example.com', mdp: 'password' });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Compte invalide');
  });

  it('post/utilisateur/connexion: retourne une erreur 401 sur le mdp est invalide et vérification si tentative de connexion = 1', async () => {
    const utilisateur = new Utilisateur({
      prenom: 'Néïs test',
      email: 'valid@example.com',
      mdp: await bcrypt.hash('password', 10),
      tentativeConnexion: 0,
    });
    await utilisateur.save();

    const response = await request(app)
      .post('/api/utilisateur/connexion')
      .send({ email: 'valid@example.com', mdp: 'invalidpassword' });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Compte invalide');

    const utilisateurMisAJour = await Utilisateur.findOne({ email: 'valid@example.com' });
    expect(utilisateurMisAJour.tentativeConnexion).toBe(1);
  });

  it('post/utilisateur/connexion: retourne 200 si tout est ok pour la connexion utilisateur', async () => {
    const utilisateur = new Utilisateur({
      prenom: "Néïs",
      email: 'valid@example.com',
      mdp: await bcrypt.hash('password', 10),
      tentativeConnexion: 0,
    });
    await utilisateur.save();

    const response = await request(app)
      .post('/api/utilisateur/connexion')
      .send({ email: 'valid@example.com', mdp: 'password' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Connexion réussie');
    expect(response.body.token).toBeDefined();

    const decoded = jwt.verify(response.body.token, process.env.JWT_SECRET);
    expect(decoded.email).toBe(utilisateur.email);
  });

  it('post/utilisateur/connexion: retourne une erreur 401 si le compte est bloqué', async () => {
    const utilisateur = new Utilisateur({
      prenom: 'Néïs',
      email: 'valid@example.com',
      mdp: await bcrypt.hash('password', 10),
      tentativeConnexion: 5,
      dateBlocageConnexion: new Date(Date.now() - 3000),
    });
    await utilisateur.save();

    const response = await request(app)
      .post('/api/utilisateur/connexion')
      .send({ email: 'valid@example.com', mdp: 'password' });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Compte bloqué. Réessayez après 5 minutes.');
  });


});
