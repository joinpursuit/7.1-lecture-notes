// DEPENDENCIES
const db = require("../db/dbConfig.js");

const getAllBookmarks = async () => {
  try {
    const allBookmarks = await db.any("SELECT * FROM bookmarks");
    return allBookmarks;
  } catch (err) {
    return err;
  }
};

// SHOW
const getBookmark = async (id) => {
  try {
    const oneBookmark = await db.one("SELECT * FROM bookmarks WHERE id=$[id]", {
      id: id,
    });
    return oneBookmark;
  } catch (e) {
    return e;
  }
};

// CREATE
const createBookmark = async (bookmark) => {
  try {
    if (!bookmark.name) {
      throw 'You must specify a value for "name"';
    }
    const newBookmark = await db.one(
      "INSERT INTO bookmarks (name, url, is_favorite) VALUES($1, $2, $3) RETURNING *",
      [bookmark.name, bookmark.url, bookmark.is_favorite]
    );
    return newBookmark;
  } catch (e) {
    return e;
  }
};

// DELETE
const deleteBookmark = async (id) => {
  try {
    return await db.one("DELETE FROM bookmarks WHERE id=$1 RETURNING *;", id);
  } catch (e) {
    return e;
  }
};

// UPDATE
const updateBookmark = async (id, bookmark) => {
  try {
    return await db.one(
      "UPDATE bookmarks SET name = $1, url = $2, category = $3, is_favorite = $4 WHERE id=$5 RETURNING *;",
      [bookmark.name, bookmark.url, bookmark.category, bookmark.is_favorite, id]
    );
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllBookmarks,
  getBookmark,
  createBookmark,
  deleteBookmark,
  updateBookmark,
};
