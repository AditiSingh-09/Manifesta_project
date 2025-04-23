const pool = require('../db');

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM EVENTS ORDER BY event_date ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Create a new event
const createEvent = async (req, res) => {
  const { title, description, date, club_id } = req.body;
  console.log(req.body);
  try {
    const result = await pool.query(
      'INSERT INTO EVENTS (title, description, event_date, club_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, date, club_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Error creating event');
    console.log(err);
  }
};

module.exports = { getAllEvents, createEvent };
