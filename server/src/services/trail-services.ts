import { TrailModel } from '../models/trail-model';
import { CreateTrailInput } from '../schema/trail-schema';

export const createTrail = (input: CreateTrailInput) => {
  return TrailModel.create(input);
};
