const app = require('./app');
const PORT = 5000;
const pool = require('./db');

// Test the database connection when the server starts
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Database connection error:', err.stack);
    } else {
      console.log('Database connected:', res.rows);
    }
  });
  

app.listen(5000, () =>{
    console.log("Server has started on port 5000")

});