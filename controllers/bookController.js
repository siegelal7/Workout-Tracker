const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/", (req, res) => {
  db.Book.find({}).then((foundBooks) => {
    res.json(foundBooks);
  });
});
