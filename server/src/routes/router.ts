import { Router } from 'express';
import express from 'express';
import user from './user-routes';

const router = express();

// router.get('/healthCheck', (_, res) => {
//   return res.sendStatus(200);
// });

router.use('/users', user);

export default router;
