import express from 'express';
import { creerPersonnage, recupererTousLesPersonnages, recupererUnPersonnage, supprimerPersonnage, modifierPersonnage, recupererPersonnagesParPlanetes } from '../controllers/personnageController.js';
import { verifierToken } from '../middlewares/verifierToken.js';
import { verifierAdmin } from '../middlewares/verifierAdmin.js';


const personnageRoutes = () => {
    const router = express.Router();

    //Routes protégées par le Token
    router.use(verifierToken);

    router.post('/creer', verifierAdmin, creerPersonnage);

    router.get('/', recupererTousLesPersonnages);
    router.get('/:planeteId', recupererPersonnagesParPlanetes);

    router.put('/:id', verifierAdmin, modifierPersonnage);

    router.delete('/:id', verifierAdmin, supprimerPersonnage);

    return router;
};

export default personnageRoutes;
