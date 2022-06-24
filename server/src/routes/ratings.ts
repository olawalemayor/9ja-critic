import express from "express";
import prisma from "../client";

const Ratings = prisma.rating;
const router = express.Router();

// To get all ratings
router.get("/", async (req, res) => {
  try {
    const result = await Ratings.findMany();
    if (!result.length) return res.send("No ratings found").status(404);

    res.json(result);
  } catch (error) {
    res.status(400).send("Bad request");
    throw error;
  }
});

// To get all ratings for a movie
router.get("/:movieId", async (req, res) => {
  try {
    const result = await Ratings.findMany({
      where: { movieId: req.params.movieId },
    });
    if (!result.length)
      return res.send("No ratings for this movie").status(404);

    res.json(result);
  } catch (error) {
    res.status(400).send("Bad request");
    throw error;
  }
});

//To get ratings of  user
router.get("/:userId", async (req, res) => {
  try {
    const ratings = await Ratings.findMany({
      where: { userId: req.params.userId },
    });
    if (!ratings.length)
      return res.status(404).send("No ratings for this user");

    res.json(ratings);
  } catch (error) {
    res.status(400).send("Bad request");
    throw error;
  }
});

//To get a single movie rating of a user
router.get("/:movieId/:userId", async (req, res) => {
  try {
    const { movieId, userId } = req.params;
    const rating = await Ratings.findMany({
      where: { userId: userId, movieId: movieId },
    });

    if (!rating) return res.status(404).send("Rating not found!");

    res.json(rating);
  } catch (error) {
    res.status(400).send("Bad request");
    throw error;
  }
});

//To create a rating
router.post("/", async (req, res) => {
  try {
    let { value, userId, movieId } = req.body;

    //check if rating alrady exists
    const existingRating = await Ratings.findFirst({
      where: { movieId: movieId, userId: userId },
    });

    if (existingRating) return res.send("Rating already exist");

    //if it doesn't exist create a new one
    const rating = await Ratings.create({
      data: {
        value,
        movieId,
        userId,
      },
    });

    res.json(rating);
  } catch (error) {
    res.status(400).send("Could not create rating");
    throw error;
  }
});

//To update rating
router.put("/:id", async (req, res) => {
  try {
    let { value, userId, movieId } = req.body;

    const rating = await Ratings.update({
      where: { id: req.params.id },
      data: {
        value,
        movieId,
        userId,
      },
    });

    res.json(rating);
  } catch (error) {
    res.status(400).send("Could not update rating");
    throw error;
  }
});

//To delete a rating
router.delete("/:id", async (req, res) => {
  try {
    const rating = await Ratings.delete({
      where: { id: req.params.id },
    });

    res.json(rating);
  } catch (error) {
    res.status(400).send("Could not delete rating");
    throw error;
  }
});

//To get average rating for a single movie
router.get("/get/:movieId", async (req, res) => {
  try {
    const ratings = await Ratings.findMany({
      where: { movieId: req.params.movieId },
      select: { value: true },
    });

    // instantiate empty array to hold sum each values of ratings <O(1)>
    const ratingsArray: number[] = [];

    // push each rating into the empty array <O(n)>
    ratings.forEach((rating) => ratingsArray.push(rating.value));

    //get sum of Array <O(n)>
    const sum = ratingsArray.reduce((x, y) => x + y);

    res.send(sum / ratingsArray.length);
  } catch (error) {
    res.status(400).send("Could not get rating");
    throw error;
  }
});

module.exports = router;
