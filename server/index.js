const http = require("http");
const express = require("express");
const dotenv = require("dotenv").config();
const { db } = require("../arango");
const DbAoiCollection = require("../arango/collections/db_Aoi");
const { aoiCollections } = require("../arango/collections/");

const app = express();


app.get("/", async (req, res) => {

  res.json({ message: 'Welcome' });
});

const server = http.createServer(app);

server.listen(5000, () => console.log("SERVER RUNNING ON localhost:" + 5000));
