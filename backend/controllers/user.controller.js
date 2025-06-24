const UserModel = require("../models/user.model");

const UserController = {
  async getUserById(req, res) {
    const id = req.params.id;
    const result = await UserModel.getUserById(id);
    res.send(result);
  },
  async getUserByEmail(req, res) {
    const email = req.query.email;
    const result = await UserModel.getUserByEmail(email);
    res.send(result);
  },
  async createUser(req, res) {
    const newUser = req.body;
    const info = {
      name: newUser.name,
      email: newUser.email,
      regAs: newUser.regAs,
    };
    const result = await UserModel.createUser(info);
    res.send(result);
  },
};

module.exports = UserController;
