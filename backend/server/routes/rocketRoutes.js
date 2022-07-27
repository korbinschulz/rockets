const express = require("express");
const router = express.Router();
const { addRocket } = require("../controllers/rocketController");

router.post("/add", addRocket);

module.exports = router;
