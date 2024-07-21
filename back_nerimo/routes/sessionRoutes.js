import express from 'express';
import { creerSession, supprimerSession, recupererUneSession, recupererToutesLesSessions, modifierSession } from '../controllers/sessionController.js';
import { verifierToken } from '../middlewares/verifierToken.js';

const sessionRoutes = () => {
    const router = express.Router();
    //Routes protégées par le Token
    router.use(verifierToken);

    router.post('/creer', creerSession);

    router.get('/', recupererToutesLesSessions);
    router.get('/:id', recupererUneSession);

    router.put('/:id', modifierSession);

    router.delete('/:id', supprimerSession);

    return router;
};

export default sessionRoutes;