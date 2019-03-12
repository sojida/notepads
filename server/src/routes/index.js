import express from 'express';
import Notes from '../controllers/notes';

const router = express.Router();

router.get('/notes', Notes.list);

export default router;
