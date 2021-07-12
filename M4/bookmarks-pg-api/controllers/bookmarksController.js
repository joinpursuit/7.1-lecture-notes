// DEPENDENCIES
const express = require("express");
const bookmarks = express.Router();
const {
  getAllBookmarks,
  getBookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} = require("../queries/bookmarks.js");
const {
  RecordNotCreatedError,
  ValidationError,
  customErrorHandler,
} = require("../helper.js");

// MIDDLEWARE
const validateBookmark = (req, res, next) => {
  try {
    const { name, url, is_favorite } = req.body;

    let isBookmarkValid = true;
    let errorMsg = "Bookmark request not formatted correctly: ";

    if (typeof name !== "string") {
      isBookmarkValid = false;
      errorMsg += "The 'name' field must be of type 'string'";
    }
    if (typeof url !== "string") {
      isBookmarkValid = false;
      errorMsg += "The 'url' field must be of type 'string'";
    }
    if (typeof is_favorite !== "boolean") {
      isBookmarkValid = false;
      errorMsg += "The 'is_favorite' field must be of type 'boolean'";
    }
    if (isBookmarkValid !== true) {
      throw new ValidationError(errorMsg);
    }
  } catch (e) {
    next(e);
  }
  return next();
};

// INDEX
bookmarks.get("/", async (req, res) => {
  const allBookmarks = await getAllBookmarks();
  res.json(allBookmarks);
});

// SHOW
bookmarks.get("/:id", async (req, res) => {
  const { id } = req.params; // pretend id === 500
  try {
    const bookmark = await getBookmark(id);
    if (bookmark.id) {
      res.json(bookmark);
    } else {
      console.log(`Database error: ${bookmark}`);
      throw `There is no bookmark with id: ${id}`;
    }
  } catch (e) {
    res.status(404).json({ error: "Resource not found.", message: e });
  }
});

// CREATE
bookmarks.post("/", validateBookmark, async (req, res, next) => {
  try {
    const bookmark = await createBookmark(req.body);
    if (bookmark["id"]) {
      res.json(bookmark);
    } else {
      const msg = `Record not added to database: ${JSON.stringify(req.body)}`;
      throw new RecordNotCreatedError(msg);
    }
  } catch (e) {
    return next(e);
  }
});

// UPDATE
bookmarks.put("/:id", validateBookmark, async (req, res, next) => {
  const { id } = req.params;
  try {
    const bookmark = await updateBookmark(id, req.body);
    if (bookmark["id"]) {
      res.json(bookmark);
    } else {
      const msg = `Record not added to database: ${JSON.stringify(req.body)}`;
      throw new RecordNotCreatedError(msg);
    }
  } catch (e) {
    return next(e);
  }
});

// DELETE
bookmarks.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await deleteBookmark(id);
    if (deleted.id) {
      res.json(deleted);
    } else {
      const msg = `Record not deleted from database: ${id}`;
      throw new RecordNotCreatedError(msg);
    }
  } catch (e) {
    next(e);
  }
});

// ERROR HANDLING
bookmarks.use(customErrorHandler);

module.exports = bookmarks;
