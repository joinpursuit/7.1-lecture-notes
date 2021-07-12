// DEPENDENCIES
const pgp = require("pg-promise")();
require("dotenv").config();

// an object to store db connection info
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);

// EXPORTS
module.exports = db;
