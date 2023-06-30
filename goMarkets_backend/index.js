const http = require("http");
const { app } = require("./ApiControllers");

require("dotenv").config();

// GLOBAL VARIABLES
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => console.log("SERVER RUNNING ON localhost:" + PORT));
