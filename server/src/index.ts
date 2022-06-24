import express from "express";
import cors from "cors";
import { users, movies, ratings } from "./routes";
import prisma from "./client";

const main = async () => {
  await prisma.$connect();
  console.log("Connected to database");

  const app = express();
  app.use(cors());

  app.use(express.json());

  app.use("/api/users", users);
  app.use("/api/movies", movies);
  app.use("/api/ratings", ratings);

  const port = process.env.PORT || 9000;

  app.listen(port, () => {
    console.log("Server is listening at Port : ", port);
  });
};

main().catch((e) => {
  throw e;
});
// .finally(async () => await prisma.$disconnect());
