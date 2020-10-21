const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./models");
const seed = require("./seeders/seed");
// const workoutController = require("./controllers/workoutController");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/architecture",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   }
// );

// const connection = mongoose.connection;

// connection.on("connected", () => {
//   console.log("Mongoose successfully connected.");
// });

// connection.on("error", (err) => {
//   console.log("Mongoose connection error: ", err);
// });

// app.get("/", (req, res) => {
//   res.render("./public/index.html");
// });

// app.get("/exercise", (req, res) => {
//   res.render("./public/exercise.html");
// });
app.get("/", (req, res) => {
  db.Workout.find({}).then((foundWorkout) => {
    console.log(foundWorkout);
    res.json(foundWorkout);
  });
});

// app.use(workoutController);

app.listen(function () {
  console.log("Listening at https://localhost:" + PORT);
});
