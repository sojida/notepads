import express from 'express';
// import Notes from '../controllers/notes';
// import Getone from '../controllers/GetOne';
// import validate from '../middleware/index';
import { Notes } from '../controllers';
import { middleware } from '../middlewares';

const router = express.Router();

router.get('/notes', Notes.list);

router.get('/notes/:id', middleware.checkId, Notes.getOneNote);
router.delete('/notes/:id', middleware.checkId, Notes.deleteNote);

router.post('/notes', middleware.validateNote, Notes.createNote);

export default router;
