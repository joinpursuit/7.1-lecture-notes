// Dependencies
const express = require("express");
const dotenv = require("dotenv");
const menu = require("./models/menu.js");

// Configuration
const app = express(); // app is an instance of express
dotenv.config(); // places the variables from .env file into process.env
const PORT = process.env.PORT || 3000;

// app.use(express.json());

app.use((req, res, next) => {
  if (req.headers["content-type"] === "application/json") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      req.body = JSON.parse(data);
      next();
    });
  } else {
    next();
  }
});

// Routes
app.post("/menu-items", (req, res) => {
  console.log("req.body is:", req.body);
  menu.push(req.body);
  console.log("menu is:", menu);
  res.json(menu[menu.length - 1]);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
