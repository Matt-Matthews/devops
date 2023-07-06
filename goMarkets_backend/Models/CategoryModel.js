const { DataTypes } = require("sequelize");
const { sequelize } = require("../helpers/dbHelper");

const Category = sequelize.define("categories", {
  categoryId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  categoryTitle: {
    type: DataTypes.STRING,
  },
  categoryColor: {
    type: DataTypes.STRING,
  },
  categoryImage: {
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

const initializeCategory = async () => {
  try {
    await Category.sync();
    console.log("Category table created successfully.");
  } catch (error) {
    console.log("Failed to create the categories table!!");
  }
};

initializeCategory();

// Category.create({
//   categoryId: Date.now().toLocaleString(),
//   categoryTitle: "Food Market",
//   categoryColor: "green",
//   categoryImage: "http://",
// });


module.exports = { Category };
