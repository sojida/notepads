import bcrypt from 'bcryptjs';
import model from '../models';

const { user } = model;

class Users {
  static async createUser(req, res) {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body;
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    const newUser = await user.create({
      firstName,
      lastName,
      email,
      password: hash,
    });
    delete newUser.dataValues.password;
    res.status(201).json({
      status: 201,
      message: 'Account created successfuly',
      data: newUser,
    });
  }

  static async usersList(req, res) {
    const allUsers = await user.findAll();
    res.status(200).json({
      status: 200,
      data: allUsers,
    });
  }
}
export default Users;
