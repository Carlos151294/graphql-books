import mongoose from 'mongoose';

export async function mongooseConnect() {
  try {
    await mongoose.connect(
      'mongodb+srv://carlos224:ZnMTCgRfXzRUOF7f@graphql-books.pkhhxnq.mongodb.net/?retryWrites=true&w=majority',
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
