import mongoose from "mongoose";
import moment from 'moment';

const dataAtual = moment().format('DD-MM-YYYY');
const horaAtual = moment().format('LTS');


// src: https://mongoosejs.com/docs/populate.html
const postUser = mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  dataDeCriacao: {
    type: String,
    default: `${dataAtual - horaAtual}`
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