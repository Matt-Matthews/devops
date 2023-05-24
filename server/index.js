const http = require("http");
const express = require("express");
const dotenv = require("dotenv").config();
const {db} = require('../arango');
const mod_AOI_collection = require('../arango/collections/db_Aoi');
const {aoiCollections} = require('../arango/collections/')
const {readMail} = require('./readMail');
// main()
const app = express();

app.get('/', async (req, res) => {
    res.send('Welcome to the main backend!!!!')
    // mod_aoi.createAOICollection();
    // res.json(emailList)
    });
    
    
//     async function main () {
        
//         const emailList = await readMail();

//         console.table(emailList);
// }

const server = http.createServer(app);

server.listen(5000, () => console.log("SERVER RUNNING ON localhost:" + 5000));
