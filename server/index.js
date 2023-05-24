const http = require("http");
const express = require("express");
const dotenv = require("dotenv").config();
const { db } = require("../arango");
const mod_AOI_collection = require("../arango/collections/mod_AOI_collection");
const { aoiCollections } = require("../arango/collections/");
const { readMail } = require("./readMail");
// main()
const app = express();

app.get("/", async (req, res) => {
  aoiCollections.createAOICollection();
  // res.send('Welcome to the main backend!!!!')
  const emails = await readMail();
  console.table(emails);
  res.json(emails);
});

const server = http.createServer(app);

server.listen(5000, () => console.log("SERVER RUNNING ON localhost:" + 5000));
