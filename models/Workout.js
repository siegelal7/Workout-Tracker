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

const workoutSchema = new mongoose.Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      // {
      //   type: Schema.Types.ObjectId,
      //   ref: "Exercise",
      // },
      {
        type: {
          type: String,
        },
        name: {
          type: String,
          required: "enter a name",
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
// const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Workout;
