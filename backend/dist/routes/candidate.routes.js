"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const candidate_controller_1 = __importDefault(require("../controllers/candidate.controller"));
const router = express_1.default.Router();
router.get('/', candidate_controller_1.default.getAllCandidates);
router.post('/', candidate_controller_1.default.createCandidate);
exports.default = router;
//# sourceMappingURL=candidate.routes.js.map