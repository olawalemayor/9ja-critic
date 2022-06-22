import express from "express";
// import cors from "cors"
import { createConnection } from "typeorm";
import { User, Movie, Rating } from "./entities";
import { users, movies, ratings } from "./routes";

const main = async () => {
  try {
    await createConnection({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "naijacritic",
      entities: [User, Movie, Rating],
      logging: true,
      useUnifiedTopology: true,
      synchronize: true,
    });

    console.log("Connected to database");

    const app = express();

    setRoutes(app);

    const port = process.env.PORT || 9000;

    app.listen(port, () => {
      console.log("Server is listening at Port : ", port);
    });
  } catch (error) {
    throw new Error("Unable to connect to database because");
  }
};

main();

const setRoutes = (app: any) => {
  app.use(express.json());

  app.use("/api/users", users);
  app.use("/api/movies", movies);
  app.use("/api/ratings", ratings);
};
