const express = require("express");
const router = express.Router();

router.post("/add", addRocket);

module.exports = router;