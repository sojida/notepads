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
    const { title, note, tag } = req.body;
    const Note = await notes.create({
      title,
      note,
      tag,

    });
    res.status(201).send({
      message: 'Created Note successfully',
      data: Note,
    });
  }

  static async getOneNote(req, res) {
    const allNotes = await notes.findOne({
      id: '7139d3af-b8b4-44f6-a49f-9305791700f4',
    });
    res.status(200).json({
      status: 200,
      data: allNotes,
    });
  }

  static async deleteNote(req, res) {
    const newStat = {
      deleted: true,
      deletedon: new Date(),
    };
    try {
      const deletedNote = await notes.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (deletedNote.deleted) {
        return res.status(409).json({
          status: 409,
          error: 'Note already deleted',
        });
      }

      const updatedNote = await deletedNote.update(newStat);

      return res.status(200).json({
        status: 200,
        data: updatedNote,
      });
    } catch (err) {
      return res.status(404).json({
        status: 404,
        error: 'Note not found',
      });
    }
  }

  static async updateNote(req, res) {
    const noteId = req.params.id;
    const { title, note, tags } = req.body;
    const updatedNote = await notes.update({ title, note, tags },
      {
        where: { id: noteId },
        returning: true,
      });

    return res.status(200).json({
      status: 200,
      message: 'note updated successfully',
      data: updatedNote,
    });
  }
}

export default Notes;
