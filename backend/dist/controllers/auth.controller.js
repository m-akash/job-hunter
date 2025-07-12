"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthController = {
    async login(req, res) {
        const user = req.body;
        const token = jsonwebtoken_1.default.sign(user, process.env.SECRET_KEY, {
            expiresIn: '23h',
        });
        res
            .cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
            .send({ success: true });
    },
    async logout(req, res) {
        res
            .clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
            .send({ success: true });
    },
};
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map