const app = require("./app.js");
const sequelize = require("./src/database/database.js");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

async function main() {
  try {
    await sequelize.sync();
    // await sequelize.sync({force: true});
    console.log("Connection has been established successfully.");
    app.listen(PORT);
    console.log("Server is listening on port", PORT);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
