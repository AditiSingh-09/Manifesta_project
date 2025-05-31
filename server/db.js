//how we are going to connect to our database


const Pool  = require("pg").Pool;
//require("dotenv").config(); // Load environment variables

const pool = new Pool({
  user: "postgres",        
  host: "localhost",        
  database: "manifesta",    
  password: "sky", 
  port: 5432,
       
});




module.exports = pool;