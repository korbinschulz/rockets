const express = require("express");
const router = express.Router();
const {
  addRocket,
  deleteRocket,
  getRockets,
  updateRocket,
} = require("../controllers/rocketController");

router.route("/").post(addRocket).get(getRockets);
router.route("/:id").delete(deleteRocket).put(updateRocket);

module.exports = router;
