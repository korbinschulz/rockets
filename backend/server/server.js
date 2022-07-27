const express = require("express");
//const dotenv = require("dotenv").config({ path: "../env" });
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;
require("dotenv").config({ path: "../.env" });

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/add", require("./routes/rocketRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
