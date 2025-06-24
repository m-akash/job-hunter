const express = require("express");
const router = express.Router();
const JobApplicationController = require("../controllers/jobApplication.controller");

router.get("/jobs/:job_id", JobApplicationController.getApplicationsByJobId);
router.get("/", JobApplicationController.getApplicationsByEmail);
router.post("/", JobApplicationController.createApplication);
router.patch("/:id", JobApplicationController.updateApplicationStatus);

module.exports = router;
