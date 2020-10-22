const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const exerciseSchema = new Schema({
//   type: String,
//   name: String,
//   duration: Number,
//   weight: Number,
//   reps: Number,
//   sets: Number,
// });

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
    // {
    //   type: String,
    //   name: String,
    //   duration: Number,
    //   weight: Number,
    //   reps: Number,
    //   sets: Number,
    //   distance: Number,
    // },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);
// const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Workout;
