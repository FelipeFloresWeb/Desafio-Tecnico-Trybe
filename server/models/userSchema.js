const mongoose = require('mongoose');

// src: https://mongoosejs.com/docs/populate.html
const userSchema = mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  dataDeCriacao: String,
  tarefas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TaskSchema',
    default: null,
  }],
},
// https://stackoverflow.com/questions/13699784/mongoose-v-property-hide
{ versionKey: false });

const UserSchema = mongoose.model('UserSchema', userSchema);

module.exports = UserSchema;