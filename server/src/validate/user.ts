import Joi from "joi";
import { User } from "../user/user";

const validateUser = (user: User) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).email().required(),
  });

  return schema.validate(user);
};

export default validateUser;
