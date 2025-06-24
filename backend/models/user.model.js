const client = require("../config/db");
const { ObjectId } = require("mongodb");

const userData = client.db("HireHubDB").collection("userInfo");

const UserModel = {
  async getUserById(id) {
    return userData.findOne({ _id: new ObjectId(id) });
  },
  async getUserByEmail(email) {
    return userData.find({ email }).toArray();
  },
  async getAllUsers() {
    return userData.find({}).toArray();
  },
  async createUser(info) {
    return userData.insertOne(info);
  },
};

module.exports = UserModel;
