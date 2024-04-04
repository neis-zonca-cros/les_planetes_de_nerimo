import express from 'express';
import { createUtilisateur, getUtilisateurs } from "../controllers/utilisateurController.js";


const utilisateurRoutes = () => {
    const router = express.Router();

    router.post('/', createUtilisateur);
    router.get('/', getUtilisateurs);

    return router;
};

export default utilisateurRoutes;