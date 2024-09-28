import { Router } from 'express';
import { deleteUser, getAllUsers, getUser, registerUser, updateUser } from '../controllers/user-controller';
import validateResource from '../middleware/validate-resource';
import { createUserSchema } from '../schema/user-schema';
import express from 'express';

const router = express.Router();

router.post('/register', validateResource(createUserSchema), registerUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
