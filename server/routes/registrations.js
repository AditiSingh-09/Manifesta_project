const express = require('express');
const router = express.Router();
const { registerUserForEvent} = require('../controllers/registrationController');

// POST register user for event
router.post('/', registerUserForEvent);

// GET all events a user has registered for


module.exports = router;
