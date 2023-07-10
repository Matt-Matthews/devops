const express = require("express");
const { Events } = require("../Models/EventModel");
const uuid = require("uuid").v4

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

router.post("/", async (req, res) => {
  // console.log("POSTING");
  const {
    eventTitle: title,
    eventId: id,
    eventDescription: description,
    eventDate: date,
    eventTime: time,
    eventContact: contact,
    eventCondition: condition,
    eventUrls: urls,
    categoryId,
    locationId,
    userId,
  } = req.body;

  if (!(id || title || description || userId || categoryId || locationId)) {
    res.status(400).json({
      status: "Fail",
      message: "Event failed to create a new event!💣💣💣",
    });
  }

  const event = await Events.findOne({ where: { eventTitle: title } });
  console.log("EVENT: ", event, " 🎊🎊🎊🎊");

  if (!event) {
    res.status(400).json({
      status: "fail",
      message: "The event already exist with that name!💣💣💣",
    });
  }

  await Events.create({
    eventTitle: title,
    eventId: uuid(),
    eventDescription: description,
    eventDate: date,
    eventTime: time,
    eventContact: contact,
    eventCondition: condition,
    eventUrls: urls,
    categoryId,
    userId,
    locationId,
  });

  console.log("CREATED EVENT🎊🎊🎊");

  return res.status(200).json({ status: "Ok", event });
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
  // TODO: Update the event details
  return res.json({ message: "Event" });
});

module.exports = router;
