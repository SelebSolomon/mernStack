const express = require("express");
const router = express.Router();
const {
  getAllWorkouts,
  getWorkout,
  postWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../CONTROLLERS/workoutController");

// get workout
router.get("/", getAllWorkouts);

// get a workout
router.get("/:id", getWorkout);
// post a workout
router.post("/", postWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);
// update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
