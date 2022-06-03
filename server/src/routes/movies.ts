import { Router } from "express";

const { Movie } = require("../models/movie");

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the movie directory");
});

router.get("/all", async (req, res) => {
  console.log("all is responding");
  const movies = await Movie.find();
  console.log(movies);
  if (!movies) {
    console.log("No movie");
    res.status(404).send("Movie was not found!");
  }

  res.send(movies);
});

router.get("/movie/:movieId", async (req, res) => {
  const { movieId } = req.params;
  const movie = await Movie.findById(movieId);

  if (!movie) res.status(404).send("Movie not found");

  res.send(movie);
});

router.post("/new", (req, res) => {
  const newMovie = new Movie(req.body);

  // User.findOne(
  //   { email: newMovie.email },
  //   (err: Error, registeredUser: UserModel) => {
  //     if (err) console.log(err);

  //     if (registeredUser) res.status(404).send("User already exists");
  //     else {
  //     }
  //   }
  //   );
  newMovie.save();
  res.send(newMovie);
});

module.exports = router;
