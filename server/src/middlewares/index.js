import Joi from 'joi';
// import model from '../models';

// const { notes } = model;

class middleware {
  static async checkId(req, res, next) {
    const schema = Joi.string().guid({
      version: [
        'uuidv4',
        'uuidv5',
      ],
    });

    const { error } = Joi.validate(req.params.id, schema);
    if (error) {
      return res.status(404).json({
        status: 400,
        error: 'Please input a valid id',
      });
    }
    return next();
  }
}

export default middleware;
