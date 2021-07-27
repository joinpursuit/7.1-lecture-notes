const express = require("express");
const {
  createFurniture,
  getAllFurniture,
  getFurniture,
  updateFurniture,
  deleteFurniture,
} = require("../queries/furniture");
const furniturePieces = express.Router();

/* ROUTES */

// INDEX
furniturePieces.get("/", async (req, res) => {
  const { success, payload } = await getAllFurniture();
  if (success) {
    res.json({ success, payload });
  } else {
    console.error(payload);
    res.status(404).json({ success, payload: "Resource not found" });
  }
});

// SHOW
furniturePieces.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { success, payload } = await getFurniture(id); // replace with a query to db
  if (success) {
    res.json({ success, payload });
  } else {
    console.error(payload);
    res.status(404).json({ success, payload: "Resource not found" });
  }
});

// CREATE
furniturePieces.post("/", async (req, res) => {
  // Below is some very basic data validation
  // Some ways you can improve this:
  // move data validation to its own middleware function
  // add type checking and check the structure of fields

  // req.body must have a price
  if (!req.body.price) {
    res.status(400).json({
      success: false,
      payload: "missing furniture.price",
    });
    return;
  }
  // req.body must have a name
  if (!req.body.name) {
    res.status(400).json({
      success: false,
      payload: "missing furniture.name",
    });
    return;
  }

  // Database call
  const { success, payload } = await createFurniture(req.body);
  if (success) {
    res.json({ success, payload });
  } else {
    console.error(payload);
    res.status(500).json({ success, payload: "Resource not created." });
  }
});

// DELETE
furniturePieces.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { success, payload } = await deleteFurniture(id); // replace with db query

  if (success) {
    res.json({ success, payload });
  } else {
    console.error(payload);
    res.status(404).json({ success, payload: "Resource not deleted" });
  }
});

// UPDATE
furniturePieces.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { success, payload } = await updateFurniture(id, req.body);
  if (success) {
    res.json({ success, payload });
  } else {
    console.error(payload);
    res.status(404).json({
      payload: "Resource not updated",
      success,
    });
  }
});

module.exports = furniturePieces;
