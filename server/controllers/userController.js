const moment = require('moment');
const UserSchema = require('../models/userSchema');
const TaskSchema = require('../models/taskSchema');

const dataAtual = moment().format('DD-MM-YYYY');
const horaAtual = moment().format('LTS');
const currMoment = `${horaAtual} ${dataAtual}`;

const getUsers = async (req, res) => {
  try {
    const getAlltUsers = await UserSchema.find();

    res.status(200).json(getAlltUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const post = req.body;
  const { email, name, password } = post;

  const newUser = new UserSchema({
    nome: name, email, dataDeCriacao: currMoment, senha: password,
  });

  try {
    const getUser = await UserSchema.findOne({ email });

    if (getUser) return res.status(404).json({ message: 'usuario já cadastrado' });

    await newUser.save();
    return res.status(201).json(getUser);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await UserSchema.findOne({ senha: password, email }, { senha: false });
    if (!user) return res.json({ message: 'Usuário não Encontrado' });
    const { _id } = user;
    const getTasks = await TaskSchema.find({ autor: _id });

    return res.status(200).json({ user, tasks: getTasks });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
};
