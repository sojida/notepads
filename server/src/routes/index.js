import express from 'express';
import Notes from '../controllers/notes';
import middleware from '../middlewares';

const router = express.Router();

router.get('/notes', Notes.list);
router.delete('/notes/:id', middleware.checkId, Notes.deleteNote);

export default router;
