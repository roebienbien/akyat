import dotenv from 'dotenv';

dotenv.config();

// server config
const SERVER_PORT = process.env.SERVER_PORT;
const SERVER = {
  port: SERVER_PORT,
};

// db config
const MONGO_URI = process.env.MONGO_URI as string;
const MONGO = {
  uri: MONGO_URI,
};

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;

const config = {
  server: SERVER,
  mongo: MONGO,
  origin: CLIENT_ORIGIN,
};

export default config;
