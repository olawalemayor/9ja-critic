import * as express from "express";
import * as cors from "cors";
import * as mongoose from "mongoose";
const users = require("./routes/users");
const movies = require("./routes/movies");

const app = express.default();
app.use(cors.default());
app.use(express.json());

const PORT = 3000 || process.env.PORT;

const host = "localhost";
const port = 271017;

mongoose.default
  .connect(`${host}:${port}/naijacritic`)
  .then(() => {
    console.log("Connected to database!");
    app.get("/", (req, res) => {
      res.send("Server is working fine");
    });

    app.use("/users", users);

    app.use("movies", movies);

    app.listen(PORT, () => {
      console.log("Server is listening on port : ", PORT);
    });
  })
  .catch((err) => console.error("Could not connect to MongoDB...", err));
