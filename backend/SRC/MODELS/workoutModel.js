const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A workout must have  name"],
    },
    reps: {
      type: Number,
      required: [true, "A workout must have a number of repetations"],
    },
    load: {
      type: Number,
      required: [true, "A workout must have  load"],
    },
  },
  {
    timestamps: true,
  }
);

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout