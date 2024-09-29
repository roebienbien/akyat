import { UserModel } from '../models/user-model';
import { CreateUserInput } from '../schema/user-schema';

export const createUser = (input: CreateUserInput) => {
  return UserModel.create(input);
};

export const deleteUserById = (_id: string) => {
  return UserModel.findOneAndDelete({ _id });
};

export const updateUserById = (_id: string, body: object) => {
  return UserModel.findByIdAndUpdate(_id, body, { new: true });
};

export const findUserById = (_id: string) => {
  // return UserModel.findById({ _id: id });
  return UserModel.findById(_id);
};

export const findUserByEmail = (email: string) => {
  return UserModel.findOne({ email });
};

export const findAllUsers = () => {
  return UserModel.find({});
};
