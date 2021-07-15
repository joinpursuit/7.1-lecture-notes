// DEPENDENCIES
const db = require("../db/dbConfig.js");

// QUERIES

/* INDEX */
const getAllReviews = async (bookmarkId) => {
  try {
    const allReviews = await db.any(
      "SELECT * FROM reviews WHERE bookmark_id=$1",
      bookmarkId
    );
    return allReviews;
  } catch (e) {
    return e;
  }
};

/* SHOW */
const getReview = async (bookmarkId, id) => {
  try {
    const oneReview = await db.one(
      "SELECT * FROM reviews WHERE id=$1 AND bookmark_id=$2",
      [id, bookmarkId]
    );
    return oneReview;
  } catch (e) {
    return e;
  }
};

// CREATE
const newReview = async (bookmarkId, review) => {
  try {
    const newReview = await db.one(
      `
      INSERT INTO reviews
      (reviewer, title, content, rating, bookmark_id)
      VALUES
      ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [review.reviewer, review.title, review.content, review.rating, bookmarkId]
    );
    return newReview;
  } catch (e) {
    return e;
  }
};

/* UPDATE */
const updateReview = async (bookmarkId, id, review) => {
  try {
    const updatedReview = await db.one(
      `
      UPDATE reviews
      SET reviewer=$1, title=$2, content=$3, rating=$4
      WHERE id=$6 AND bookmark_id=$5
      RETURNING *
      `,
      [
        review.reviewer,
        review.title,
        review.content,
        review.rating,
        bookmarkId,
        id,
      ]
    );
    return updatedReview;
  } catch (e) {
    return e;
  }
};

/* DELETE */
const deleteReview = async (bookmarkId, id) => {
  try {
    const deletedReview = await db.one(
      `
      DELETE FROM reviews
      WHERE id=$1 AND bookmark_id=$2
      RETURNING *
      `,
      [id, bookmarkId]
    );
    return deletedReview;
  } catch (e) {
    return e;
  }
};

// EXPORTS
module.exports = {
  getAllReviews,
  getReview,
  newReview,
  updateReview,
  deleteReview,
};
