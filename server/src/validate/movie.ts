import Joi from "joi";
import { Movie } from "../movie";

const validateMovie = (movie: Movie) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(2),
    userRating: Joi.number().min(0).max(10),
    publicRating: Joi.number().min(0).max(10),
    numberOfVotes: Joi.number(),
  });

  return schema.validate(movie);
};

export default validateMovie;
