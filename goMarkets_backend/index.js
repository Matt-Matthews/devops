const http = require("http");
const { app } = require("./app");
const { connect } = require("./helpers/dbHelper");

require("dotenv").config();

// GLOBAL VARIABLES
const PORT = process.env.PORT || 8000;

const main = async () => {
  try {
    await connect();
    const server = http.createServer(app);

    server.listen(PORT, () =>
      console.log("SERVER RUNNING ON localhost:" + PORT)
    );
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

main();
