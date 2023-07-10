const express = require("express");
const { Events } = require("../Models/EventModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await Events.findAll();
    res.status(200).json({ events, status: "Ok" });
  } catch (error) {
    console.log("ERROR💣💥💣💥");
    res.status(400).json({ message: "Couldn't get events" });
  }
});

router.post("/", (req, res) => {
  console.log("POSTING");
  return res.json({ message: "Events" });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (id === null)
    return res.status(400).json({
      status: "Fail",
      message: "Couldn't get the event with an incorrect id.",
    });

  try {
    const event = await Events.findByPk(id);
    res.status(200).json({ event, status: "Ok" });
  } catch (error) {
    console.log("ERROR💣💥💣💥");
    res.status(400).json({ message: "Couldn't get event" });
  }
});

router.patch("/:id", (req, res) => {
  console.log("PATCH");
  return res.json({ message: "Event" });
});

module.exports = router;
