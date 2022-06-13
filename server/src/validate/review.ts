import Joi from "joi";
import { Review } from "../review";

const validateReview = (review: Review) => {
  const schema = Joi.object({
    imageUrl: Joi.string().min(8).max(255),
    rating: Joi.number().min(0).max(10),
    movieId: Joi.string(),
    userId: Joi.string(),
  });

  schema.validate(review);
};

export default validateReview;
