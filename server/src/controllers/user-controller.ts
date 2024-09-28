import { Request, Response } from 'express';
import { CreateUserInput } from '../schema/user-schema';
import { createUser, deleteUserById, findAllUsers, findUserById, updateUserById } from '../services/user-services';
import { UserModel } from '../models/user-model';

export const registerUser = async (req: Request<{}, {}, CreateUserInput>, res: Response) => {
  try {
    const user = await createUser(req.body);

    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await updateUserById(req.params.id, req.body);

    if (!updatedUser) return res.status(404).json({ message: 'user not found' });

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await deleteUserById(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'user not found' });

    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.send(400).send(error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await findUserById(req.params.id);

    if (!user) return res.status(404).json({ message: 'user not found' });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(204).send(error);
  }
};

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const allStudent = await findAllUsers();

    return res.status(200).json(allStudent);
  } catch (error) {
    return res.status(400).send(error);
  }
};
