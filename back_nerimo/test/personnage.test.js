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
import personnageRoutes from '../routes/personnageRoutes.js';
import Planete from '../models/Planete.js';
import Personnage from '../models/Personnage.js';

dotenv.config({ path: '.env.test' });

const app = express();
app.use(express.json());
app.use('/api/personnage', personnageRoutes());
let tokenAdmin; 
let tokenNonAdmin;
let adminId; 
let nonAdminId;
let planeteId;
let personnageId;


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

  tokenAdmin = jwt.sign(
    { userId: admin._id, email: admin.email, admin: admin.admin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  const planete = new Planete({
    nom: "planete",
    description:"coucou planete",
  });
  const planete1 = await planete.save(); 
  planeteId = planete1._id;

const personnage = new Personnage({
    nom: "Perso",
    description: "description perso",
    nomHistoire:"il était une fois",
    histoire:"coucou",
    planeteRef:planeteId,

});
const personnage1 = await personnage.save();
personnageId=personnage1._id;
});



afterAll(async () => {
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
          nom: "Perso", 
          description: "description perso", 
          nomHistoire: "nom de l'histoire", 
          histoire: "coucou", 
          planeteRef: planeteId 
        });
  
      expect(response.status).toBe(201);
      expect(response.body.message).toBe('Personnage créée');
      expect(response.body.data).toBeDefined(); 
      expect(response.body.data.nom).toBe("Perso");
      expect(response.body.data.description).toBe("description perso");
      expect(response.body.data.nomHistoire).toBe("nom de l'histoire");
      expect(response.body.data.histoire).toBe("coucou");
      expect(response.body.data.planeteRef).toBe(planeteId.toString());
    });

    it('post/api/personnage/creer: retourne 500 si le planeteRef ne correspond à rien', async () => {
        const response = await request(app)
          .post('/api/personnage/creer')
          .set('Authorization', `Bearer ${tokenAdmin}`)
          .send({ 
            nom: "Perso", 
            description: "description perso", 
            nomHistoire: "nom de l'histoire", 
            histoire: "coucou", 
            planeteRef: "123" 
          });
    
        expect(response.status).toBe(500);

      });
  
    it('post/api/personnage/creer: retourne une erreur 403 si lutilisateur créateur est non admin', async () => {
      const response = await request(app)
        .post('/api/personnage/creer')
        .set('Authorization', `Bearer ${tokenNonAdmin}`)
        .send({ 
          nom: "Perso", 
          description: "description perso", 
          nomHistoire: "nom de l'histoire", 
          histoire: "coucou", 
          planeteRef: planeteId 
        });
  
      expect(response.status).toBe(403);
      expect(response.body.message).toBe("Erreur, Vous n'êtes pas autorisé à effectuer cette action");
    });
  });

  describe('PUT /api/personnage/:id', () => {
    it('put/api/personnage/{id}: retourne 200 si lutilisateur est admin et que les champs sont correctement mis à jour', async () => {
      const response = await request(app)
        .put(`/api/personnage/${personnageId}`)
        .set('Authorization', `Bearer ${tokenAdmin}`)
        .send({ nom: "Perso Modifié", description: "description modifiée" });
  
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Personnage mis à jour');
      expect(response.body.data).toBeDefined();
      expect(response.body.data.nom).toBe("Perso Modifié");
      expect(response.body.data.description).toBe("description modifiée");
    });
  
    it('put/api/personnage/{id}: retourne une erreur 403 si lutilisateur est non admin', async () => {
      const response = await request(app)
        .put(`/api/personnage/${personnageId}`)
        .set('Authorization', `Bearer ${tokenNonAdmin}`)
        .send({ nom: "Perso Modifié", description: "description modifiée" });
  
      expect(response.status).toBe(403);
      expect(response.body.message).toBe("Erreur, Vous n'êtes pas autorisé à effectuer cette action");
    });
  
    it('put/api/personnage/{id}: retourne une erreur 404 si le personnage n\'existe pas', async () => {
      const fakePersonnageId = new mongoose.Types.ObjectId();
      const response = await request(app)
        .put(`/api/personnage/${fakePersonnageId}`)
        .set('Authorization', `Bearer ${tokenAdmin}`)
        .send({ nom: "Perso Modifié", description: "description modifiée" });
  
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
      const fakePersonnageId = new mongoose.Types.ObjectId();
      const response = await request(app)
        .delete(`/api/personnage/${fakePersonnageId}`)
        .set('Authorization', `Bearer ${tokenAdmin}`);
  
      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Personnage non trouvé");
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
      expect(response.body.data[0].nom).toBe("Perso");
      expect(response.body.data[0].description).toBe("description perso");
      expect(response.body.data[0].planeteRef).toBeDefined();
   
    });

    it('get/api/personnage : retourne 200 avec la liste des personnages', async () => {
        const response = await request(app)
          .get('/api/personnage')
          .set('Authorization', `Bearer ${123}`);
    
        expect(response.status).toBe(401);
      });
  
      it('get/api/personnage : retourne 200 avec le paramètre du personnage', async () => {
        const response = await request(app)
          .get(`/api/personnage/${personnageId}`)
          .set('Authorization', `Bearer ${tokenNonAdmin}`);
    
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Paramètre du personnage');
     
      });
  });