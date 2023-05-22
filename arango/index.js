const arango = require("arangojs");
require("dotenv").config();

const db = new arango.Database({
  url: process.env.DB_HOSTNAME,
  auth: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});
