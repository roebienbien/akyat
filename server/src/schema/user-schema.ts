import { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { z } from 'zod';

interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserDocument>(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

userSchema.pre<UserDocument>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  } catch (error: any) {
    return next(error);
  }
});

// NO BODY
export const createUserSchema = z.object({
  body: z
    .object({
      username: z.string().trim().min(1, { message: 'username is required' }),
      email: z.string().email('please enter a valid email').trim().min(1, { message: 'email is required' }),
      password: z.string().trim().min(6, { message: 'password should be at least 6 characters' }),
      confirmPassword: z.string().trim().min(6, { message: 'confirm password should be at least 6 characters' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'passwords do not match',
      path: ['confirmPassword'],
    }),
});
export default userSchema;
export type CreateUserInput = z.TypeOf<typeof createUserSchema>['body'];
