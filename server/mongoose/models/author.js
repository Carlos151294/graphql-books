import mongoose from 'mongoose';

const authorSchema = mongoose.Schema({
  name: String,
  age: Number,
});

export default mongoose.model('Author', authorSchema);
