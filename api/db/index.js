// const Sequelize = require("sequelize");
// const db = new Sequelize("postgres://localhost:5432/bookguru", {
//   logging: false,
// });

const Sequelize = require("sequelize");

const db = new Sequelize("bookguru", "postgres", "a", {
  logging: false,
  dialect: "postgres",
});

module.exports = db;
