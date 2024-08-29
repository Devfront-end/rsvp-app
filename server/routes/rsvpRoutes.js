const express = require('express');
const rsvpController = require('../controllers/rsvpController');

const router = express.Router();

router.post('/', rsvpController.createRSVP);
router.get('/event/:eventId', rsvpController.getRSVPsByEventId);
router.put('/:id', rsvpController.updateRSVP);
router.delete('/:id', rsvpController.deleteRSVP);

module.exports = router;