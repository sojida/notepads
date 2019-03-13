import express from 'express';
import Notes from '../controllers/notes';
import Getone from '../controllers/GetOne';
import validate from '../middleware/index';

const router = express.Router();

router.get('/notes', Notes.list);

router.get('/notes/:id', validate.GetNoteById, Getone.list);

export default router;
