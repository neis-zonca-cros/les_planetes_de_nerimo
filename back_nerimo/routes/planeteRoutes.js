import express from 'express';
import { createPlanete, deletePlanete, getPlanete, getPlanetes, updatePlanete } from '../controllers/planeteController.js';
import { verifierToken } from '../middlewares/verifierToken.js';


const planeteRoutes = () => {
    const router = express.Router();

    //Routes protégées par le Token
    router.use(verifierToken);

    router.post('/creer', createPlanete);

    router.get('/', getPlanetes);
    router.get('/:id', getPlanete);

    router.put('/:id', updatePlanete);

    router.delete('/:id', deletePlanete);


    return router;
};

export default planeteRoutes;