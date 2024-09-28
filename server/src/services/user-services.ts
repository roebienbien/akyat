import { UserModel } from '../models/user-model';
import { CreateUserInput } from '../schema/user-schema';

export const createUser = (input: CreateUserInput) => {
  return UserModel.create(input);
};

export const findUserById = (id: string) => {
  return UserModel.find({ id });
};

export const findAllUsers = () => {
  return UserModel.find({});
};
