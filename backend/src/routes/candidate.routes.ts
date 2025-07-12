import express from 'express';
import CandidateController from '../controllers/candidate.controller';

const router = express.Router();

router.get('/', CandidateController.getAllCandidates);
router.post('/', CandidateController.createCandidate);

export default router; 