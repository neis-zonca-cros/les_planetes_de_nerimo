import express from 'express';
import { createPersonnage, getPersonnages, getPersonnage, deletePersonnage, updatePersonnage } from '../controllers/personnageController.js';
import { verifierToken } from '../middlewares/verifierToken.js';

const personnageRoutes = () => {
    const router = express.Router();

    //Routes protégées par le Token
    router.use(verifierToken);

    router.post('/creer', createPersonnage);

    router.get('/', getPersonnages);
    router.get('/:id', getPersonnage);

    router.put('/:id', updatePersonnage);

    router.delete('/:id', deletePersonnage);

    return router;
};

export default personnageRoutes;
