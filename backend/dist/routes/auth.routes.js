"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const router = express_1.default.Router();
router.post('/jwt', auth_controller_1.default.login);
router.post('/logout', auth_controller_1.default.logout);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map