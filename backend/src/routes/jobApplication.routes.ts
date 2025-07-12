import express from 'express';
import JobApplicationController from '../controllers/jobApplication.controller';

const router = express.Router();

router.get('/jobs/:job_id', JobApplicationController.getApplicationsByJobId);
router.get('/', JobApplicationController.getApplicationsByEmail);
router.post('/', JobApplicationController.createApplication);
router.patch('/:id', JobApplicationController.updateApplicationStatus);

export default router; 