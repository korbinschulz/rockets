const asyncHandler = require("express-async-handler");
const Rocket = require("../models/rocketModel");

// @desc    Add a New Rocket
// @route   Post /api/rockets
// @access  Public
const addRocket = asyncHandler(async (req, res) => {
  const { name, year, about, img } = req.body;

  if (!name || !year || !about || !img) {
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
    name: req.body.name,
    year: req.body.year,
    img: req.body.img,
    about: req.body.about,
  });

  res.status(200).json(rocket);
});

// @desc    Get all rockets
// @route   Get /api/rockets
// @access  Public

const getRockets = asyncHandler(async (req, res) => {
  const rockets = await Rocket.find();

  if (rockets) {
    res.status(200).json(rockets);
  } else {
    res.status(400);
    throw new Error("Unable to get rockets!");
  }
});

// @desc    Delete a rocket from the DB
// @route   DEL /api/rockets/:id
// @access  Public

const deleteRocket = asyncHandler(async (req, res) => {
  const rocket = await Rocket.findById(req.params.id);
  if (!rocket) {
    res.status(400);
    throw new Error("Rocket not found!");
  }

  await rocket.remove();

  res.status(200).json({ id: req.params.id });
});

// @desc    Update a rocket in the DB
// @route   put /api/rockets/:id
// @access  Public

const updateRocket = asyncHandler(async (req, res) => {
  const rocket = await Rocket.findById(req.params.id);

  //Check for the rocket
  if (!rocket) {
    res.status(400);
    throw new Error("Rocket not found!");
  }

  const updatedRocket = await Rocket.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedRocket);
});

module.exports = {
  addRocket,
  deleteRocket,
  getRockets,
  updateRocket,
};
