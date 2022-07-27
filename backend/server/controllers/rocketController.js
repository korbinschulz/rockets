const asyncHandler = require("express-async-handler");
const Rocket = require("../models/rocketModel");

// @desc    Add a New Rocket
// @route   Post /api/rockets
// @access  Public
const addRocket = asyncHandler(async (req, res) => {
  const { name, year, passengers, about, img } = req.body;

  if (!name || !year || !passengers || !about || !img) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //See if rocket already exists
  const rocketExists = await Rocket.findOne({ name });

  if (rocketExists) {
    res.status(400);
    throw new Error("Rocket already exists!");
  }

  //Create rocket
  const rocket = await Rocket.create({
    name,
    year,
    passengers,
    about,
  });

  if (rocket) {
    res.status(201).json({
      _id: rocket.id,
      name: rocket.name,
      year: rocket.year,
      passengers: rocket.passengers,
      about: rocket.about,
    });
  } else {
    res.status(400);
    throw new Error("Invalid rocket data");
  }
});

// @desc    Delete a rocket from the DB
// @route   DEL /api/rockets/rocket
// @access  Public

const deleteRocket = asyncHandler(async (req, res) => {});

module.exports = {
  addRocket,
};
