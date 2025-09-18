const Workout = require("../MODELS/workoutModel");
const mongoose = require("mongoose");

// GET ALL WORKOUTS

exports.getAllWorkouts = async (req, res, next) => {
  try {
    const workout = await Workout.find().sort({ createdAt: -1 });

    if (!workout || workout.length === 0) {
      return res.status(400).json({ message: "No workout was found" });
    }
    res.status(200).json({
      status: "success",
      result: workout.length,
      data: {
        data: workout,
      },
    });
  } catch (error) {}
};

//GET A SINGLE WORKOUT
exports.getWorkout = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `NO Such ${id}` });
  }
  try {
    const workout = await Workout.findById(id);
    if (!workout) {
      return res
        .status(400)
        .json({ message: `no workout found with that${id}` });
    }
    res.status(200).json({
      status: "success",
      data: {
        data: workout,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: "fail",
      message: error.message,
    });
  }
};

//POST A WORKOUT

exports.postWorkout = async (req, res, next) => {
  const { title, reps, load } = req.body;
  const emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if(emptyFields.length > 0){
    return res.status(400).json({message: 'Please fill in all the fields', emptyFields})
  }

  try {
    const workout = await Workout.create({ title, reps, load });

    res.status(200).json({
      status: "success",
      data: {
        data: workout,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// UPDATE A WORKOUT
exports.updateWorkout = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `NO Such ${id}` });
  }
  try {
    const workout = await Workout.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!workout) {
      return res
        .status(400)
        .json({ message: `no workout found with that${id}` });
    }
    res.status(200).json({
      status: "success",
      data: {
        data: workout,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: "fail",
      message: error.message,
    });
  }
};

// DELETE A WORKOUT
exports.deleteWorkout = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `NO Such ${id}` });
  }
  try {
    const workout = await Workout.findByIdAndDelete({ _id: id });
    if (!workout) {
      return res
        .status(400)
        .json({ message: `no workout found with that${id}` });
    }
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      success: "fail",
      message: error.message,
    });
  }
};
