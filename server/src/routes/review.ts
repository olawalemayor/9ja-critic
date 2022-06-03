import { Router } from "express";

const { Review } = require("../models/review");

const router = Router();

router.get("", (req, res) => {
  res.send("This is the review directory");
});

router.get("/:movieId", async (req, res) => {
  const { movieId } = req.params;

  const review = await Review.findOne({ movieId: movieId });

  if (!review) return res.send("Review not found").status(404);

  res.send(review);
});

router.post("/:movieId", (req, res) => {
  const newReview = new Review(req.body);

  newReview.save();
  res.send(newReview);
});
