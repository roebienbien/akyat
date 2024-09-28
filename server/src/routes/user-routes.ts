import { Router } from 'express';
import { getAllUsers, getUser, registerUser } from '../controllers/user-controller';
import validateResource from '../middleware/validate-resource';
import { createUserSchema } from '../schema/user-schema';
import express from 'express';

const router = express.Router();

router.post('/register', validateResource(createUserSchema), registerUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);

export default router;
