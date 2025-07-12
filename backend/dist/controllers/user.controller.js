"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const UserController = {
    async getUserById(req, res) {
        const id = req.params.id;
        const result = await user_model_1.default.getUserById(id);
        res.send(result);
    },
    async getUserByEmail(req, res) {
        const email = req.query.email;
        const result = await user_model_1.default.getUserByEmail(email);
        res.send(result);
    },
    async createUser(req, res) {
        const newUser = req.body;
        const info = {
            name: newUser.name,
            email: newUser.email,
            role: newUser.regAs,
        };
        const result = await user_model_1.default.createUser(info);
        res.send(result);
    },
};
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map