import express from "express";

const router = express.Router();

//get all users
router.get("/", (req, res) => {});

//get a user
router.get("/:id", (req, res) => {});

//create a user
router.post("/", (req, res) => {});

//update a user
router.put("/:id", (req, res) => {});

//delete a user
router.delete("/:id", (req, res) => {});

module.exports = router;
