const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("EVENTS");
  return res.json({ message: "Events" });
});

module.exports = router;
