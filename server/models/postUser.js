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
  tarefas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'taskSchema',
    default: null,
  }],
},
// https://stackoverflow.com/questions/13699784/mongoose-v-property-hide
{ versionKey: false });

const PostUser = mongoose.model('PostUser', postUser);

export default PostUser;