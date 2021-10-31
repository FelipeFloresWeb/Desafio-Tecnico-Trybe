import PostTask from '../models/postTask.js'

export const getTasks = async (req, res) => {
  try {
    const getTasks = await PostTask.find();

    res.status(200).json(getTasks);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const createTask = async (req, res) => {
  const post = req.body

  const newTask = new PostTask(post)
  try {
    await newTask.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
