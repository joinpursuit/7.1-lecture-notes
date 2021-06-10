// DEPENDENCIES
const express = require("express");


// CONFIGURATION
const app = express();
const bookmarksController = require("./controllers/bookmarksController.js");

// ROUTES
app.use((req, res, next) => {
    console.log(`[development] Middleware is running!`);
    next();
});

app.use(express.json()); // Parse all incoming requests as JSON

app.get("/", (req, res) => {
    res.send("Welcome to the Bookmarks App!");
});

app.use("/bookmarks", bookmarksController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found.");
});

// EXPORT
module.exports = app;