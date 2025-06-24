const client = require("../config/db");
const { ObjectId } = require("mongodb");

const jobApplicationData = client.db("HireHubDB").collection("jobApplication");

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
    return jobApplicationData.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );
  },
};

module.exports = JobApplicationModel;
