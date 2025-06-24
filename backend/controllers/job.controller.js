const JobModel = require("../models/job.model");

const JobController = {
  async getJobs(req, res) {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.limit);
    const result = await JobModel.getJobs(page, size);
    res.send(result);
  },
  async getAllJobs(req, res) {
    const result = await JobModel.getAllJobs();
    res.send(result);
  },
  async getJobsByEmail(req, res) {
    const email = req.query.email;
    const result = await JobModel.getJobsByEmail(email);
    res.send(result);
  },
  async getJobsByCategory(req, res) {
    const category = req.query.category;
    const result = await JobModel.getJobsByCategory(category);
    res.send(result);
  },
  async getJobCount(req, res) {
    const count = await JobModel.getJobCount();
    res.send({ count });
  },
  async createJob(req, res) {
    const job = req.body;
    const result = await JobModel.createJob(job);
    res.send(result);
  },
  async getJobById(req, res) {
    const id = req.params.id;
    const result = await JobModel.getJobById(id);
    res.send(result);
  },
  async getCategoryCount(req, res) {
    const countCategory = await JobModel.getJobCount();
    res.send({ countCategory });
  },
};

module.exports = JobController;
