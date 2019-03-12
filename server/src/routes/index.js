import express from 'express';
import Notes from '../controllers/notes';
import Getone from '../controllers/GetOne';

const router = express.Router();

router.get('/notes', Notes.list);

router.get('/notes/:id', Getone.list);

export default router;
