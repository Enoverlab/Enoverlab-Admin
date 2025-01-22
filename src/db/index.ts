import mongoose from 'mongoose';
import { Database, Resource } from '@adminjs/mongoose';
import AdminJS from 'adminjs';
import dotenv from 'dotenv';

dotenv.config();

AdminJS.registerAdapter({ Database, Resource });

const initialize = async () => {
  try {
    const testMongoString = process.env.MongoStringTest as string;
    const productionMongoString = process.env.MongoStringProd as string;
    const preferredDb = process.env.NODE_ENV === 'development' ? testMongoString : productionMongoString;
    const db = await mongoose.connect(preferredDb);
    return { db };
  } catch (error) {
    console.log(error)
  }
};

export default initialize;
