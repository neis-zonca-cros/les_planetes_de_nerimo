import express from 'express';
import { createSession, getSessions } from '../controllers/sessionController.js';


const sessionRoutes = () => {
    const router = express.Router();

    router.post('/', createSession);
    router.get('/', getSessions);

    return router;
};

export default sessionRoutes;