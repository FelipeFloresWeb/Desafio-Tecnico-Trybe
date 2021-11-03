import UserSchema from '../models/userSchema.js'
import TaskSchema from '../models/taskSchema.js'
import moment from 'moment';

const dataAtual = moment().format('DD-MM-YYYY');
const horaAtual = moment().format('LTS');
const currMoment = `${horaAtual} ${dataAtual}`;

export const getUsers = async (req, res) => {
  try {
    const getUsers = await UserSchema.find();

    res.status(200).json(getUsers);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const createUser = async (req, res) => {
  const post = req.body
  const { email, name, password } = post;
  const newUser = new UserSchema({ nome: name, email, dataDeCriacao: currMoment, senha: password  });

  try {
    const getUser = await UserSchema.findOne({ email });

    if (getUser) return res.status(404).json({message: 'usuario já cadastrado'});
    await newUser.save();
    res.status(201).json(getUser);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const loginUser = async (req, res) => {
  const { password, email } = req.body
    const user = await UserSchema.findOne({senha: password, email}, { senha: false });
    if (!user) return res.status(204).json({message: 'Usuário não Encontrado'});
    const { _id } = user;
    const getTasks = await TaskSchema.find({ autor: _id });

    return res.status(200).json({ user: user, tasks: getTasks});
};
