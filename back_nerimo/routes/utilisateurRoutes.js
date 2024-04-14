import express from 'express';
import { createUtilisateur, getUtilisateurs, connexionUtilisateur } from "../controllers/utilisateurController.js";


const utilisateurRoutes = () => {
    const router = express.Router();

    router.post('/', createUtilisateur);
    router.post('/connexion', connexionUtilisateur);
    router.get('/', getUtilisateurs);

    return router;
};

export default utilisateurRoutes;