import mongoose from 'mongoose';
import config from '../config/config';
import logger from '../config/logger';

const connectToDb = async () => {
  try {
    await mongoose.connect(config.mongo.uri);
    logger.info(`connected to database: ${config.mongo.uri}`);
  } catch (error) {
    logger.error(error);
  }
};

export default connectToDb;
