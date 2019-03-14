import express from 'express';
import Notes from '../controllers/notes';
import { validateNote } from '../middlewares';

const router = express.Router();

router.get('/notes', Notes.list);

router.post('/notes', validateNote, Notes.createNote);

export default router;
