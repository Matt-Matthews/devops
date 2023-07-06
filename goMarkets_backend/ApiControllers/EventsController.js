const express = require("express");
const { Events } = require("../Models/EventModel");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("EVENTS: ", await Events.findAll());
  return res.json({ message: "Events" });
});

router.post("/", (req, res) => {
  console.log("POSTING");
  return res.json({ message: "Events" });
});

router.get("/:id", (req, res) => {
  console.log("EVENT");
  return res.json({ message: "Event" });
});

router.patch("/:id", (req, res) => {
  console.log("PATCH");
  return res.json({ message: "Event" });
});

module.exports = router;
