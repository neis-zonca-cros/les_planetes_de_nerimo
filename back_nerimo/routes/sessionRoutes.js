import express from 'express';
import { createSession, deleteSession, getSession, getSessions, updateSession } from '../controllers/sessionController.js';
import { verifierToken } from '../middlewares/verifierToken.js';
import { verifierAdminOuThis } from '../middlewares/verifierAdminOuThis.js';

const sessionRoutes = () => {
    const router = express.Router();
    //Routes protégées par le Token
    router.use(verifierToken);

    router.post('/creer', verifierAdminOuThis, createSession);

    router.get('/', verifierAdminOuThis, getSessions);
    router.get('/:id', verifierAdminOuThis, getSession);

    router.put('/:id', verifierAdminOuThis, updateSession);

    router.delete('/:id', verifierAdminOuThis, deleteSession);

    return router;
};

export default sessionRoutes;