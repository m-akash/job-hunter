"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const job_controller_1 = __importDefault(require("../controllers/job.controller"));
const router = express_1.default.Router();
router.get('/', job_controller_1.default.getJobs);
router.get('/all-jobs', job_controller_1.default.getAllJobs);
router.get('/email', job_controller_1.default.getJobsByEmail);
router.get('/category', job_controller_1.default.getJobsByCategory);
router.get('/count', job_controller_1.default.getJobCount);
router.get('/category-count', job_controller_1.default.getCategoryCount);
router.post('/', job_controller_1.default.createJob);
router.get('/:id', job_controller_1.default.getJobById);
exports.default = router;
//# sourceMappingURL=job.routes.js.map