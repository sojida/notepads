import model from '../models';

const { notes } = model;

class Notes {
  static async list(req, res) {
    const allNotes = await notes.findAll();

    res.status(200).json({
      status: 200,
      data: allNotes,
    });
  }

  static async createNote(req, res) {
    const Note = await notes.create({
      title: req.body.title,
      note: req.body.note,
      tag: req.body.tag,
    });
    res.status(201).send({
      message: 'Created Note successfully',
      data: Note,
    });
  }
}

export default Notes;
