const { DataTypes } = require("sequelize");
const { sequelize } = require("../helpers/dbHelper");

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  userProfile: {
    type: DataTypes.STRING,
  },
  userContact: {
    type: DataTypes.STRING,
  },
});

const intializeUser = async () => {
  try {
    await User.sync();
    console.log("User table created successfully.");
  } catch (e) {
    console.log("Failed to create user table!!!");
  }
};

intializeUser();

module.exports = { User };
