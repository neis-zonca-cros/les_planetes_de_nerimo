import express from 'express';
import { createPlanete, getPlanetes } from '../controllers/planeteController.js';

const router = express.Router();

router.post('/', createPlanete);
router.get('/', getPlanetes);

export default router;