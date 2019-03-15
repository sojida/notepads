/* eslint-disable no-unused-vars */
import Joi from 'joi';
import model from '../models';

const { notes } = model;

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
      return res.status(400).json({
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

  static async checksIfIdExists(req, res, next) {
    const findNote = await notes.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!findNote) {
      return res.status(404).send({
        error: {
          message: 'Note does not exist',
        },
      });
    }
    return next();
  }

  static async checkUpdateFields(req, res, next) {
    const { title, note, tag } = req.body;
    if (!title && !note && !tag) {
      return res.status(400).send({
        error: {
          message: 'enter a field for update',
        },
      });
    }
    const schema = Joi.object().keys({
      title: Joi.string().trim().min(1),
      note: Joi.string().trim().min(1),
      tag: Joi.string().trim().min(1),
    });

    const { error } = Joi.validate(req.body, schema);
    if (error) {
      return res.status(400).send({
        error: {
          message: 'Wrong input',
        },
      });
    }
    return next();
  }

  static async checkParamsId(req, res, next) {
    if (!req.params.id) {
      return res.status(400).send({
        error: {
          message: 'Id is required',
        },
      });
    }
    return next();
  }
}

export default middleware;
