const db = require("../db/dbConfig");

const indexQuery = "SELECT * FROM furniture_pieces;";

// CREATE
const createFurniture = async (furniture) => {
  try {
    const payload = await db.one(
      "INSERT INTO furniture_pieces \
      (model_number, name, description, price, year, is_flat_pack) \
      VALUES (\
        ${furniture.model_number},\
        ${furniture.name},\
        ${furniture.description},\
        ${furniture.price},\
        ${furniture.year},\
        ${furniture.is_flat_pack}\
      ) \
      RETURNING *;",
      { furniture }
    );
    return {
      success: true,
      payload,
    };
  } catch (error) {
    return {
      success: false,
      payload: error,
    };
  }
};

// INDEX
const getAllFurniture = async () => {
  try {
    const payload = await db.any("SELECT * FROM furniture_pieces;");
    return {
      success: true,
      payload,
    };
  } catch (error) {
    return {
      success: false,
      payload: error,
    };
  }
};

// SHOW
const getFurniture = async (id) => {
  try {
    const payload = await db.one(
      "SELECT * FROM furniture_pieces WHERE id=$1;",
      id
    );
    return {
      success: true,
      payload,
    };
  } catch (error) {
    return {
      success: false,
      payload: error,
    };
  }
};

// UPDATE
const updateFurniture = async (id, furniture) => {
  console.log([
    furniture.model_number,
    furniture.name,
    furniture.description,
    furniture.price,
    furniture.year,
    furniture.is_flat_pack,
    id,
  ]);
  try {
    const payload = await db.one(
      "UPDATE furniture_pieces \
      SET \
        model_number = $1, \
        name = $2, \
        description = $3, \
        price = $4, \
        year = $5, \
        is_flat_pack = $6\
      WHERE id=$7 RETURNING *;",
      [
        furniture.model_number,
        furniture.name,
        furniture.description,
        furniture.price,
        furniture.year,
        furniture.is_flat_pack,
        id,
      ]
    );
    return {
      success: true,
      payload,
    };
  } catch (error) {
    return {
      success: false,
      payload: error,
    };
  }
};

// DELETE
const deleteFurniture = async (id) => {
  try {
    const payload = await db.one(
      "DELETE FROM furniture_pieces WHERE id=$1 RETURNING *;",
      id
    );
    return {
      success: true,
      payload,
    };
  } catch (error) {
    return {
      success: false,
      payload: error,
    };
  }
};

module.exports = {
  createFurniture,
  getAllFurniture,
  getFurniture,
  updateFurniture,
  deleteFurniture,
};
