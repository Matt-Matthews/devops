const arango = require("arangojs");
// const {aoiCollection} = require("../arango/collections")

require("dotenv").config();

const db = new arango.Database(process.env.DB_HOSTNAME);

db.login(
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD
).then((doc) => {
  console.log('User Logged in..')
}).catch(err => console.log(err))
// const dbInstance = db.database("myDB");

module.exports = {
  db,
};
