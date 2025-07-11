"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express_1.default.Router();
router.get('/:id', user_controller_1.default.getUserById);
router.get('/', user_controller_1.default.getUserByEmail);
router.post('/', user_controller_1.default.createUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map