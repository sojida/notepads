import express from 'express';
import { Notes } from '../controllers';
import { middleware } from '../middlewares';

const router = express.Router();

router.get('/notes', Notes.list);

router.delete('/notes/:id', middleware.checkId, Notes.deleteNote);

router.post('/notes', middleware.validateNote, Notes.createNote);

router.put('/notes/:id', middleware.checkId, middleware.checksIfIdExists, middleware.checkUpdateFields, Notes.updateNote);

router.all('*', (req, res) => {
  res.status(404).send({
    error: {
      message: 'endpoint does not exist',
    },
  });
});
export default router;
