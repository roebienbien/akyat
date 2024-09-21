import { z } from 'zod';

export const Schema = z.object({
  firstName: z.string().min(1, 'first name is required'),
  lastName: z.string().min(1, 'last name is required'),
  email: z.string().email('please enter a valid email').min(1, 'email is required'),
  street: z.string().min(1, 'street name is required'),
  district: z.string().min(1, 'district is required'),
  postal: z.string().min(1, 'postal is required'),
  city: z.string().min(1, 'city is required'),
  province: z.string().min(1, 'province is required'),
  phone: z.string().min(1, 'phone is required'),
});
