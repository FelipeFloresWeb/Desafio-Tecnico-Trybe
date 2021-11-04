const mongoose = require('mongoose');
const moment = require('moment');

const dataAtual = moment().format('DD-MM-YYYY');
const horaAtual = moment().format('LTS');

// src: https://mongoosejs.com/docs/populate.html
const taskSchema = mongoose.Schema({
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' },
  prioridade: String,
  nome: String,
  descricao: String,
  dataDeCriacao: String,
  status: {
    type: String,
    default: 'Pendente'
  },
  dataDeConclusao: {
    type: String,
    default: null
  }
},
// https://stackoverflow.com/questions/13699784/mongoose-v-property-hide
{ versionKey: false });

const TaskSchema = mongoose.model('TaskSchema', taskSchema);

module.exports = TaskSchema;