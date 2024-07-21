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
import Planete from '../models/Planete.js';
import Personnage from '../models/Personnage.js';
import sessionRoutes from '../routes/sessionRoutes';
import Session from '../models/Session.js';

dotenv.config({ path: '.env.test' });

const app = express();
app.use(express.json());
app.use('/api/session', sessionRoutes());
let tokenAdmin; 
let tokenNonAdmin;
let adminId; 
let adminPrenom;
let nonAdminId;
let planeteId;
let personnageId;
let sessionAdmin;
let sessionNonAdmin;

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Utilisateur.deleteMany({});

  const nonAdminUser = new Utilisateur({
    prenom:"Non admin",
    email: 'nonadmin@example.com',
    mdp: await bcrypt.hash('motdepasse', 10),
    admin: false,
  });
  const nonAdmin = await nonAdminUser.save();
  nonAdminId = nonAdmin._id;

  tokenNonAdmin = jwt.sign(
    { userId: nonAdmin._id, email: nonAdmin.email, admin: nonAdmin.admin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  const adminUser = new Utilisateur({
    prenom: "Admin",
    email: 'admin@example.com',
    mdp: await bcrypt.hash('motdepasse', 10),
    admin: true,
  });
  const admin = await adminUser.save();

  adminId = admin._id;
  adminPrenom = admin.prenom;

  tokenAdmin = jwt.sign(
    { userId: admin._id, email: admin.email, admin: admin.admin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  const planete = new Planete({ nom: 'Terre', description:'couocu terre' });
  await planete.save();
  planeteId = planete._id;

  const personnage = new Personnage({ nom: 'Héros', description: 'personnage', nomHistoire:'histoire personne', histoire: 'histoire personage', planeteRef:planeteId});
  await personnage.save();
  personnageId = personnage._id;

  const sessionAdmin1 = new Session({
    utilisateurRef: adminId,
    planeteRef: planeteId,
    personnageRef: personnageId,
    sauvegarde: "oui",
    prenom: "Première session de l'Admin"
    });
    await sessionAdmin1.save();
    sessionAdmin = sessionAdmin1._id;

    const sessionAdmin2 = new Session({
        utilisateurRef: adminId,
        planeteRef: planeteId,
        personnageRef: personnageId,
        sauvegarde: "oui",
        prenom: "Deuxième session de l'Admin"
      });
      await sessionAdmin2.save();


    const sessionNonAdmin1 = new Session({
        utilisateurRef: nonAdminId,
        planeteRef: planeteId,
        personnageRef: personnageId,
        sauvegarde: "oui",
        prenom: "Troisième session du non Admin"
      });
      await sessionNonAdmin1.save();
      sessionNonAdmin = sessionNonAdmin1._id;



});

afterAll(async () => {
    await Utilisateur.deleteMany({});
    await Planete.deleteMany({});
    await Personnage.deleteMany({});
    await Session.deleteMany({});
  await mongoose.disconnect();
});

describe('POST /api/session/creer', () => {
    it('post/session/creer: Crée une session avec des références valides', async () => {
        const response = await request(app)
          .post('/api/session/creer')
          .set('Authorization', `Bearer ${tokenAdmin}`)
          .send({ planeteRef: planeteId, personnageRef: personnageId, sauvegarde:"oui", prenom:"Néïs session" });
    
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Session créée');
        expect(response.body.data).toHaveProperty('utilisateurRef', adminId.toString());
        expect(response.body.data).toHaveProperty('planeteRef', String(planeteId));
        expect(response.body.data).toHaveProperty('personnageRef', String(personnageId));
    
        const session = await Session.findById(response.body.data._id);
        expect(session).not.toBeNull();
        expect(session.utilisateurRef.toString()).toBe(adminId.toString());
        expect(session.planeteRef.toString()).toBe(planeteId.toString());
        expect(session.personnageRef.toString()).toBe (personnageId.toString());
      
    });
});

describe('GET /api/session', () => {
    it('get/session/: Récupère les sessions de l’utilisateur connecté', async () => {
        const response = await request(app)
            .get('/api/session')
            .set('Authorization', `Bearer ${tokenAdmin}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Liste des sessions');
        expect(response.body.data).toHaveLength(2);
        expect(response.body.data[0]).toHaveProperty('_id', sessionAdmin.toString());
        expect(response.body.data[0]).toHaveProperty('utilisateurRef', expect.objectContaining({
          _id: adminId.toString(),
          prenom: adminPrenom.toString(),
      }));
      
        expect(response.body.data[0]).toHaveProperty('planeteRef');
        expect(response.body.data[0].planeteRef).toHaveProperty('_id', planeteId.toString());
        expect(response.body.data[0]).toHaveProperty('personnageRef');
        expect(response.body.data[0].personnageRef).toHaveProperty('_id', personnageId.toString());
    });

   
      it('get/session/{id}: Renvoi une erreur 404 si lutilisateur veut récupérer une session qui nest pas la sienne', async () => {
          const response = await request(app)
              .get(`/api/session/${sessionNonAdmin}`)
              .set('Authorization', `Bearer ${tokenAdmin}`);
  
          expect(response.status).toBe(404);
          expect(response.body.message).toBe('Session non trouvée');

      });
});

describe('DEL /api/session/{id}', () => {
    it('del/utilisateur/{id}: retourne 200 si un utilisateur veut supprimer une session', async () => {
        const response = await request(app)
        .delete(`/api/session/${sessionNonAdmin}`)
        .set('Authorization', `Bearer ${tokenNonAdmin}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Session supprimée');
        expect(response.body.data).toBeDefined(); 
    });

    it('del/utilisateur/{id}: retourne 404 si un utilisateur veut supprimer une session qui ne lui appartient pas', async () => {
        const response = await request(app)
        .delete(`/api/session/${sessionAdmin}`)
        .set('Authorization', `Bearer ${tokenNonAdmin}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Session non trouvée');
        
    });
});

describe('PUT /api/session/:id', () => {
  it('PUT /api/session/{id}: Met à jour une session existante avec des champs valides', async () => {
    const updatedData = { prenom: "Néïs session modifiée", sauvegarde: "non" };

    const response = await request(app)
      .put(`/api/session/${sessionAdmin}`)
      .set('Authorization', `Bearer ${tokenAdmin}`)
      .send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Session mise à jour');
    expect(response.body.data).toHaveProperty('prenom', updatedData.prenom);
    expect(response.body.data).toHaveProperty('sauvegarde', updatedData.sauvegarde);

    const session = await Session.findById(sessionAdmin);
    expect(session).not.toBeNull();
    expect(session.prenom).toBe(updatedData.prenom);
    expect(session.sauvegarde).toBe(updatedData.sauvegarde);
  });

  it('PUT /api/session/{id}: Retourne une erreur 404 si la session n\'existe pas', async () => {
    const updatedData = { prenom: "Session inconnue" };

    const response = await request(app)
      .put(`/api/session/${sessionNonAdmin}`)
      .set('Authorization', `Bearer ${tokenAdmin}`)
      .send(updatedData);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Session non trouvée');
  });

});

