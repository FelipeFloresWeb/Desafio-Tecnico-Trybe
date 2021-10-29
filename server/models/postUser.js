import mongoose from "mongoose";

const postUser = mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  dataDeCriacao: {
    type: Date,
    default: new Date()
  }
});

const PostUser = mongoose.model('PostUser', postUser);

export default PostUser;