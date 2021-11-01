import Joi from 'joi';

const create = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({
    tlds: { allow: false },
  }).required(),
  password: Joi.string().min(8).required(),
  repeatPassword: Joi.string().min(8).required(),
});

export default create;
