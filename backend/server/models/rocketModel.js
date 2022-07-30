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
    img: {
      type: String,
      required: [true, "Please include an image src for the rocket"],
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
