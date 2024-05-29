const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables from a .env file

// Create a new instance of Sequelize with the database configuration
const sequelize = process.env.JAWSDB_BLUE_URL
? new Sequelize(process.env.JAWSDB_BLUE_URL)
: new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST || 'localhost', // Database host
    dialect: 'mysql', // Database dialect
    port: process.env.DB_PORT || 3306, // Database port
  }
);

module.exports = sequelize; // Export the Sequelize instance


require("dotenv").config();

