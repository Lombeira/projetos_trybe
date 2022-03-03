const jwt = require('jsonwebtoken');
const { AppError } = require('../error/AppError');
const { User } = require('../models/User');

class UserService {
  static async create({ displayName, email, password, image }) {
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      throw new AppError(409, 'User already registered');
    }

    const user = await User.create({ displayName, email, password, image });

    const token = jwt.sign(
      { identifier: user.dataValues.id },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
        algorithm: 'HS256',
      },
    );

    return token;
  }

  static async signin(email) {
    const user = await User.findOne({ where: { email } });

    if (user === null) {
      throw new AppError(400, 'Invalid fields');
    }

    const token = jwt.sign(
      { identifier: user.dataValues.id },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
        algorithm: 'HS256',
      },
    );

    return token;
  }

  static async getAll() {
    const users = await User.findAll();

    return users;
  }

  static async findById(id) {
    const user = await User.findByPk(id);

    if (!user) throw new AppError(404, 'User does not exist');

    return user.dataValues;
  }
}

module.exports = { UserService };
