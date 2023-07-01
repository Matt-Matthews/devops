const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("LOCATION");
  res.json({ message: "WELCOME" });
});

module.exports = router;
