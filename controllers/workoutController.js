const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/", (req, res) => {
  db.Workout.find({}).then((foundWorkout) => {
    res.json(foundWorkout);
  });
});
