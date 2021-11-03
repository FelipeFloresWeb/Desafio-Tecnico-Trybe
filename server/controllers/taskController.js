import PostTask from '../models/postTask.js'
import PostUser from '../models/postUser.js'
import moment from 'moment';

const dataAtual = moment().format('DD-MM-YYYY');
const horaAtual = moment().format('LTS');

export const getAllTasks = async (req, res) => {
    const getTasks = await PostTask.find();

    if (!getTasks) return res.status(204).json({ message: 'user have not any task yet' });
    return res.status(200).json(getTasks);
};

export const getTasks = async (req, res) => {
  const { id } = req.body;
    const getUser = await PostUser.findOne({ _id: id });
    const getTasks = await PostTask.find({ autor: id });

    if (!getTasks) return res.status(204).json({ message: 'user have not any task yet' });
    return res.status(200).json({ user: getUser, tasks: getTasks});
};

export const addTask = async (req, res) => {
  const data = req.body;
  const { email, id, prioridade, nome, descricao } = data;
  const newUser = new PostTask({autor: id, prioridade, nome, descricao });
  try {
    const added = await newUser.save();
    res.status(200).json(added);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const initTask = async (req, res) => {
  const { id } = req.params;

  try {
    await PostTask.updateOne({_id: id }, { status: 'Em andamento' });

    res.status(200).json({update: true});
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const doneTask = async (req, res) => {
  const { id } = req.params;

  try {
    await PostTask.updateOne({_id: id }, { status: 'Pronto', dataDeConclusao: `${dataAtual - horaAtual}` });

    res.status(200).json({done: true});
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
