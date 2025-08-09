import express from 'express';
import { getReels, addReel, deleteReel } from '../controllers/reelController.js';

const router = express.Router();

router.get('/', getReels);
router.post('/', addReel);
router.delete('/:id', deleteReel);

export default router;
