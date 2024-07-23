import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Utilisateur from '../models/Utilisateur.js';
import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import planeteRoutes from '../routes/planeteRoutes.js';
import Planete from '../models/Planete.js';

dotenv.config({ path: '.env.test' });

const app = express();
app.use(express.json());
app.use('/api/planete', planeteRoutes());
let tokenAdmin; 
let tokenNonAdmin;
let utilisateurAdminId; 
let utilisateurNonAdminId;
let planeteId;

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Utilisateur.deleteMany({});

  const nouvelleUtilisateurNonAdmin = new Utilisateur({
    prenom:"Non admin",
    email: 'nonadmin@example.com',
    mdp: await bcrypt.hash('motdepasse', 10),
    admin: false,
  });
  const utilisateurNonAdmin = await nouvelleUtilisateurNonAdmin.save();
  utilisateurNonAdminId = utilisateurNonAdmin._id;

  tokenNonAdmin = jwt.sign(
    { userId: utilisateurNonAdmin._id, email: utilisateurNonAdmin.email, admin: utilisateurNonAdmin.admin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  const nouvelleUtilisateurAdmin = new Utilisateur({
    prenom: "Admin",
    email: 'admin@example.com',
    mdp: await bcrypt.hash('motdepasse', 10),
    admin: true,
  });
  const utilisateurAdmin = await nouvelleUtilisateurAdmin.save();
  utilisateurAdminId = utilisateurAdmin._id;

  tokenAdmin = jwt.sign(
    { userId: utilisateurAdmin._id, email: utilisateurAdmin.email, admin: utilisateurAdmin.admin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  const nouvellePlanete = new Planete({
    nom: "planete",
    description:"coucou planete",
  });
  const planete = await nouvellePlanete.save(); 
  planeteId = planete._id;

});


afterAll(async () => {
    await Planete.deleteMany({});
    await Utilisateur.deleteMany({});
  await mongoose.disconnect();
});

describe('POST /api/planete/creer', () => {
    it('post/planete/creer: retourne 201 si lutilisateur créateur est admin', async () => {
    
      const response = await request(app)
        .post('/api/planete/creer')
        .set('Authorization', `Bearer ${tokenAdmin}`)
        .send({ nom: "planete", description:"description de la planète" });
  
      expect(response.status).toBe(201);
      expect(response.body.message).toBe('Planète créée');
      expect(response.body.data).toBeDefined(); 
    });
  
    it('post/planete/creer: retourne une erreur 403 si lutilisateur créateur est non admin', async () => {
        const response = await request(app)
        .post('/api/planete/creer')
        .set('Authorization', `Bearer ${tokenNonAdmin}`)
        .send({ nom: "planete", description:"description de la planète" });
  
    
      expect(response.status).toBe(403);
      expect(response.body.message).toBe("Erreur, Vous n'êtes pas autorisé à effectuer cette action");
    });
});

describe('PUT /api/planete/{id}', () => {
    it('put/planete/{id}: retourne 200 si lutilisateur créateur est admin', async () => {
      const response = await request(app)
        .put(`/api/planete/${planeteId}`)
        .set('Authorization', `Bearer ${tokenAdmin}`)
        .send({nom: "modification nom planète"});

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Planète mise à jour');
        expect(response.body.data).toBeDefined(); 
        expect(response.body.data.nom).toBe('modification nom planète'); 
    });
  
    it('put/planete/{id}: retourne 404 si lutilisateur créateur est non admin', async () => {
        const response = await request(app)
          .put(`/api/planete/${planeteId}`)
          .set('Authorization', `Bearer ${tokenNonAdmin}`)
          .send({nom: "modification nom planète"});
  
          expect(response.status).toBe(403);
          expect(response.body.message).toBe("Erreur, Vous n'êtes pas autorisé à effectuer cette action");
          
         
      });
});

describe('DEL /api/planete/{id}', () => {
    it('del/planete/{id}: retourne 200 si lutilisateur est admin', async () => {
      const response = await request(app)
        .delete(`/api/planete/${planeteId}`)
        .set('Authorization', `Bearer ${tokenAdmin}`)
       

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Planète supprimée');
        expect(response.body.data).toBeDefined(); 
      
    });
  
    it('del/planete/{id}: retourne 404 si lutilisateur est non admin', async () => {
        const response = await request(app)
          .delete(`/api/planete/${planeteId}`)
          .set('Authorization', `Bearer ${tokenNonAdmin}`)
       
          expect(response.status).toBe(403);
          expect(response.body.message).toBe("Erreur, Vous n'êtes pas autorisé à effectuer cette action");
      });
});

describe('GET /api/planete', () => {
    it('get/api/planete: retourne 200 avec la liste des planètes', async () => {
       
      const response = await request(app)
        .get('/api/planete')
        .set('Authorization', `Bearer ${tokenNonAdmin}`);
  
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Liste des planètes');
      expect(response.body.data).toBeDefined();
      expect(response.body.data[0]).toHaveProperty('nom', 'planete');
      expect(response.body.data[0]).toHaveProperty('description', 'coucou planete');
    });
    it('get/api/planete: retourne 401 si lutilisateur nest pas connecté', async () => {
        const response = await request(app)
          .get('/api/planete')
         
        expect(response.status).toBe(401);
      });
  });
  
  describe('GET /api/planete/:id', () => {
    it('get/api/planete/{id}: retourne 200 avec les détails de la planète', async () => {
      const response = await request(app)
        .get(`/api/planete/${planeteId}`)
        .set('Authorization', `Bearer ${tokenNonAdmin}`);
  
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Paramètre d/une planète');
      expect(response.body.data).toBeDefined();
      expect(response.body.data).toHaveProperty('nom', 'planete');
      expect(response.body.data).toHaveProperty('description', 'coucou planete');
    });
  

});