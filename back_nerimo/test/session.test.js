import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Utilisateur from "../models/Utilisateur.js";
import { describe, it, expect, beforeEach, afterAll, vi } from "vitest";
import request from "supertest";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Planete from "../models/Planete.js";
import Personnage from "../models/Personnage.js";
import sessionRoutes from "../routes/sessionRoutes";
import Session from "../models/Session.js";

dotenv.config({ path: ".env.test" });

const app = express();
app.use(express.json());
app.use("/api/session", sessionRoutes());
let tokenAdmin;
let tokenNonAdmin;
let utilisateurAdminId;
let utilisateurAdminPrenom;
let utilisateurNonAdminId;
let planeteId;
let personnageId;
let sessionAdmin;
let sessionNonAdmin;

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  await Utilisateur.deleteMany({});

  const nouvelUtilisateurNonAdmin = new Utilisateur({
    prenom: "Non admin",
    email: "nonadmin@example.com",
    mdp: await bcrypt.hash("motdepasse", 10),
    admin: false,
  });
  const utilisateurNonAdmin = await nouvelUtilisateurNonAdmin.save();
  utilisateurNonAdminId = utilisateurNonAdmin._id;

  tokenNonAdmin = jwt.sign(
    {
      utilisateurId: utilisateurNonAdmin._id,
      email: utilisateurNonAdmin.email,
      admin: utilisateurNonAdmin.admin,
    },
    process.env.JWT_SECRET
  );

  const nouvelUtilisateurAdmin = new Utilisateur({
    prenom: "Admin",
    email: "admin@example.com",
    mdp: await bcrypt.hash("motdepasse", 10),
    admin: true,
  });
  const utilisateurAdmin = await nouvelUtilisateurAdmin.save();

  utilisateurAdminId = utilisateurAdmin._id;
  utilisateurAdminPrenom = utilisateurAdmin.prenom;

  tokenAdmin = jwt.sign(
    {
      utilisateurId: utilisateurAdmin._id,
      email: utilisateurAdmin.email,
      admin: utilisateurAdmin.admin,
    },
    process.env.JWT_SECRET
  );

  const planete = new Planete({ nom: "Terre", description: "couocu terre" });
  await planete.save();
  planeteId = planete._id;

  const personnage = new Personnage({
    nom: "Héros",
    description: "personnage",
    nomHistoire: "histoire personne",
    histoire: "histoire personage",
    planeteRef: planeteId,
  });
  await personnage.save();
  personnageId = personnage._id;

  const nouvelleSessionAdmin = new Session({
    utilisateurRef: utilisateurAdminId,
    planeteRef: planeteId,
    personnageRef: personnageId,
    sauvegarde: "oui",
    prenom: "Première session de l'Admin",
  });
  await nouvelleSessionAdmin.save();
  sessionAdmin = nouvelleSessionAdmin._id;

  const nouvelleSessionAdmin2 = new Session({
    utilisateurRef: utilisateurAdminId,
    planeteRef: planeteId,
    personnageRef: personnageId,
    choixSauvegarde: "choix non sauvegardé 1",
    texteSauvegarde: "texte non sauvegardé 1",
    prenom: "Deuxième session de l'Admin",
  });
  await nouvelleSessionAdmin2.save();

  const nouvelleSessionNonAdmin = new Session({
    utilisateurRef: utilisateurNonAdminId,
    planeteRef: planeteId,
    personnageRef: personnageId,
    choixSauvegarde: "choix non sauvegardé 2",
    texteSauvegarde: "texte non sauvegardé 2",
    prenom: "Première session du non Admin",
  });
  await nouvelleSessionNonAdmin.save();
  sessionNonAdmin = nouvelleSessionNonAdmin._id;
});

afterAll(async () => {
  await Utilisateur.deleteMany({});
  await Planete.deleteMany({});
  await Personnage.deleteMany({});
  await Session.deleteMany({});
  await mongoose.disconnect();
});

describe("POST /api/session/creer", () => {
  it("post/session/creer: Crée une session avec des références valides", async () => {
    const response = await request(app)
      .post("/api/session/creer")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({
        planeteRef: planeteId,
        personnageRef: personnageId,
        sauvegarde: "oui",
        prenom: "Néïs session",
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Session créée");
    expect(response.body.data).toHaveProperty(
      "utilisateurRef",
      utilisateurAdminId.toString()
    );
    expect(response.body.data).toHaveProperty("planeteRef", String(planeteId));
    expect(response.body.data).toHaveProperty(
      "personnageRef",
      String(personnageId)
    );

    const session = await Session.findById(response.body.data._id);
    expect(session).not.toBeNull();
    expect(session.utilisateurRef.toString()).toBe(
      utilisateurAdminId.toString()
    );
    expect(session.planeteRef.toString()).toBe(planeteId.toString());
    expect(session.personnageRef.toString()).toBe(personnageId.toString());
  });
  it("retourne 404 si la planète n'est pas trouvée", async () => {
    const invalidPlaneteId = "60d5f9f2f7c5f084c5a2b5e5";
    const response = await request(app)
      .post("/api/session/creer")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({
        planeteRef: invalidPlaneteId,
        personnageRef: personnageId,
        sauvegarde: "oui",
        prenom: "Néïs session",
      });

    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Planète non trouvée");
  });
  it("retourne 404 si le personnage n'est pas trouvé", async () => {
    const invalidPersonnageId = "60d5f9f2f7c5f084c5a2b5e5";
    const response = await request(app)
      .post("/api/session/creer")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({
        planeteRef: planeteId,
        personnageRef: invalidPersonnageId,
        sauvegarde: "oui",
        prenom: "Néïs session",
      });

    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Personnage non trouvé");
  });
  it("retourne 500 si une erreur se produit lors de la création de la session", async () => {
    const saveMock = vi
      .spyOn(Session.prototype, "save")
      .mockImplementation(() => {
        throw new Error("Erreur simulée lors de la sauvegarde");
      });
    const response = await request(app)
      .post("/api/session/creer")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({
        planeteRef: planeteId,
        personnageRef: personnageId,
        sauvegarde: "oui",
        prenom: "Néïs session",
      });

    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Erreur simulée lors de la sauvegarde");
    saveMock.mockRestore();
  });
});

describe("GET /api/session", () => {
  it("get/session/: Récupère les 2 sessions de l’utilisateur connecté", async () => {
    const response = await request(app)
      .get("/api/session")
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Liste des sessions");
    expect(response.body.data).toHaveLength(2);
    expect(response.body.data[0]).toHaveProperty(
      "_id",
      sessionAdmin.toString()
    );
    expect(response.body.data[0]).toHaveProperty(
      "utilisateurRef",
      expect.objectContaining({
        _id: utilisateurAdminId.toString(),
        prenom: utilisateurAdminPrenom.toString(),
      })
    );

    expect(response.body.data[0]).toHaveProperty("planeteRef");
    expect(response.body.data[0].planeteRef).toHaveProperty(
      "_id",
      planeteId.toString()
    );
    expect(response.body.data[0]).toHaveProperty("personnageRef");
    expect(response.body.data[0].personnageRef).toHaveProperty(
      "_id",
      personnageId.toString()
    );
  });
  it("retourne 500 si une erreur se produit lors de la récupération des sessions", async () => {
    const findMock = vi.spyOn(Session, "find").mockImplementation(() => {
      throw new Error("Erreur simulée lors de la récupération des sessions");
    });

    const response = await request(app)
      .get("/api/session")
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      "Erreur simulée lors de la récupération des sessions"
    );

    findMock.mockRestore();
  });

  it("get/session/{id}: Renvoi une erreur 404 si lutilisateur veut récupérer une session qui nest pas la sienne", async () => {
    const response = await request(app)
      .get(`/api/session/${sessionNonAdmin}`)
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Session non trouvée");
  });
  it("get/session/{id}: retourne 500 si une erreur se produit lors de la récupération de la session", async () => {
    const findOneMock = vi.spyOn(Session, "findOne").mockImplementation(() => {
      throw new Error("Erreur simulée lors de la récupération de la session");
    });

    const response = await request(app)
      .get(`/api/session/${sessionNonAdmin}`)
      .set("Authorization", `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      "Erreur simulée lors de la récupération de la session"
    );
    findOneMock.mockRestore();
  });
  it("get/session/{id}: retourne 200 et les détails de la session si la session existe", async () => {
    const response = await request(app)
      .get(`/api/session/${sessionAdmin}`)
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Paramètre d'une session");
    expect(response.body.data).toBeDefined();
    expect(response.body.data.planeteRef).toBeDefined();
    expect(response.body.data.personnageRef).toBeDefined();
  });
});

describe("PUT /api/session/:id", () => {
  it("PUT /api/session/{id}: Met à jour une session existante avec des champs valides", async () => {
    const updatedData = {
      choixSauvegarde: "choix sauvegardé",
      texteSauvegarde: "texte sauvegardé",
    };

    const response = await request(app)
      .put(`/api/session/${sessionAdmin}`)
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Session mise à jour");
    expect(response.body.data).toHaveProperty(
      "choixSauvegarde",
      updatedData.choixSauvegarde
    );
    expect(response.body.data).toHaveProperty(
      "texteSauvegarde",
      updatedData.texteSauvegarde
    );

    const session = await Session.findById(sessionAdmin);
    expect(session).not.toBeNull();
    expect(session.choixSauvegarde).toBe(updatedData.choixSauvegarde);
    expect(session.texteSauvegarde).toBe(updatedData.texteSauvegarde);
  });

  it("PUT /api/session/{id}: Retourne une erreur 404 si la session n'existe pas", async () => {
    const updatedData = { prenom: "Session inconnue" };

    const response = await request(app)
      .put(`/api/session/${sessionNonAdmin}`)
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send(updatedData);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Session non trouvée");
  });
  it("retourne 500 si une erreur se produit lors de la mise à jour de la session", async () => {
    const findOneAndUpdateMock = vi
      .spyOn(Session, "findOneAndUpdate")
      .mockImplementation(() => {
        throw new Error("Erreur simulée lors de la mise à jour de la session");
      });

    const updatedData = {
      choixSauvegarde: "oui",
      texteSauvegarde: "texte modifié",
    };

    const response = await request(app)
      .put(`/api/session/${sessionAdmin}`)
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send(updatedData);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      "Erreur simulée lors de la mise à jour de la session"
    );

    findOneAndUpdateMock.mockRestore();
  });
});

describe("DEL /api/session/{id}", () => {
  it("del/utilisateur/{id}: retourne 200 si un utilisateur veut supprimer une session", async () => {
    const response = await request(app)
      .delete(`/api/session/${sessionNonAdmin}`)
      .set("Authorization", `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Session supprimée");
    expect(response.body.data).toBeDefined();
  });

  it("del/utilisateur/{id}: retourne 404 si un utilisateur veut supprimer une session qui ne lui appartient pas", async () => {
    const response = await request(app)
      .delete(`/api/session/${sessionAdmin}`)
      .set("Authorization", `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Session non trouvée");
  });
  it("del/utilisateur/{id}: retourne 401 si le token est invalide au niveau du format", async () => {
    const response = await request(app)
      .delete(`/api/session/${sessionAdmin}`)
      .set("Authorization", "Bearer123 invalid_token");

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Format de jeton invalide");
  });
  it("del/utilisateur/{id}: retourne 401 si token manquant", async () => {
    const response = await request(app).delete(`/api/session/${sessionAdmin}`);

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Token manquant");
  });
  it("retourne 500 si une erreur se produit lors de la suppression de la session", async () => {
    const findOneAndDeleteMock = vi
      .spyOn(Session, "findOneAndDelete")
      .mockImplementation(() => {
        throw new Error("Erreur simulée lors de la suppression de la session");
      });

    const response = await request(app)
      .delete(`/api/session/${sessionAdmin}`)
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      "Erreur simulée lors de la suppression de la session"
    );

    findOneAndDeleteMock.mockRestore();
  });
});
