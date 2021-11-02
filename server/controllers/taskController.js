import PostTask from '../models/postTask.js'
import PostUser from '../models/postUser.js'

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
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await PostTask.deleteOne({_id: id });
    res.status(200).json({delete: true});
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
