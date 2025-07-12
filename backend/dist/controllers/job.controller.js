"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const job_model_1 = __importDefault(require("../models/job.model"));
const JobController = {
    async getJobs(req, res) {
        const page = parseInt(req.query.page) || 0;
        const size = parseInt(req.query.limit) || 10;
        const result = await job_model_1.default.getJobs(page, size);
        res.send(result);
    },
    async getAllJobs(req, res) {
        const result = await job_model_1.default.getAllJobs();
        res.send(result);
    },
    async getJobsByEmail(req, res) {
        const email = req.query.email;
        const result = await job_model_1.default.getJobsByEmail(email);
        res.send(result);
    },
    async getJobsByCategory(req, res) {
        const category = req.query.category;
        const result = await job_model_1.default.getJobsByCategory(category);
        res.send(result);
    },
    async getJobCount(req, res) {
        const count = await job_model_1.default.getJobCount();
        res.send({ count });
    },
    async createJob(req, res) {
        const job = req.body;
        const result = await job_model_1.default.createJob(job);
        res.send(result);
    },
    async getJobById(req, res) {
        const id = req.params.id;
        const result = await job_model_1.default.getJobById(id);
        res.send(result);
    },
    async getCategoryCount(req, res) {
        const countCategory = await job_model_1.default.getJobCount();
        res.send({ countCategory });
    },
};
exports.default = JobController;
//# sourceMappingURL=job.controller.js.map