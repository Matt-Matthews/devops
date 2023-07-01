const { Sequelize } = require("sequelize");
const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
} = require("../config.json");

console.log(DB_HOST, DB_PORT, DB_NAME, DB_PASSWORD, DB_USER);

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    return sequelize;
  } catch (err) {
    console.log("Error💣💣💣", err);
    throw Error("Couldn't connect to the db");
  }
};

module.exports = { connect, sequelize };
