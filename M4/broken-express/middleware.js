// Dependencies
const express = require("express");
const dotenv = require("dotenv");

// Configuration
const app = express(); // app is an instance of express
dotenv.config(); // places the variables from .env file into process.env

// Middleware
app.use((req, res, next) => {
  console.log("INCOMING REQUEST: ", req.method, req.path);
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the homepage.");
});

app.get("/burger", (req, res) => {
  let msg = "here's your burger";
  if (req.query.cheese) {
    msg += " with cheese";
  }

  res.send(msg);
});

app.listen();
