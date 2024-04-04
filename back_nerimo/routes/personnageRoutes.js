import express from 'express';
import { createPersonnage, getPersonnages, deletePersonnage } from '../controllers/personnageController.js';

const personnageRoutes = () => {
    const router = express.Router();

    router.post('/', createPersonnage);
    router.get('/', getPersonnages);
    router.delete('/:id', deletePersonnage);

    return router;
};

export default personnageRoutes;
