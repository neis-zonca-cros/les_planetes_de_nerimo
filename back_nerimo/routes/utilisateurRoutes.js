import express from 'express';
import { creerUtilisateur, recupererTousLesUtilisateurs, recupererUnUtilisateur, connexionUtilisateur, modifierUtilisateur, supprimerUtilisateur } from "../controllers/utilisateurController.js";
import { verifierToken } from '../middlewares/verifierToken.js';
import { verifierAdmin } from '../middlewares/verifierAdmin.js';


const utilisateurRoutes = () => {
    const router = express.Router();

    router.post('/creer', creerUtilisateur);
    router.post('/connexion', connexionUtilisateur);

    //Routes protégées avec vérification du token !
    router.use(verifierToken);

    router.get('/:id', recupererUnUtilisateur );
    
    router.put('/:id', modifierUtilisateur );

    router.delete('/:id', supprimerUtilisateur );

    router.get('/', verifierAdmin, recupererTousLesUtilisateurs);

    return router;
};

export default utilisateurRoutes;