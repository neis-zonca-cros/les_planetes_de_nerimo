import express from 'express';
import { createPersonnage, getPersonnages } from '../controllers/personnageController.js';

const router = express.Router();

router.post('/', createPersonnage);
router.get('/', getPersonnages);

export default router;