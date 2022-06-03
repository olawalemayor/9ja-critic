import Joi, { number } from "joi";
import * as mongoose from "mongoose";
export interface ReviewModel {
  _id: string;
  name: string;
  imageUrl: string;
  rating: number;
  movieId: string;
}

const reviewSchema = new mongoose.default.Schema({
  name: String,
  imageUrl: {
    required: false,
    type: String,
  },
  rating: Number,
  movieId: {
    required: true,
    type: String,
  },
});

const validateReview = (review: ReviewModel) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    imageUrl: Joi.string(),
    rating: Joi.string().required(),
    movieId: Joi.string().required(),
  });

  return schema.validate(review);
};

exports.validateMovie = validateReview;

exports.Review = mongoose.default.model("review", reviewSchema, "reviews");
