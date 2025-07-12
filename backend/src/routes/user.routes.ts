import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

router.get('/:id', UserController.getUserById);
router.get('/', UserController.getUserByEmail);
router.post('/', UserController.createUser);

export default router; 