import express from 'express';
import { createPersonnage, getPersonnages, getPersonnage, deletePersonnage, updatePersonnage } from '../controllers/personnageController.js';
import { verifierToken } from '../middlewares/verifierToken.js';
import { verifierAdmin } from '../middlewares/verifierAdmin.js';


const personnageRoutes = () => {
    const router = express.Router();

    //Routes protégées par le Token
    router.use(verifierToken);

    router.post('/creer', verifierAdmin, createPersonnage);

    router.get('/', getPersonnages);
    router.get('/:id', getPersonnage);

    router.put('/:id', verifierAdmin, updatePersonnage);

    router.delete('/:id', verifierAdmin, deletePersonnage);

    return router;
};

export default personnageRoutes;
