import express from "express";

const router = express.Router();

//get all movies
router.get("/", (req, res) => {});

//get a single movie
router.get("/:id", (req, res) => {});

//create a new movie
router.post("/", (req, res) => {});

//like a movie
router.post("/:id/like", (req, res) => {});

//update a movie
router.put("/:id", (req, res) => {});

//delete a movie
router.delete("/:id", (req, res) => {});

module.exports = router;
