import mongoose from 'mongoose';
import moment from 'moment';

const dataAtual = moment().format('DD-MM-YYYY');
const horaAtual = moment().format('LTS');

// src: https://mongoosejs.com/docs/populate.html
const taskSchema = mongoose.Schema({
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'PostUser' },
  prioridade: String,
  nome: String,
  descricao: String,
  dataDeCriacao: {
    type: String,
    default: `${dataAtual - horaAtual}`
  },
  status: {
    type: String,
    default: 'Pendente'
  },
  dataDeConclusao: {
    type: Date,
    default: null
  }
},
// https://stackoverflow.com/questions/13699784/mongoose-v-property-hide
{ versionKey: false });

const TaskSchema = mongoose.model('taskSchema', taskSchema);

export default TaskSchema;