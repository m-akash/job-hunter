"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jobApplication_model_1 = __importDefault(require("../models/jobApplication.model"));
const job_model_1 = __importDefault(require("../models/job.model"));
const JobApplicationController = {
    async getApplicationsByJobId(req, res) {
        const jobId = req.params.job_id;
        const result = await jobApplication_model_1.default.getApplicationsByJobId(jobId);
        res.send(result);
    },
    async getApplicationsByEmail(req, res) {
        const email = req.query.email;
        const result = await jobApplication_model_1.default.getApplicationsByEmail(email);
        for (const application of result) {
            const jobId = typeof application.jobId === 'string' ? application.jobId : application.jobId.toString();
            const job = await job_model_1.default.getJobById(jobId);
            if (job) {
                application.title = job.title;
                application.company = job.company;
                application.location = job.location;
            }
        }
        res.send(result);
    },
    async createApplication(req, res) {
        const applicationData = req.body;
        const result = await jobApplication_model_1.default.createApplication(applicationData);
        const jobId = typeof applicationData.jobId === 'string' ? applicationData.jobId : applicationData.jobId.toString();
        const job = await job_model_1.default.getJobById(jobId);
        let cnt = 0;
        if (job && job.applicationCount) {
            cnt = job.applicationCount + 1;
        }
        else {
            cnt = 1;
        }
        await job_model_1.default.updateApplicationCount(jobId, cnt);
        res.send(result);
    },
    async updateApplicationStatus(req, res) {
        const id = req.params.id;
        const body = req.body;
        const result = await jobApplication_model_1.default.updateApplicationStatus(id, body.status);
        res.send(result);
    },
};
exports.default = JobApplicationController;
//# sourceMappingURL=jobApplication.controller.js.map