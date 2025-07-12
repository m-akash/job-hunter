import express from 'express';
import JobController from '../controllers/job.controller';

const router = express.Router();

router.get('/', JobController.getJobs);
router.get('/all-jobs', JobController.getAllJobs);
router.get('/email', JobController.getJobsByEmail);
router.get('/category', JobController.getJobsByCategory);
router.get('/count', JobController.getJobCount);
router.get('/category-count', JobController.getCategoryCount);
router.post('/', JobController.createJob);
router.get('/:id', JobController.getJobById);

export default router; 