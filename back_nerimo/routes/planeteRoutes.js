import express from 'express';
import { creerPlanete, supprimerPlanete, recupererUnePlanete, recupererToutesLesPlanetes, modifierPlanete } from '../controllers/planeteController.js';
import { verifierToken } from '../middlewares/verifierToken.js';
import { verifierAdmin } from '../middlewares/verifierAdmin.js';


const planeteRoutes = () => {
    const router = express.Router();

    //Routes protégées par le Token
    router.use(verifierToken);

    router.post('/creer', verifierAdmin, creerPlanete);

    router.get('/', recupererToutesLesPlanetes);
    router.get('/:id', recupererUnePlanete);

    router.put('/:id', verifierAdmin, modifierPlanete);

    router.delete('/:id', verifierAdmin, supprimerPlanete);


    return router;
};

export default planeteRoutes;