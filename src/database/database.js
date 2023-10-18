const { Sequelize } = require('sequelize');
require("dotenv").config();

// const sequelize = new Sequelize("chatbot", "postgres", "admin", {
//   host: "localhost",
//   dialect: "postgres",
//   port: '5434'
// });

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  port: process.env.PORT,
  dialectOptions: {
    "ssl": {
       "require": true
    }
  }
});

module.exports = sequelize;
