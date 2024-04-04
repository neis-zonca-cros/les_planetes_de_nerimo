import express from 'express';
import { createPlanete, getPlanetes } from '../controllers/planeteController.js';


const planeteRoutes = () => {
    const router = express.Router();

    router.post('/', createPlanete);
    router.get('/', getPlanetes);

    return router;
};

export default planeteRoutes;