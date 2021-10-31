import mongoose from "mongoose";
import pkg from 'mongoose';

const postSchema = mongoose.Schema({
  titulo: String,
  descricao: String,
  criador: {
    type: pkg.ObjectId,
    ref: 'PostUser',
  },
  dataDeCriacao: {
    type: Date,
    default: new Date()
  },
  status: {
    type: String,
    default: 'Em andamento'
  },
  dataDeConclusao: {
    type: Date,
    default: null
  }
});

const PostTask = mongoose.model('PostTask', postSchema);

export default PostTask;