import Joi from "joi";
import { Blog } from "../blog";

const validateBlog = (blog: Blog) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(2),
    author: Joi.string().required().min(2).max(20),
    time: Joi.date(),
  });

  return schema.validate(blog);
};

export default validateBlog;
