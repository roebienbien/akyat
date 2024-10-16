import { Router } from 'express';
import { createTrailHandler } from '../controllers/trail-controller';
import { Request, Response } from 'express';
import validateResource from '../middleware/validate-resource';
import { createTrailSchema } from '../schema/trail-schema';

const router = Router();

router.post('/create', validateResource(createTrailSchema), createTrailHandler);
router.get('/akyat', (_: Request, res: Response) => {
  return res.send('akyat here');
});

export default router;
