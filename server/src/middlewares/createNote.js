import Joi from 'joi';

const schema = Joi.object().keys({
  title: Joi.string().trim().min(1).required(),
  note: Joi.string().trim().min(1).required(),
  tag: Joi.string().trim().min(1).required(),
});

const validateNote = (req, res, next) => {
  Joi.validate(req.body, schema, (err, value) => {
    if (err) {
      res.status(400).send({
        error: { message: 'Wrong input' },
        data: req.body,
      });
    } else {
      next();
    }
  });
};

export default validateNote;
