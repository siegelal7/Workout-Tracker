const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

// Export the User model
module.exports = Exercise;
