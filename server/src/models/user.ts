import Joi from "joi";
import * as mongoose from "mongoose";

export interface UserModel {
  _id: number;
  name: string;
  username: string;
  password: string;
  email: string;
}

const userSchema = new mongoose.default.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  email: {
    type: String,
    required: true,
  },
});

const validateUser = (user: UserModel) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).email().required(),
  });

  return schema.validate(user);
};

exports.validateUser = validateUser;
exports.User = mongoose.default.model("user", userSchema, "users");
