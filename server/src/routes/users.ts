import express from "express";
import prisma from "../client";
import jwt from "jsonwebtoken";

const Users = prisma.user;

const router = express.Router();

//get all users
router.get("/", async (req, res) => {
  try {
    const result = await Users.findMany();
    if (!result.length) return res.status(404).send("No users found");

    return res.json(result);
  } catch (error) {
    res.status(400).send("Bad request");
    throw error;
  }
});

//get a user
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findUnique({ where: { id: req.params.id } });
    if (!user) return res.status(404).send("Users not found");

    return res.json(user);
  } catch (error) {
    res.status(400).send("Bad request");
    throw error;
  }
});

//Login Authentication
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findFirst({
    where: { email: email, password: password },
  });
});

//create a user
router.post("/", async (req, res) => {
  try {
    let { firstName, lastName, email, password, role } = req.body;
    role = role ? role : "CLIENT";

    const user = await Users.create({
      data: {
        firstName,
        email,
        lastName,
        password,
        role,
      },
    });

    return res.json(user);
  } catch (error) {
    res.status(400).send("Could not create user");
    throw error;
  }
});

//update a user
router.put("/:id", async (req, res) => {
  try {
    let { firstName, lastName, email, password, role } = req.body;
    role = role ? role : "CLIENT";

    const user = await Users.update({
      where: {
        id: req.params.id,
      },
      data: {
        firstName,
        email,
        lastName,
        password,
        role,
      },
    });

    return res.json(user);
  } catch (error) {
    res.status(400).send("Could not update user");
    throw error;
  }
});

//delete a user
router.delete("/:id", async (req, res) => {
  try {
    const user = await Users.delete({ where: { id: req.params.id } });

    res.json(user);
  } catch (error) {
    res.status(400).send("Could not delete user");
    throw error;
  }
});

//reset users database
router.post("/reset", async (req, res) => {
  try {
    const { count } = await Users.deleteMany();
    return res.send(`${count} users were removed succesfully`);
  } catch (error) {
    res.status(400).send("Bad request");
    throw error;
  }
});

module.exports = router;
