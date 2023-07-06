const { DataTypes } = require("sequelize");
const { sequelize } = require("../helpers/dbHelper");
const { Category } = require("./CategoryModel");
const { User } = require("./UserModel");
const { Location } = require("./LocationModel");

const Events = sequelize.define("events", {
  eventId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  eventTitle: {
    type: DataTypes.STRING,
  },
  eventDescription: {
    type: DataTypes.STRING,
  },
  eventDate: {
    type: DataTypes.DATE,
  },
  eventTime: {
    type: DataTypes.TIME,
  },
  eventContact: {
    type: DataTypes.STRING,
  },
  eventConditions: {
    type: DataTypes.STRING,
  },
  eventUrls: {
    type: DataTypes.STRING,
  },
  categoryId: {
    type: DataTypes.STRING,
  },
  locationId: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.STRING,
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

Events.hasMany(Category, {
  foreignKey: "categoryId",
});
Category.belongsTo(Events);

Events.hasOne(Location, {
  foreignKey: "locationId",
});
Location.belongsTo(Events);

Events.hasMany(User, {
  foreignKey: "UserId",
});
User.belongsTo(Events);

const initializeEvents = async () => {
  try {
    await Events.sync();
    console.log("Events table created successfully.");
  } catch (error) {
    console.log("Failed to create the events table!!");
  }
};

initializeEvents();

module.exports = { Events };
