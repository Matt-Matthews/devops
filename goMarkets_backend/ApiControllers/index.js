const express = require("express");
const eventsRouter = require("./EventsController");

const app = express();

// Middlewares
app.use((req, res, err, next) => {
  console.log("RUNNING MIDDLEWARE");
  next();
});

// ROUTERS
app.use("/events", eventsRouter);

module.exports = { app };
