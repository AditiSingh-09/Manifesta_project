const pool = require('../db');

// Get all clubs
const getAllClubs = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM CLUBS');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Create a new club
const createClub = async (req, res) => {
  const { club_name, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO CLUBS (club_name, description) VALUES ($1, $2) RETURNING *',
      [club_name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Error creating club',err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllClubs, createClub };
