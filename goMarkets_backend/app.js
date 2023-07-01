const express = require("express");
const eventsRouter = require("./ApiControllers/EventsController");
const userRouter = require("./ApiControllers/UsersController");
const authRouter = require("./ApiControllers/AuthController");

const app = express();

app.use(express.json());
// app.use(express.static());

// Middlewares
app.use((req, res, err, next) => {
  console.log("RUNNING MIDDLEWARE");
  next();
});

// ROUTERS
app.use("/events", eventsRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

module.exports = { app };
