const express = require('express');
const router = express.Router();
const { getAllClubs, createClub } = require('../controllers/clubController');

// GET all clubs
router.get('/', getAllClubs);

// POST create new club
router.post('/', createClub);

module.exports = router;
