const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmark.js");

const validateUrl = (req, res, next) => {
  const http = "http://";
  const https = "https://";
  var fullUrl = req.protocol + "://" + req.get("host") + req.url;
  console.log(`[development] Request URL: ${fullUrl}`);
  if (fullUrl.substring(0, 7) === http || fullUrl.substring(0, 8) === https) {
    return next();
  } else {
    res
      .status(400)
      .send(`Oops, you forgot to start your url with http:// or https://`);
  }
};

const validateBody = (req, res, next) => {
  const { name, url, isFavorite, category } = req.body;
  if (!name) {
    res.status(400).send();
  }
  next();
};

bookmarks.use(validateUrl);

bookmarks.get("/", (req, res) => {
  res.status(200).json(bookmarksArray);
});

bookmarks.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (bookmarksArray[arrayIndex]) {
    res.status(200).json(bookmarksArray[arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

bookmarks.post("/", validateBody, (req, res) => {
  // Create the new resource
  bookmarksArray.push(req.body);
  // Send back the new resource as confirmation
  res.json(bookmarksArray[bookmarksArray.length - 1]);
});

bookmarks.put("/:index", validateBody, (req, res) => {
  const { index } = req.params;

  if (bookmarksArray[index]) {
    bookmarksArray[index] = req.body;
    res.json(bookmarksArray[index]);
  } else {
    res.redirect("/404");
  }
});

bookmarks.delete("/:index", (req, res) => {
  // get the value of the index we are trying to delete
  const { index } = req.params;

  // check if a resource actually exists at that index
  if (bookmarksArray[index]) {
    // if yes: delete it and send a copy of the deleted resource
    const deleted = bookmarksArray.splice(index, 1);
    res.json(deleted[0]);
  } else {
    // if no: redirict to 404 since the resource doesn't exist
    res.redirect("/404");
  }
});

module.exports = bookmarks;
