import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  name: String,
  genre: String,
  authorId: String,
});

export default mongoose.model('Book', bookSchema);
