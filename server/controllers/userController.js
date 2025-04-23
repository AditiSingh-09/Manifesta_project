const pool = require('../db');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM USERS');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Create a new user
const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO USERS (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Error creating user');
  }
};

module.exports = { getAllUsers, createUser };
