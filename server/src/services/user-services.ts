import { UserModel } from '../models/user-model';
import { CreateUserInput } from '../schema/user-schema';

export const createUser = (input: CreateUserInput) => {
  return UserModel.create(input);
};

export const deleteUserById = (_id: string) => {
  return UserModel.findOneAndDelete({ _id });
};

export const updateUserById = (id: string, body: object) => {
  return UserModel.findByIdAndUpdate(id, body, { new: true });
};

export const findUserById = (id: string) => {
  // return UserModel.findById({ _id: id });
  return UserModel.findById(id);
};

export const findAllUsers = () => {
  return UserModel.find({});
};
