const express = require('express');
const router = express.Router();
const { addClubMember, getMembersByClub } = require('../controllers/clubMemberController');

// POST add user to club
router.post('/', addClubMember);

// GET members of a specific club
router.get('/:club_id', getMembersByClub);

module.exports = router;
