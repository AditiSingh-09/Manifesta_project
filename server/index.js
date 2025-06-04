const app = require('./app');
const PORT = process.env.DB_PORT5000;
const pool = require('./db');

// Test the database connection when the server starts
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Database connection error:', err.stack);
    } else {
      console.log('Database connected:', res.rows);
    }
  });
  

app.listen(PORT, () =>{
    console.log("Server has started on port ${PORT}")

});

