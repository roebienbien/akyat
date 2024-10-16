import { Document, Schema } from 'mongoose';
import { z } from 'zod';

interface TrailDocument extends Document {
  name: string;
  previewSrc: string;
  location: string;
  elevation: string; //Elevation gain:
  duration: string;
  length: string;
  route: string;
  difficulty: string;
  rating: string;
  description: string;
  // Other TRAILS think about it
}

const trailSchema = new Schema<TrailDocument>(
  {
    name: String,
    previewSrc: String,
    location: String,
    elevation: String,
    duration: String,
    length: String,
    route: String,
    difficulty: String,
    rating: String,
    description: String,
  },
  { timestamps: true }
);

export const createTrailSchema = z.object({
  body: z.object({
    // trim() remove whitespaces
    // required_error message
    name: z.string({ required_error: 'name is required' }).trim().min(1, { message: 'field required' }),
    previewSrc: z.string().trim().min(1, { message: 'field required' }),
    location: z.string().trim().min(1, { message: 'field required' }),
    elevation: z.string().trim().min(1, { message: 'field required' }),
    duration: z.string().trim().min(1, { message: 'field required' }),
    length: z.string().trim().min(1, { message: 'field required' }),
    route: z.string().trim().min(1, { message: 'field required' }),
    difficulty: z.string().trim().min(1, { message: 'field required' }),
    rating: z.string().trim().min(1, { message: 'field required' }),
    description: z.string().trim().min(1, { message: 'field required' }),
  }),
});

export default trailSchema;
export type CreateTrailInput = z.TypeOf<typeof createTrailSchema>['body'];
