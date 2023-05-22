const http = require("http");
const express = require("express");
const dotenv = require("dotenv").config();
// const {db} = require('../arango');
// const mod_AOI_collection = require('../arango/collections/mod_AOI_collection');
const {aoiCollections} = require('../arango/collections/')

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the main backend!!!!')
    // mod_aoi.createAOICollection();
    aoiCollections.createAOICollection()
});



const server = http.createServer(app);

server.listen(5000, () => console.log("SERVER RUNNING ON locahost:" + 5000));
