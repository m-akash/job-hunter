import express from 'express';
import AuthController from '../controllers/auth.controller';

const router = express.Router();

router.post('/jwt', AuthController.login);
router.post('/logout', AuthController.logout);

export default router; 