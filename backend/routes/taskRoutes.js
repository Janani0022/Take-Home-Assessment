import express from 'express';
import { getTasks, addTask, markDone } from '../controllers/taskController.js';
const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id/done', markDone);

export default router;
