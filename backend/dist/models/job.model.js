"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const mongodb_1 = require("mongodb");
const jobsData = db_1.default.db('HireHubDB').collection('jobs');
const JobModel = {
    async getJobs(page, size) {
        return jobsData
            .find()
            .skip(page * size)
            .limit(size)
            .toArray();
    },
    async getAllJobs() {
        return jobsData.find().toArray();
    },
    async getJobsByEmail(email) {
        return jobsData.find({ hr_mail: email }).toArray();
    },
    async getJobsByCategory(category) {
        return jobsData.find({ category }).toArray();
    },
    async getJobCount() {
        return jobsData.estimatedDocumentCount();
    },
    async createJob(job) {
        return jobsData.insertOne(job);
    },
    async getJobById(id) {
        return jobsData.findOne({ _id: new mongodb_1.ObjectId(id) });
    },
    async updateApplicationCount(jobId, cnt) {
        return jobsData.updateOne({ _id: new mongodb_1.ObjectId(jobId) }, { $set: { applicationCount: cnt } });
    },
};
exports.default = JobModel;
//# sourceMappingURL=job.model.js.map