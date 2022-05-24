import * as express from "express";

const app = express.default();
const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is working fine");
});

app.listen(PORT, () => {
  console.log("Server is listening on port : ", PORT);
});
