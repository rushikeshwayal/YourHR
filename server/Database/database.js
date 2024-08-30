// database.js

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false, // Adjust this according to your SSL requirements
  }
});

// Helper function to query the database
const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};
