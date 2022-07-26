const mongoose = require("mongoose");

const rocketSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    year: {
      type: String,
      required: [true, "Please add the year that the rocket launched"],
    },
    passengers: {
      type: String,
      required: [true, "Please add the passengers, type none if none"],
    },
    about: {
      type: String,
      required: [true, "Please add information about the Rocket"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Rocket", rocketSchema);
