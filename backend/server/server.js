const express = require("express");
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv").config({ path: "../.env" });

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/rockets", require("./routes/rocketRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
