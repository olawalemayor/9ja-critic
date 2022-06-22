import express from "express";

const router = express.Router();

router.get("/:movieId", (req, res) => {});

router.get("/:movieId/user", (req, res) => {});

router.post("/", (req, res) => {});

//update rating
router.put("/:id", (req, res) => {});

//delete a rating
router.delete("/:id", (req, res) => {});

module.exports = router;
