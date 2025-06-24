const JobApplicationModel = require("../models/jobApplication.model");
const JobModel = require("../models/job.model");

const JobApplicationController = {
  async getApplicationsByJobId(req, res) {
    const jobId = req.params.job_id;
    const result = await JobApplicationModel.getApplicationsByJobId(jobId);
    res.send(result);
  },
  async getApplicationsByEmail(req, res) {
    const email = req.query.email;
    const result = await JobApplicationModel.getApplicationsByEmail(email);
    for (const application of result) {
      const job = await JobModel.getJobById(application.job_id);
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
    const result = await JobApplicationModel.createApplication(applicationData);
    // Update application count
    const job = await JobModel.getJobById(applicationData.job_id);
    let cnt = 0;
    if (job && job.applicationCount) {
      cnt = job.applicationCount + 1;
    } else {
      cnt = 1;
    }
    await JobModel.updateApplicationCount(applicationData.job_id, cnt);
    res.send(result);
  },
  async updateApplicationStatus(req, res) {
    const id = req.params.id;
    const body = req.body;
    const result = await JobApplicationModel.updateApplicationStatus(
      id,
      body.status
    );
    res.send(result);
  },
};

module.exports = JobApplicationController;
