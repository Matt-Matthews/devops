const express = require("express");

const router =  express.Router();

router.get("/", (req, res) => {
  console.log("EVENTS");
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
