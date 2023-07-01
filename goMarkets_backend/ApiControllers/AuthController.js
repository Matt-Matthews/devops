const { Router } = require("express");
const { User } = require("../Models/UserModel");

const routes = Router();

routes.post("/login", (req, res) => {
  // Login
});

routes.post("/register", async (req, res) => {
  try {
    const { email, username, password, userProfile, userContact } = req.body;

    // console.log(req.body);

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      res.status(409).send("User Already Exist. Please Login");
    }

    const user = await User.create({
      email,
      username,
      password,
      userProfile,
      userContact,
    });

    res.json({ user: req.body });
  } catch (e) {}
});

module.exports = routes;
