//how we are going to connect to our database


const Pool  = require("pg").Pool;
//require("dotenv").config(); // Load environment variables

const pool = new Pool({
  user: "postgres",        // Database user
  host: "localhost",        // Database host (usually localhost for local dev)
  database: "manifesta",    // Database name
  password: "sky", // Database password
  port: 5432,
          // Database port (default PostgreSQL port is 5432)
});




module.exports = pool;