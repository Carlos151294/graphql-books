import mongoose from 'mongoose';

export async function mongooseConnect() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('db connected');
  } catch (error) {
    console.log('db not connected');
  }
}
