const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const connection = require("./database.js");
const router = require("../src/routes/index.routes.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/", router);

app.listen(PORT, () => {
  connection();
  console.log("Server listening on port " + PORT);
});
