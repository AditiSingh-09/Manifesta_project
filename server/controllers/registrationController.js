// const pool = require('../db');

// // Register user for event
// const registerUserForEvent = async (req, res) => {
//   const { name, email, event_id } = req.body;

//   try {
//     // Step 1: Create the user in the USERS table
//     const userResult = await pool.query(
//       'INSERT INTO USERS (user_name, email) VALUES ($1, $2) RETURNING user_id',
//       [name, email]
//     );
//     const user_id = userResult.rows[0].user_id; // Get the user_id of the newly created user

//     // Step 2: Insert the user_id and event_id into the EVENT_REGISTRATIONS table
//     const registrationResult = await pool.query(
//       'INSERT INTO EVENT_REGISTRATIONS (user_id, event_id) VALUES ($1, $2) RETURNING *',
//       [user_id, event_id]
//     );

//     // Step 3: Return the registration data (or any other response you prefer)
//     res.status(201).json({
//       message: 'User registered successfully for the event!',
//       registration: registrationResult.rows[0],
//     });
//   } catch (err) {
//     console.error('Error registering user for event:', err);
//     res.status(500).send('Error registering for event');
//   }
// };

// // Get all events a user registered for
// const getRegistrationsByUser = async (req, res) => {
//   const { user_id } = req.params;
//   try {
//     const result = await pool.query(
//       `SELECT e.event_id, e.title, e.event_date
//        FROM EVENT_REGISTRATIONS er
//        JOIN EVENTS e ON er.event_id = e.event_id
//        WHERE er.user_id = $1`,
//       [user_id]
//     );
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).send('Error fetching registrations');
//   }
// };

// module.exports = { registerUserForEvent, getRegistrationsByUser };

const pool = require('../db');

// Register user for event
const registerUserForEvent = async (req, res) => {
  const { name, email, event_id } = req.body;

  try {
    // Insert the user into the user table
    const userResult = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING user_id',
      [name, email]
    );

    // Get the user_id from the inserted user
    const user_id = userResult.rows[0].user_id;

    // Insert the registration into EVENT_REGISTRATIONS table
    const registrationResult = await pool.query(
      'INSERT INTO EVENT_REGISTRATIONS (user_id, event_id) VALUES ($1, $2) RETURNING *',
      [user_id, event_id]
    );

    res.status(201).json({ message: "User registered for the event successfully", registration: registrationResult.rows[0] });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error registering user for event');
  }
};

// Get all events a user registered for
// Controller
const getRegistrationsByEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM get_users_for_event($1)',
      [eventId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users for event");
  }
};


module.exports = { registerUserForEvent, getRegistrationsByEvent };

