import mongoose from 'mongoose';
import trailSchema from '../schema/trail-schema';

export const TrailModel = mongoose.model('Trail', trailSchema);
