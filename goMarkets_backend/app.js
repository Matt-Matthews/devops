const express = require("express");
const eventsRouter = require("./ApiControllers/EventsController");
const userRouter = require("./ApiControllers/UsersController");
const authRouter = require("./ApiControllers/AuthController");
const authMiddleWare = require("./Middleware/auth");

const app = express();

app.use(express.json());
// app.use(express.static());

// Middlewares
app.use((req, res, err, next) => {
  console.log("RUNNING MIDDLEWARE");
  next();
});

// ROUTERS
app.use("/events", authMiddleWare, eventsRouter);
app.use("/users", authMiddleWare, userRouter);
app.use("/auth", authRouter);

module.exports = { app };
