const http = require("http");
const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the main backend')
})

const server = http.createServer(app);

server.listen(5000, () => console.log("SERVER RUNNING ON locahost:" + 5000));
