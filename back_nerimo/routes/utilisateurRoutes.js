import express from 'express';
import { createUtilisateur, getUtilisateurs, getUtilisateur, connexionUtilisateur, updateUtilisateur, deleteUtilisateur } from "../controllers/utilisateurController.js";
import { verifierToken } from '../middlewares/verifierToken.js';


const utilisateurRoutes = () => {
    const router = express.Router();

    router.post('/creer', createUtilisateur);
    router.post('/connexion', connexionUtilisateur);

    //Routes protégées avec vérification du token !
    router.use(verifierToken);

    router.get('/:id', getUtilisateur);
    router.get('/', getUtilisateurs);

    router.put('/:id', updateUtilisateur);

    router.delete('/:id', deleteUtilisateur);
    

    return router;
};

export default utilisateurRoutes;