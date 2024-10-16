import { Router } from 'express';
import user from './user-routes';
import trail from './trail-routes';

const router = Router();

router.get('/healthCheck', (_, res) => {
  return res.sendStatus(200);
});

router.use('/users', user);
router.use('/trails', trail);

export default router;
