const express = require('express');
const router = express.Router();
const { getAllEvents, createEvent } = require('../controllers/eventController');
const { getRegistrationsByEvent } = require('../controllers/registrationController');
// GET all events
router.get('/', getAllEvents);

// POST create new event
router.post('/', createEvent);

router.get('/:eventId', getRegistrationsByEvent);

module.exports = router;
