const client = require("../config/db");
const { ObjectId } = require("mongodb");

const jobsData = client.db("HireHubDB").collection("jobs");

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
    return jobsData.findOne({ _id: new ObjectId(id) });
  },
  async updateApplicationCount(jobId, cnt) {
    return jobsData.updateOne(
      { _id: new ObjectId(jobId) },
      { $set: { applicationCount: cnt } }
    );
  },
};

module.exports = JobModel;
