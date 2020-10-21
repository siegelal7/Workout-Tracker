const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const app = express();

const workoutController = require("./controllers/bookController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/architecture",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

// app.get("/", (req, res) => {
//   res.render("./public/index.html");
// });

// app.get("/exercise", (req, res) => {
//   res.render("./public/exercise.html");
// });

app.use(workoutController);
app.listen(function () {
  console.log("Listening at https://localhost:" + PORT);
});
