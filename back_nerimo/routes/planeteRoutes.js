import express from 'express';
import { createPlanete, deletePlanete, getPlanete, getPlanetes, updatePlanete } from '../controllers/planeteController.js';
import { verifierToken } from '../middlewares/verifierToken.js';
import { verifierAdmin } from '../middlewares/verifierAdmin.js';
import { verifierAdminOuThis } from '../middlewares/verifierAdminOuThis.js';

const planeteRoutes = () => {
    const router = express.Router();

    //Routes protégées par le Token
    router.use(verifierToken);

    router.post('/creer', verifierAdmin, createPlanete);

    router.get('/', verifierAdminOuThis, getPlanetes);
    router.get('/:id', verifierAdminOuThis, getPlanete);

    router.put('/:id', verifierAdmin, updatePlanete);

    router.delete('/:id', verifierAdmin, deletePlanete);


    return router;
};

export default planeteRoutes;