import { Request, Response } from 'express';
import { CreateTrailInput } from '../schema/trail-schema';
import { createTrail } from '../services/trail-services';

export const createTrailHandler = async (req: Request<{}, {}, CreateTrailInput>, res: Response) => {
  try {
    const trail = await createTrail(req.body);
    return res.status(200).json(trail);
  } catch (error) {
    return res.status(400).json({ message: 'cant create trail' });
  }
};
