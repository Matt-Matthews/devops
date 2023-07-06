const { DataTypes } = require("sequelize");
const { sequelize } = require("../helpers/dbHelper");

const Location = sequelize.define("locations", {
  locationId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  locationAddress: {
    type: DataTypes.STRING,
  },
  locationLatitude: {
    type: DataTypes.DOUBLE,
  },
  locationLongitude: {
    type: DataTypes.DOUBLE,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now(),
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now(),
  },
});

const initializeLocation = async () => {
  try {
    await Location.sync();
    console.log("Location table created successfully.");
  } catch (error) {
    console.log("Failed to create the locations table!!");
  }
};

initializeLocation();


module.exports = { Location };
