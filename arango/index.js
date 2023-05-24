const arango = require("arangojs");
// const {aoiCollection} = require("../arango/collections")

require("dotenv").config();

const db = new arango.Database(process.env.DB_HOSTNAME);

module.exports = {
  db,
};
