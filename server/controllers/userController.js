import PostUser from '../models/postUser.js'

export const getUsers = async (req, res) => {
  try {
    const getUsers = await PostUser.find();

    res.status(200).json(getUsers);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const createUser = async (req, res) => {
  const post = req.body

  const newUser = new PostUser(post)
  try {
    await newUser.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const loginUser = async (req, res) => {
  const { password, email } = req.body
  try {
    const user = await PostUser.findOne({password, email}).exec()
    console.log(user);
    if (!user) return res.status(404).json({message: 'Usuário não Encontrado'});

    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
