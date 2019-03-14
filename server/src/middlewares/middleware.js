import Joi from 'joi';

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

  static async validateNote(req, res, next) {
    const schema = Joi.object().keys({
      title: Joi.string().trim().min(1).required(),
      note: Joi.string().trim().min(1).required(),
      tag: Joi.string().trim().min(1).required(),
    });

    const { error } = Joi.validate(req.body, schema);
    if (error) {
      return res.status(400).send({
        error: 'Wrong input',
        data: req.body,
      });
    }
    return next();
  }
}

export default middleware;
