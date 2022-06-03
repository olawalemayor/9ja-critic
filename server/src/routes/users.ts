import { Router } from "express";

const { User } = require("../models/user");

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the user directory");
});

router.get("/all", async (req, res) => {
  console.log("all is responding");
  const users = await User.find();
  console.log(users);
  if (!users) {
    console.log("No user");
    res.status(404).send("User was not found!");
  }

  res.send(users);
});

router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);

  if (!user) res.status(404).send("User not found");

  res.send(user);
});

router.post("/new", (req, res) => {
  const newUser = new User(req.body);

  // User.findOne(
  //   { email: newUser.email },
  //   (err: Error, registeredUser: UserModel) => {
  //     if (err) console.log(err);

  //     if (registeredUser) res.status(404).send("User already exists");
  //     else {
  //     }
  //   }
  //   );
  newUser.save();
  res.send(newUser);
});

module.exports = router;
