const { UserService } = require('../services/UserService');

class UserController {
  static async create(req, res) {
    try {
      const newUser = req.body;

      const token = await UserService.create(newUser);

      return res.status(201).json({ token });
    } catch (err) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }

  static async signin(req, res) {
    try {
      const { email } = req.body;

      const token = await UserService.signin(email);

      return res.status(200).json({ token });
    } catch (err) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }

  static async getAll(_req, res) {
    const users = await UserService.getAll();

    return res.status(200).json(users);
  }

  static async findById(req, res) {
    try {
      const { id } = req.params;

      const user = await UserService.findById(id);

      return res.status(200).json(user);
    } catch (err) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}

module.exports = { UserController };
