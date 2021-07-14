// DEPENDENCIES
const express = require("express");
const reviews = express.Router({ mergeParams: true });
const {
  getAllReviews,
  getReview,
  newReview,
  updateReview,
  deleteReview,
} = require("../queries/reviews");

// ROUTES

/* INDEX */
reviews.get("/", async (req, res) => {
  try {
    const allReviews = await getAllReviews();
    console.log(`controller function call: ${allReviews}`);
    res.json(allReviews);
  } catch (e) {
    res.statusCode(404).statusMessage(e);
  }
});

/* SHOW */
reviews.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const review = await getReview(id);
    res.json(review);
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

/* CREATE */
reviews.post("/", async (req, res) => {
  try {
    const review = await newReview(req.body);
    res.json(review);
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

/* UPDATE */
reviews.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReview = await updateReview(id, req.body);
    res.json(updatedReview);
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

/* DELETE */
reviews.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await deleteReview(id);
    res.json(deletedReview);
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

// EXPORTS
module.exports = reviews;
