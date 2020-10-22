const express = require("express");
const router = express.Router();
// const path = require("path");

const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    // .populate("exercises")
    .then((foundWorkout) => {
      res.json(foundWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/exercises/", (req, res) => {
  db.Exercise.find({})
    .then((foundExercises) => {
      res.json(foundExercises);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((newExercise) => {
      res.json(newExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7)
    .then((foundWorkout) => {
      res.json(foundWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
