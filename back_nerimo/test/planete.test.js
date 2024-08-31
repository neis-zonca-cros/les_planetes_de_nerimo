import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Utilisateur from "../models/Utilisateur.js";
import { describe, it, expect, beforeEach, afterAll, vi } from "vitest";
import request from "supertest";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import planeteRoutes from "../routes/planeteRoutes.js";
import Planete from "../models/Planete.js";

dotenv.config({ path: ".env.test" });

const app = express();
app.use(express.json());
app.use("/api/planete", planeteRoutes());
let tokenAdmin;
let tokenNonAdmin;
let planeteId;

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

  tokenAdmin = jwt.sign(
    {
      utilisateurId: utilisateurAdmin._id,
      email: utilisateurAdmin.email,
      admin: utilisateurAdmin.admin,
    },
    process.env.JWT_SECRET
  );

  const nouvellePlanete = new Planete({
    nom: "planete",
    description: "coucou planete",
  });
  const planete = await nouvellePlanete.save();
  planeteId = planete._id;
});

afterAll(async () => {
  await Planete.deleteMany({});
  await Utilisateur.deleteMany({});
  await mongoose.disconnect();
});

describe("POST /api/planete/creer", () => {
  it("post/planete/creer: retourne 201 si lutilisateur créateur est admin", async () => {
    const response = await request(app)
      .post("/api/planete/creer")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ nom: "planete", description: "description de la planète" });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Planète créée");
    expect(response.body.data).toBeDefined();
  });

  it("post/planete/creer: retourne une erreur 403 si lutilisateur créateur est non admin", async () => {
    const response = await request(app)
      .post("/api/planete/creer")
      .set("Authorization", `Bearer ${tokenNonAdmin}`)
      .send({ nom: "planete", description: "description de la planète" });

    expect(response.status).toBe(403);
    expect(response.body.message).toBe(
      "Erreur, Vous n'êtes pas autorisé à effectuer cette action"
    );
  });
  it("post/planete/creer: retourne une erreur 500 si la création de la planète échoue", async () => {
    const savePlanete = vi
      .spyOn(Planete.prototype, "save")
      .mockImplementationOnce(() => {
        throw new Error("Erreur de création de la planète");
      });

    const response = await request(app)
      .post("/api/planete/creer")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ nom: "planete", description: "description de la planète" });

    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Erreur de création de la planète");
    savePlanete.mockRestore();
  });
});

describe("GET /api/planete", () => {
  it("get/api/planete: retourne 200 avec la liste des planètes", async () => {
    const response = await request(app)
      .get("/api/planete")
      .set("Authorization", `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Liste des planètes");
    expect(response.body.data).toBeDefined();
    expect(response.body.data[0]).toHaveProperty("nom", "planete");
    expect(response.body.data[0]).toHaveProperty(
      "description",
      "coucou planete"
    );
  });
  it("get/api/planete: retourne 401 si lutilisateur nest pas connecté", async () => {
    const response = await request(app).get("/api/planete");

    expect(response.status).toBe(401);
  });
  it("get/api/planete: retourne 500 si une erreur se produit lors de la récupération des planètes", async () => {
    const findPlanete = vi.spyOn(Planete, "find").mockImplementationOnce(() => {
      throw new Error("Erreur de récupération des planètes");
    });

    const response = await request(app)
      .get("/api/planete")
      .set("Authorization", `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Erreur de récupération des planètes");
    findPlanete.mockRestore();
  });

  it("get/api/planete/{id}: retourne 200 avec les détails de la planète", async () => {
    const response = await request(app)
      .get(`/api/planete/${planeteId}`)
      .set("Authorization", `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Paramètre d/une planète");
    expect(response.body.data).toBeDefined();
    expect(response.body.data).toHaveProperty("nom", "planete");
    expect(response.body.data).toHaveProperty("description", "coucou planete");
  });
  it("get/api/planete/{id}: retourne 500 si une erreur se produit lors de la récupération de la planète", async () => {
    const findByIdPlanete = vi
      .spyOn(Planete, "findById")
      .mockImplementationOnce(() => {
        throw new Error("Erreur de récupération de la planète");
      });

    const response = await request(app)
      .get(`/api/planete/${planeteId}`)
      .set("Authorization", `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Erreur de récupération de la planète");
    findByIdPlanete.mockRestore();
  });
});

describe("PUT /api/planete/{id}", () => {
  it("put/planete/{id}: retourne 200 si lutilisateur créateur est admin", async () => {
    const response = await request(app)
      .put(`/api/planete/${planeteId}`)
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ nom: "modification nom planète" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Planète mise à jour");
    expect(response.body.data).toBeDefined();
    expect(response.body.data.nom).toBe("modification nom planète");
  });

  it("put/planete/{id}: retourne 404 si lutilisateur créateur est non admin", async () => {
    const response = await request(app)
      .put(`/api/planete/${planeteId}`)
      .set("Authorization", `Bearer ${tokenNonAdmin}`)
      .send({ nom: "modification nom planète" });

    expect(response.status).toBe(403);
    expect(response.body.message).toBe(
      "Erreur, Vous n'êtes pas autorisé à effectuer cette action"
    );
  });
  it("put/planete/{id}: retourne 404 si la planète n'existe pas", async () => {
    const fauxPlaneteId = new mongoose.Types.ObjectId();

    const response = await request(app)
      .put(`/api/planete/${fauxPlaneteId}`)
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ nom: "modification nom planète" });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Planète non trouvée");
  });
  it("put/planete/{id}: retourne 500 si une erreur se produit lors de la mise à jour de la planète", async () => {
    const updatePlanete = vi
      .spyOn(Planete, "findByIdAndUpdate")
      .mockImplementationOnce(() => {
        throw new Error("Erreur de mise à jour de la planète");
      });

    const response = await request(app)
      .put(`/api/planete/${planeteId}`)
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ nom: "modification nom planète" });

    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Erreur de mise à jour de la planète");

    updatePlanete.mockRestore();
  });
});

describe("DEL /api/planete/{id}", () => {
  it("del/planete/{id}: retourne 200 si lutilisateur est admin", async () => {
    const response = await request(app)
      .delete(`/api/planete/${planeteId}`)
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Planète supprimée");
    expect(response.body.data).toBeDefined();
  });
  it("del/planete/{id}: retourne 401 si le token est invalide au niveau du format", async () => {
    const response = await request(app)
      .delete(`/api/planete/${planeteId}`)
      .set("Authorization", "Bearer123 invalid_token");

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Format de jeton invalide");
  });

  it("del/planete/{id}: retourne 404 si lutilisateur est non admin", async () => {
    const response = await request(app)
      .delete(`/api/planete/${planeteId}`)
      .set("Authorization", `Bearer ${tokenNonAdmin}`);

    expect(response.status).toBe(403);
    expect(response.body.message).toBe(
      "Erreur, Vous n'êtes pas autorisé à effectuer cette action"
    );
  });
  it("del/planete/{id}: retourne 404 si la planète n'existe pas", async () => {
    const fauxPlaneteId = new mongoose.Types.ObjectId();

    const response = await request(app)
      .delete(`/api/planete/${fauxPlaneteId}`)
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Planète non trouvée");
  });
  it("del/planete/{id}: retourne 500 si une erreur se produit lors de la suppression de la planète", async () => {
    const deletePlanete = vi
      .spyOn(Planete, "findByIdAndDelete")
      .mockImplementationOnce(() => {
        throw new Error("Erreur lors de la suppression de la planète");
      });

    const response = await request(app)
      .delete(`/api/planete/${planeteId}`)
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      "Erreur lors de la suppression de la planète"
    );

    deletePlanete.mockRestore();
  });
});
