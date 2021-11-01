import PostTask from '../models/postTask.js'
import PostUser from '../models/postUser.js'

export const getTasks = async (req, res) => {
  const { email } = req.body;
  try {
    const getTasks = await PostUser.findOne({ email })
    if (!getTasks) return res.status(404).json({ message: 'user have not any task yet' });
    res.status(200).json(getTasks);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const createTask = async (req, res) => {
  const { email } = req.body;

  const getTasks = await PostUser.create({ email })
  if (!getTasks) return
  
  const newTask = new PostTask(post)
  try {
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
