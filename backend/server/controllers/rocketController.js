const asyncHandler = require("express-async-handler");
const Rocket = require("../models/rocketModel");

// @desc    Add a New Rocket
// @route   Post /api/rockets
// @access  Public
const addRocket = asyncHandler(async (req, res) => {
  const { name, year, passengers, about } = req.body;

  if (!name || !year || !passengers || !about) {
    res.status(400);
    throw new Error("Please add all fields");
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

// @desc    Get a Rocket's Data from the DB
// @route   get /api/rockets/rocket
// @access  Public

// @desc    Delete a rocket from the DB
// @route   DEL /api/rockets/rocket
// @access  Public

module.exports = {
  addRocket,
};
