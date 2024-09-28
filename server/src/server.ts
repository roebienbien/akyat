import cors from 'cors';
import http from 'http';
import config from './config/config';
import logger from './config/logger';
// import router from './routes/router';
import connectToDb from './utils/connect-to-db';
import { getAllUsers } from './controllers/user-controller';
import express, { Request, Response } from 'express';
import { findAllUsers } from './services/user-services';
import router from './routes/router';

const app = express();

connectToDb();

app.use(cors({ origin: config.origin }));
app.use(express.json()); //for post

app.use(router);

const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => {
  logger.info(`Server running on port: ${config.server.port}`);
});
