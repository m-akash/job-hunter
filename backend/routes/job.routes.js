const express = require("express");
const router = express.Router();
const JobController = require("../controllers/job.controller");

router.get("/", JobController.getJobs);
router.get("/all-jobs", JobController.getAllJobs);
router.get("/email", JobController.getJobsByEmail);
router.get("/category", JobController.getJobsByCategory);
router.get("/count", JobController.getJobCount);
router.get("/category-count", JobController.getCategoryCount);
router.post("/", JobController.createJob);
router.get("/:id", JobController.getJobById);

module.exports = router;
