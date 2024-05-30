import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import utilisateurRoutes from '../routes/utilisateurRoutes.js';
import Utilisateur from '../models/Utilisateur.js'; 
import sinon from 'sinon';

dotenv.config({ path: '.env.test' });

const app = express();
app.use(express.json());
app.use('/api/utilisateur', utilisateurRoutes());

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`connecté à la base de données ${process.env.MONGODB_URI}`),
  console.log(`connecté sur le port ${process.env.PORT}`),

  await Utilisateur.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('POST /api/utilisateur/creer', () => {

  
    it('post/utilisateur/creer: renvoi 403 si lutilisateur se met en admin à la création de son compte', async () => {
        const response = await request(app)
          .post('/api/utilisateur/creer')
          .send({ email: 'valid@example.com', mdp: 'validpassword', mdp_repeat:'validpassword', prenom: 'Néïs', admin: true });
      
        expect(response.status).toBe(403);
        expect(response.body).toHaveProperty('error', 'Permission refusée de créer un utilisateur administrateur');
      });


      it('post/utilisateur/creer: renvoi une erreur 500 si le mdp ne se hash pas', async () => {
        
        const bcryptStub = sinon.stub(bcrypt, 'hash').rejects(new Error('Erreur de hachage'));
      
        const response = await request(app)
          .post('/api/utilisateur/creer')
          .send({ email: 'valid@example.com', mdp: 'validpassword', mdp_repeat: 'validpassword', prenom: 'Néïs', admin: false });
      
        expect(response.status).toBe(500); 
        expect(response.body).toHaveProperty('error', 'Erreur de hachage');
      
        
        bcryptStub.restore();
      });

      it('post/utilisateur/creer: renvoie une erreur 500 si le mail nest pas au bon format', async () => {
        const response = await request(app)
          .post('/api/utilisateur/creer')
          .send({ email: 'invalid_email', mdp: 'validpassword', mdp_repeat: 'validpassword', prenom: 'Néïs', admin: false });
      
        expect(response.status).toBe(500); 
        
      });
  
      it('post/utilisateur/creer: retourne 201 si la création du compte est ok avec hash du mdp', async () => {
        const email = 'valid@example.com';
        const password = 'password';
        const response = await request(app)
          .post('/api/utilisateur/creer')
          .send({ email, mdp: password, mdp_repeat: password, prenom: 'Néïs' });
      
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Utilisateur créé');
      
        const utilisateur = await Utilisateur.findOne({ email });
      
        const isPasswordHashed = await bcrypt.compare(password, utilisateur.mdp);
        expect(isPasswordHashed).toBe(true);
      });
      
  
  
  });
  