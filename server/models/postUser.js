import mongoose from "mongoose";

const postUser = mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  dataDeCriacao: {
    type: Date,
    default: new Date()
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PostTask',
  }],
});

const PostUser = mongoose.model('PostUser', postUser);

export default PostUser;