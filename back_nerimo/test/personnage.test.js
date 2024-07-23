import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Utilisateur from '../models/Utilisateur.js';
import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import personnageRoutes from '../routes/personnageRoutes.js';
import Planete from '../models/Planete.js';
import Personnage from '../models/Personnage.js';

dotenv.config({ path: '.env.test' });

const app = express();
app.use(express.json());
app.use('/api/personnage', personnageRoutes());
let tokenAdmin;
let tokenNonAdmin;
let utilisateurAdminId;
let utilisateurNonAdminId;
let planeteId;
let personnageId;

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  await Utilisateur.deleteMany({});
  await Personnage.deleteMany({});

  const nouvelUtilisateurNonAdmin = new Utilisateur({
    prenom: "Non admin",
    email: 'nonadmin@example.com',
    mdp: await bcrypt.hash('motdepasse', 10),
    admin: false,
  });
  const utilisateurNonAdmin = await nouvelUtilisateurNonAdmin.save();
  utilisateurNonAdminId = utilisateurNonAdmin._id;

  tokenNonAdmin = jwt.sign(
    { utilisateurId: utilisateurNonAdmin._id, email: utilisateurNonAdmin.email, admin: utilisateurNonAdmin.admin },
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
    { utilisateurId: utilisateurAdmin._id, email: utilisateurAdmin.email, admin: utilisateurAdmin.admin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  const nouvellePlanete = new Planete({
    nom: "planete",
    description: "coucou planete",
  });
  const planete = await nouvellePlanete.save();
  planeteId = planete._id;

  const nouveauPersonnage = new Personnage({
    nom: "Personnage test crée",
    description: "description personnage",
    nomHistoire: "nom de l'histoire",
    histoire: "il était une fois",
    planeteRef: planeteId

  });
  const personnage = await nouveauPersonnage.save();
  personnageId = personnage._id;
});



afterAll(async () => {
  await Personnage.deleteMany({});
  await Planete.deleteMany({});
  await Utilisateur.deleteMany({});
  await mongoose.disconnect();
});

describe('POST /api/personnage/creer', () => {
  it('post/api/personnage/creer: retourne 201 si lutilisateur créateur est admin', async () => {
    const response = await request(app)
      .post('/api/personnage/creer')
      .set('Authorization', `Bearer ${tokenAdmin}`)
      .send({
        nom: "Personnage test crée",
        description: "description personnage",
        nomHistoire: "nom de l'histoire",
        histoire: "il était une fois",
        planeteRef: planeteId
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Personnage créée');
    expect(response.body.data).toBeDefined();
    expect(response.body.data.nom).toBe("Personnage test crée");
    expect(response.body.data.description).toBe("description personnage");
    expect(response.body.data.nomHistoire).toBe("nom de l'histoire");
    expect(response.body.data.histoire).toBe("il était une fois");
    expect(response.body.data.planeteRef).toBe(planeteId.toString());
  });

  it('post/api/personnage/creer: retourne 500 si le planeteRef ne correspond à rien', async () => {
    const response = await request(app)
      .post('/api/personnage/creer')
      .set('Authorization', `Bearer ${tokenAdmin}`)
      .send({
        nom: "Personnage test crée",
        description: "description personnage",
        nomHistoire: "nom de l'histoire",
        histoire: "il était une fois",
        planeteRef: "123"
      });

    expect(response.status).toBe(500);

  });

  it('post/api/personnage/creer: retourne une erreur 403 si lutilisateur créateur est non admin', async () => {
    const response = await request(app)
      .post('/api/personnage/creer')
      .set('Authorization', `Bearer ${tokenNonAdmin}`)
      .send({
        nom: "Personnage test crée",
        description: "description personnage",
        nomHistoire: "nom de l'histoire",
        histoire: "il était une fois",
        planeteRef: planeteId
      });

    expect(response.status).toBe(403);
    expect(response.body.message).toBe("Erreur, Vous n'êtes pas autorisé à effectuer cette action");
  });
});

describe('GET /api/personnage', () => {
  it('get/api/personnage : retourne 200 avec la liste des personnages', async () => {
    const response = await request(app)
      .get('/api/personnage')
      .set('Authorization', `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Liste des personnages');
    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBeGreaterThan(0);
    expect(response.body.data[0].nom).toBe("Personnage test crée");
    expect(response.body.data[0].description).toBe("description personnage");
    expect(response.body.data[0].planeteRef).toBeDefined();

  });

  it('get/api/personnage : retourne 401 si token manquant', async () => {
    const response = await request(app)
      .get('/api/personnage')
      .set('Authorization', `Bearer ${123}`);

    expect(response.status).toBe(401);
  });

  it('get/api/personnage : retourne 200 avec la liste des personnages pour la planète sélectionnée', async () => {
    const response = await request(app)
      .get(`/api/personnage/${planeteId}`)
      .set('Authorization', `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Liste des personnages pour la planète sélectionnée');
    expect(response.body.data[0].nom).toBe("Personnage test crée");

  });
});

describe('PUT /api/personnage/:id', () => {
  it('put/api/personnage/{id}: retourne 200 si lutilisateur est admin et que les champs sont correctement mis à jour', async () => {
    const response = await request(app)
      .put(`/api/personnage/${personnageId}`)
      .set('Authorization', `Bearer ${tokenAdmin}`)
      .send({ nom: "Personnage Modifié", description: "description modifiée" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Personnage mis à jour');
    expect(response.body.data).toBeDefined();
    expect(response.body.data.nom).toBe("Personnage Modifié");
    expect(response.body.data.description).toBe("description modifiée");
  });

  it('put/api/personnage/{id}: retourne une erreur 403 si lutilisateur est non admin', async () => {
    const response = await request(app)
      .put(`/api/personnage/${personnageId}`)
      .set('Authorization', `Bearer ${tokenNonAdmin}`)
      .send({ nom: "Personnage Modifié", description: "description modifiée" });

    expect(response.status).toBe(403);
    expect(response.body.message).toBe("Erreur, Vous n'êtes pas autorisé à effectuer cette action");
  });

  it('put/api/personnage/{id}: retourne une erreur 404 si le personnage n\'existe pas', async () => {
    const fauxPersonnageId = new mongoose.Types.ObjectId();
    const response = await request(app)
      .put(`/api/personnage/${fauxPersonnageId}`)
      .set('Authorization', `Bearer ${tokenAdmin}`)
      .send({ nom: "Personnage Modifié", description: "description modifiée" });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Personnage non trouvé");
  });
});

describe('DELETE /api/personnage/:id', () => {
  it('del/api/personnage/{id}: retourne 200 si lutilisateur est admin et que le personnage est supprimé', async () => {
    const response = await request(app)
      .delete(`/api/personnage/${personnageId}`)
      .set('Authorization', `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Personnage supprimé');
    expect(response.body.data).toBeDefined();
    expect(response.body.data._id).toBe(personnageId.toString());
  });

  it('del/api/personnage/{id}: retourne une erreur 403 si lutilisateur est non admin', async () => {
    const response = await request(app)
      .delete(`/api/personnage/${personnageId}`)
      .set('Authorization', `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(403);
    expect(response.body.message).toBe("Erreur, Vous n'êtes pas autorisé à effectuer cette action");
  });

  it('del/api/personnage/{id}: retourne une erreur 404 si le personnage n\'existe pas', async () => {
    const fauxPersonnageId = new mongoose.Types.ObjectId();
    const response = await request(app)
      .delete(`/api/personnage/${fauxPersonnageId}`)
      .set('Authorization', `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Personnage non trouvé");
  });
});

