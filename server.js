const express = require("express");
const mongoose = require("mongoose");
// const logger = require("morgan");
const PORT = process.env.PORT || 8080;
const app = express();
// const db = require("./models");
// const seed = require("./seeders/seed");
const workoutController = require("./controllers/workoutController");
// app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.use(workoutController);
require("./controllers/htmlRoutes")(app);
app.listen(PORT, function () {
  console.log("Listening at http://localhost:" + PORT);
});
