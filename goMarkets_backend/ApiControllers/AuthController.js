const { Router } = require("express");
const { User } = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config.json");

const routes = Router();

routes.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let token = "";
    if (!(email && password)) {
      res.status(400).send("All input are required.");
    }

    const user = await User.findByPk(email);

    const isToken = await bcrypt.compare(password, user.password);

    // console.log(user.token, isToken);

    if (user && isToken) {
      jwt.sign(
        { _id: password, email },
        config.TOKEN_KEY,
        {
          expiresIn: "1d",
        },
        async (err, decoded) => {
          if (err) throw new Error("Unable to create the token.");
          // console.log(decoded)
          user.token = decoded;
          // token = decoded;
          // console.log(user);
          // req.user = decoded;
          await user.save();
        }
      );
      res.status(200).json({ message: "Ok", token: user.token });
    }
    res.status(400).json({ message: "Fail", info: "Invalid logging details." });
  } catch (error) {
    console.log(error);
  }
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
    // console.log("USER😁😁😁", oldUser);

    if (oldUser) {
      res.status(409).send("User Already Exist. Please Login");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    jwt.sign(
      { _id: password, email },
      config.TOKEN_KEY,
      async (err, decoded) => {
        if (err) throw new Error("Unable to create the token.");

        const user = await User.create({
          email: email.toLowerCase(),
          username,
          password: encryptedPassword,
          userProfile,
          userContact,
          token: decoded,
        });

        return res.status(201).json(user);
      }
    );
  } catch (e) {}
});

module.exports = routes;
