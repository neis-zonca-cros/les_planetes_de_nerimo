import express from 'express';
import { createSession, deleteSession, getSession, getSessions, updateSession } from '../controllers/sessionController.js';
import { verifierToken } from '../middlewares/verifierToken.js';


const sessionRoutes = () => {
    const router = express.Router();
    //Routes protégées par le Token
    router.use(verifierToken);

    router.post('/creer', createSession);

    router.get('/', getSessions);
    router.get('/:id', getSession);

    router.put('/:id', updateSession);

    router.delete('/:id', deleteSession);

    return router;
};

export default sessionRoutes;