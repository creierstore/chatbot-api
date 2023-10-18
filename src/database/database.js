const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize("chatbot", "postgres", "admin", {
//   host: "localhost",
//   dialect: "postgres",
//   port: '5434'
// });

const sequelize = new Sequelize("chatbot-api", "fl0user", "FbTVqRy16YOw", {
  host: "ep-odd-grass-06468340.us-east-2.aws.neon.fl0.io",
  dialect: "postgres",
  port: '5432',
  dialectOptions: {
    "ssl": {
       "require": true
    }
  }
});

module.exports = sequelize;
