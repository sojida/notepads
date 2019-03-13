/* eslint-disable no-unused-vars */
import Joi from 'joi';

const schema = Joi.object().keys({
  id: Joi.string().uuid(),
});

const GetNoteById = (req, res, next) => {
  Joi.validate({ id: req.params.id }, schema, (err, value) => {
    if (err) {
      res.status(404).send({
        error: {
          status: 404,
          message: 'Invalid Id',
        },
      });
    } else {
      next();
    }
  });
};
export default GetNoteById;
