import express from 'express';
import { createUtilisateur, getUtilisateurs, getUtilisateur, connexionUtilisateur, updateUtilisateur, deleteUtilisateur } from "../controllers/utilisateurController.js";
import { verifierToken } from '../middlewares/verifierToken.js';
import { verifierAdminOuThis } from '../middlewares/verifierAdminOuThis.js';
import { verifierAdmin } from '../middlewares/verifierAdmin.js';


const utilisateurRoutes = () => {
    const router = express.Router();

    router.post('/creer', createUtilisateur);
    router.post('/connexion', connexionUtilisateur);

    //Routes protégées avec vérification du token !
    router.use(verifierToken);

    router.get('/:id', verifierAdminOuThis, getUtilisateur );
    
    router.put('/:id', verifierAdminOuThis, updateUtilisateur );

    router.delete('/:id', verifierAdminOuThis, deleteUtilisateur );

    router.get('/', verifierAdmin, getUtilisateurs);

    return router;
};

export default utilisateurRoutes;