import Joi from 'joi';

const login = Joi.object({
  email: Joi.string().email({
    tlds: { allow: false },
  }).required(),
  password: Joi.string().min(8).required(),
});

export default login;
