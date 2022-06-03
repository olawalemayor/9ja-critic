import Joi from "joi";
import * as mongoose from "mongoose";
export interface MovieModel {
  _id: string;
  title: string;
  description: string;
  author: string;
  time: string;
}

const blogSchema = new mongoose.default.Schema({
  name: String,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  author: {
    required: true,
    type: String,
  },
  time: {
    type: Date,
    required: true,
  },
});

const validateMovie = (movie: MovieModel) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    author: Joi.string().required(),
    time: Joi.date().required(),
  });

  return schema.validate(movie);
};

const Blog = mongoose.default.model("blog", blogSchema, "blogs");

exports.Blog = Blog;
exports.validateMovie = validateMovie;
