"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobApplication_controller_1 = __importDefault(require("../controllers/jobApplication.controller"));
const router = express_1.default.Router();
router.get('/jobs/:job_id', jobApplication_controller_1.default.getApplicationsByJobId);
router.get('/', jobApplication_controller_1.default.getApplicationsByEmail);
router.post('/', jobApplication_controller_1.default.createApplication);
router.patch('/:id', jobApplication_controller_1.default.updateApplicationStatus);
exports.default = router;
//# sourceMappingURL=jobApplication.routes.js.map