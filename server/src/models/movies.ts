import Joi from "joi";
import * as mongoose from "mongoose";
export interface MovieModel {
  _id: string;
  title: string;
  description: string;
  userRating: string;
  publciRating: string;
  nuberOfVotes: number;
}

const movieSchema = new mongoose.default.Schema({
  name: String,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  publicRating: {
    type: Number,
    required: false,
  },
  userRating: {
    required: false,
    type: Number,
  },
});

const validateMovie = (movie: MovieModel) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    userRating: Joi.string(),
    publicRating: Joi.string().required(),
    nuberOfVotes: Joi.number().required(),
  });

  return schema.validate(movie);
};

const Movie = mongoose.default.model("movie", movieSchema, "movies");

exports.Movie = Movie;
exports.validateMovie = validateMovie;
