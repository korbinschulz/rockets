const express = require("express");
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;
const helmet = require("helmet");
const dotenv = require("dotenv").config({ path: "../.env" });

connectDB();

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  next();
});

app.use("/api/rockets", require("./routes/rocketRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
