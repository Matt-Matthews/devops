const arango = require("arangojs");
// const {aoiCollection} = require("../arango/collections")

require("dotenv").config();

const db = new arango.Database({
  url: process.env.DB_HOSTNAME,
  auth: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});

// console.log("Collection.....",aoiCollection);
// console.log(db);

module.exports = {
  db
}