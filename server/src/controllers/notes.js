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
}

export default Notes;
