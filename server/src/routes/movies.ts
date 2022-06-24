import express from "express";
import prisma from "../client";

const Movies = prisma.movie;

const router = express.Router();

//get all movies
router.get("/", async (req, res) => {
  try {
    const result = await Movies.findMany();

    if (!result.length) return res.status(404).send("No movies found");

    return res.json(result);
  } catch (error) {
    res.status(400).send("Bad request");
    throw error;
  }
});

//get a single movie
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movies.findUnique({ where: { id: req.params.id } });

    if (!movie) return res.status(404).send("Movie not found");

    return res.json(movie);
  } catch (error) {
    res.status(400).send("Bad request");
    throw error;
  }
});

//create a new movie
router.post("/", async (req, res) => {
  try {
    let { title, description, cast, link, likes } = req.body;
    likes = likes ? likes : 0;

    const movie = await Movies.create({
      data: {
        description,
        likes,
        link,
        title,
        cast,
      },
    });

    return res.json(movie);
  } catch (error) {
    res.status(400).send("Could not create movie");
    throw error;
  }
});

//like a movie
router.post("/:id/like", async (req, res) => {
  try {
    let { title, description, cast, link, likes } = req.body;
    likes = likes ? likes : 0;

    likes++;

    const movie = await Movies.update({
      where: {
        id: req.params.id,
      },
      data: {
        title,
        cast,
        description,
        likes,
        link,
      },
    });

    return res.json(movie);
  } catch (error) {
    res.status(400).send("Could not like movie");
    throw error;
  }
});

//update a movie
router.put("/:id", async (req, res) => {
  try {
    let { title, description, cast, link, likes } = req.body;
    likes = likes ? likes : 0;

    const movie = await Movies.update({
      where: {
        id: req.params.id,
      },
      data: {
        cast,
        description,
        likes,
        link,
        title,
      },
    });

    return res.json(movie);
  } catch (error) {
    res.status(400).send("Could not update movie");
    throw error;
  }
});

//delete a movie
router.delete("/:id", async (req, res) => {
  try {
    const movie = await Movies.delete({ where: { id: req.params.id } });

    res.json(movie);
  } catch (error) {
    res.status(400).send("Could not delete movie");
    throw error;
  }
});

//reset movies database
router.post("/reset", async (req, res) => {
  try {
    const { count } = await Movies.deleteMany();
    return res.send(`${count} movies were removed succesfully`);
  } catch (error) {
    res.status(400).send("Bad request");
    throw error;
  }
});

module.exports = router;
