import mongoose from "mongoose";

// src: https://mongoosejs.com/docs/populate.html
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
    ref: 'taskSchema',
    default: null,
  }],
});

const PostUser = mongoose.model('PostUser', postUser);

export default PostUser;