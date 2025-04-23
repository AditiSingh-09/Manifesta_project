const pool = require('../db');

// Add user to club
const addClubMember = async (req, res) => {
  const { name, email, club_id } = req.body;
  try {

    const userResult = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING user_id',
      [name, email]
    );

    // Get the user_id from the inserted user
    const user_id = userResult.rows[0].user_id;
    console.log({user_id, club_id})
    const result = await pool.query(
      'INSERT INTO CLUB_MEMBERS (user_id, club_id) VALUES ($1, $2) RETURNING *',
      [user_id, club_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err)
    res.status(500).send('Error adding club member');
  }
};



// Get all members of a club
const getMembersByClub = async (req, res) => {
  const { club_id } = req.params;
  try {
    const result = await pool.query(
      `SELECT u.user_id, u.name, u.email 
       FROM CLUB_MEMBERS cm
       JOIN USERS u ON cm.user_id = u.user_id
       WHERE cm.club_id = $1`,
      [club_id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error fetching members');
  }
};

module.exports = { addClubMember, getMembersByClub };
