import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const DB_URL = process.env.MONGO_ATLAS;
console.log(DB_URL);
const Connection = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.log(` Error connecting to MongoDB: ${err.message}`);
  }
};

export default Connection;
