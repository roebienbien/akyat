import { CreateUserInput } from '../schema/user-schema';
import { createUser, findAllUsers, findUserById } from '../services/user-services';
import { NextFunction, Request, Response } from 'express';

export const registerUser = async (req: Request<{}, {}, CreateUserInput>, res: Response) => {
  try {
    const user = await createUser(req.body);

    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await findUserById(req.params.id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allStudent = await findAllUsers();

    return res.status(200).json(allStudent);
  } catch (error) {
    return res.status(400).send(error);
  }
};
