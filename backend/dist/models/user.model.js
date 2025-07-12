"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const mongodb_1 = require("mongodb");
const userData = db_1.default.db('HireHubDB').collection('userInfo');
const UserModel = {
    async getUserById(id) {
        return userData.findOne({ _id: new mongodb_1.ObjectId(id) });
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
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map