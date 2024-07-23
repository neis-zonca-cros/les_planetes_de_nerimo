import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Utilisateur from '../models/Utilisateur.js';
import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import utilisateurRoutes from '../routes/utilisateurRoutes.js';

dotenv.config({ path: '.env.test' });

const app = express();
app.use(express.json());
app.use('/api/utilisateur', utilisateurRoutes());
let tokenAdmin;
let tokenNonAdmin;
let utilisateurAdminId;
let utilisateurNonAdminId;

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  await Utilisateur.deleteMany({});

  const nouvelUtilisateurNonAdmin = new Utilisateur({
    prenom: "Non admin",
    email: 'nonadmin@example.com',
    mdp: await bcrypt.hash('motdepasse', 10),
    admin: false,
  });
  const utilisateurNonAdmin = await nouvelUtilisateurNonAdmin.save();
  utilisateurNonAdminId = utilisateurNonAdmin._id;

  tokenNonAdmin = jwt.sign(
    { userId: utilisateurNonAdmin._id, email: utilisateurNonAdmin.email, admin: utilisateurNonAdmin.admin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  const nouvelUtilisateurAdmin = new Utilisateur({
    prenom: "Admin",
    email: 'admin@example.com',
    mdp: await bcrypt.hash('motdepasse', 10),
    admin: true,
  });
  const utilisateurAdmin = await nouvelUtilisateurAdmin.save();
  utilisateurAdminId = utilisateurAdmin._id;

  tokenAdmin = jwt.sign(
    { userId: utilisateurAdmin._id, email: utilisateurAdmin.email, admin: utilisateurAdmin.admin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
});

afterAll(async () => {
  await Utilisateur.deleteMany({});
  await mongoose.disconnect();
});

describe('GET /api/utilisateur', () => {
  it('get/utilisateur: retourne 200 si admin', async () => {

    const response = await request(app)
      .get('/api/utilisateur')
      .set('Authorization', `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Liste des utilisateurs');
    expect(response.body.data).toBeDefined();
  });

  it('get/utilisateur: retourne une erreur 403 si lutilisateur est non admin', async () => {
    const response = await request(app)
      .get('/api/utilisateur')
      .set('Authorization', `Bearer ${tokenNonAdmin}`);


    expect(response.status).toBe(403);
    expect(response.body.message).toBe("Erreur, Vous n'êtes pas autorisé à effectuer cette action");
  });

  it('get/utilisateur/{id}: Retourne 200 si lutilisateur est admin pour un get dun autre user', async () => {
    const response = await request(app)
      .get(`/api/utilisateur/${utilisateurNonAdminId}`)
      .set('Authorization', `Bearer ${tokenAdmin}`);


    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Paramètre d\'un utilisateur");
  });

  it('get/utilisateur/{id}: Retourne erreur 403 si lutilisateur est non admin pour un get dun autre user', async () => {
    const response = await request(app)
      .get(`/api/utilisateur/${utilisateurAdminId}`)
      .set('Authorization', `Bearer ${tokenNonAdmin}`);


    expect(response.status).toBe(403);
    expect(response.body.message).toBe("Vous n'êtes pas autorisé à accéder à cet utilisateur");
  });

  it('get/utilisateur/{id}: retourne 200 si lutilisateur se get lui même', async () => {
    const response = await request(app)
      .get(`/api/utilisateur/${utilisateurNonAdminId}`)
      .set('Authorization', `Bearer ${tokenNonAdmin}`);


    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Paramètre d\'un utilisateur");
  });
});

describe('PUT /api/utilisateur', () => {
  it('put/utilisateur/{id}: retourne 200 si ladmin update un autre utilisateur', async () => {
    const response = await request(app)
      .put(`/api/utilisateur/${utilisateurNonAdminId}`)
      .set('Authorization', `Bearer ${tokenAdmin}`)
      .send({ prenom: 'Nouveau Prénom' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Utilisateur mis à jour');
    expect(response.body.data).toBeDefined();
    expect(response.body.data.prenom).toBe('Nouveau Prénom');
  });

  it('put/utilisateur/{id}: retourne 200 si un utilisateur se modifie lui même', async () => {
    const response = await request(app)
      .put(`/api/utilisateur/${utilisateurNonAdminId}`)
      .set('Authorization', `Bearer ${tokenNonAdmin}`)
      .send({ prenom: 'Nouveau Prénom' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Utilisateur mis à jour');
    expect(response.body.data).toBeDefined();
    expect(response.body.data.prenom).toBe('Nouveau Prénom');
  });

  it('put/utilisateur/{id}: retourne 403 si un non admin veut se rendre admin', async () => {
    const response = await request(app)
      .put(`/api/utilisateur/${utilisateurNonAdminId}`)
      .set('Authorization', `Bearer ${tokenNonAdmin}`)
      .send({ admin: true });

    expect(response.status).toBe(403);
    expect(response.body.error).toBe('Pas autorisé');
  });

  it('put/utilisateur/{id}: retourne 500 si admin veut update un utilisateur inexistant', async () => {
    const response = await request(app)
      .put(`/api/utilisateur/nonexistentuserid`)
      .set('Authorization', `Bearer ${tokenAdmin}`)
      .send({ prenom: 'Nouveau Prénom' });

    expect(response.status).toBe(500);

  });

  it('put/utilisateur/{id}: retourne 400 si le mdp ne match pas', async () => {
    const response = await request(app)
      .put(`/api/utilisateur/${utilisateurNonAdminId}`)
      .set('Authorization', `Bearer ${tokenNonAdmin}`)
      .send({ mdp: 'newpassword', mdp_repeat: 'differentpassword' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Les mots de passe ne correspondent pas');
  });

});

describe('DEL /api/utilisateur', () => {
  it('del/utilisateur/{id}: retourne 200 si ladmin veut supprimer un non admin', async () => {
    const response = await request(app)
      .delete(`/api/utilisateur/${utilisateurNonAdminId}`)
      .set('Authorization', `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Utilisateur supprimé');
    expect(response.body.data).toBeDefined();
  });

  it('del/utilisateur/{id}: retourne 200 si un utilisateur veut se supprimer', async () => {
    const response = await request(app)
      .delete(`/api/utilisateur/${utilisateurNonAdminId}`)
      .set('Authorization', `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Utilisateur supprimé');
    expect(response.body.data).toBeDefined();
  });

  it('del/utilisateur/{id}: retourne 403 si non admin veut supprimer un autre utilisateur', async () => {
    const response = await request(app)
      .delete(`/api/utilisateur/${utilisateurAdminId}`)
      .set('Authorization', `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(403);
    expect(response.body.message).toBe("Vous n'êtes pas autorisé à supprimer cet utilisateur");
  });

  it('del/utilisateur/{id}: retourne 500 si lutilisateur nexiste pas', async () => {
    const response = await request(app)
      .delete(`/api/utilisateur/nonexistentuserid`)
      .set('Authorization', `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(500);


  });
});

