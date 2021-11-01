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
  const { email, name, password } = post;
  const newUser = new PostUser({ nome: name, email, senha: password  })

  try {
    const getUser = await PostUser.findOne({ email });

    if (getUser) return res.status(404).json({message: 'usuario já cadastrado'});
    await newUser.save();
    res.status(201).json(getUser);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const loginUser = async (req, res) => {
  const { password, email } = req.body
  try {
    const user = await PostUser.findOne({senha: password, email});
    if (!user) return res.status(404).json({message: 'Usuário não Encontrado'});

    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
