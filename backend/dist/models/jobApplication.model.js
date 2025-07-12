"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const mongodb_1 = require("mongodb");
const jobApplicationData = db_1.default.db('HireHubDB').collection('jobApplication');
const JobApplicationModel = {
    async getApplicationsByJobId(jobId) {
        return jobApplicationData.find({ job_id: jobId }).toArray();
    },
    async getApplicationsByEmail(email) {
        return jobApplicationData.find({ applicant_email: email }).toArray();
    },
    async createApplication(applicationData) {
        return jobApplicationData.insertOne(applicationData);
    },
    async updateApplicationStatus(id, status) {
        return jobApplicationData.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { status } });
    },
};
exports.default = JobApplicationModel;
//# sourceMappingURL=jobApplication.model.js.map