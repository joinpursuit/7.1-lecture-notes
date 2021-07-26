const express = require("express");
const furniturePieces = express.Router();

/* ROUTES */

// INDEX
furniturePieces.get("/", async (req, res) => {
  try {
    const allFurniturePieces = []; // we will replace with a query function
    res.json(allFurniturePieces);
  } catch (e) {
    res.status(404).json({
      payload: "Resource not found",
      error: e,
    });
  }
});

// SHOW
furniturePieces.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const furniturePiece = {}; // replace with a query to db
    res.json(furniturePiece);
  } catch (e) {
    res.status(404).json({
      payload: "Resource not found",
      error: e,
    });
  }
});

// CREATE
furniturePieces.post("/", async (req, res) => {
  try {
    const newFurniturePiece = {}; // replace with db query
    res.json(newFurniturePiece);
  } catch (e) {
    res.status(404).json({
      payload: "Resource not created",
      error: e,
    });
  }
});

// DELETE
furniturePieces.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFurniturePiece = {}; // replace with db query
    res.json(deletedFurniturePiece);
  } catch (e) {
    res.status(404).json({
      payload: "Resource not deleted",
      error: e,
    });
  }
});

// UPDATE
furniturePieces.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFurniturePiece = {}; // replace with db query
    res.json(updatedFurniturePiece);
  } catch (e) {
    res.status(404).json({
      payload: "Resource not updated",
      error: e,
    });
  }
});

module.exports = furniturePieces;
