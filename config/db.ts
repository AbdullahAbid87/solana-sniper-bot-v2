import mongoose from 'mongoose';

const db: string | undefined = process.env.MONGO_URI;

if (!db) {
  throw new Error('MONGO_URI is not defined');
}

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(db);
    console.log('mongoDb connected');
  } catch (err) {
    console.error((err as Error).message);

    process.exit(1);
  }
};

export default connectDB;
