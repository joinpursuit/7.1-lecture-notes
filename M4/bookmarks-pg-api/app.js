// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const bookmarksController = require("./controllers/bookmarksController.js");
const reviewsController = require("./controllers/reviewsController.js");
const morgan = require("morgan");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("common"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks API!!!");
});

app.use("/bookmarks", bookmarksController);

app.use("/reviews", reviewsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page Not FOUND!");
});

// EXPORT
module.exports = app;
