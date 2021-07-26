// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Furniture Store");
});

const furnitureController = require("./controllers/furnitureController.js");
app.use("/furniture_pieces", furnitureController);

// EXPORT
module.exports = app;
