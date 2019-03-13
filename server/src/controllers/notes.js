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
}

export default Notes;
