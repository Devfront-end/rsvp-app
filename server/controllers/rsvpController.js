const RSVP = require('../models/RSVP');

exports.createRSVP = async (req, res) => {
  try {
    const { eventId, name, email, status } = req.body;
    const rsvp = await RSVP.create({ EventId: eventId, name, email, status });
    res.status(201).json(rsvp);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create RSVP' });
  }
};

exports.getRSVPsByEventId = async (req, res) => {
  try {
    const { eventId } = req.params;
    const rsvps = await RSVP.findAll({ where: { EventId: eventId } });
    res.status(200).json(rsvps);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve RSVPs' });
  }
};

exports.updateRSVP = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const [updated] = await RSVP.update({ status }, { where: { id } });
    if (updated) {
      const updatedRSVP = await RSVP.findByPk(id);
      res.status(200).json(updatedRSVP);
    } else {
      res.status(404).json({ error: 'RSVP not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update RSVP' });
  }
};

exports.deleteRSVP = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await RSVP.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'RSVP deleted successfully' });
    } else {
      res.status(404).json({ error: 'RSVP not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete RSVP' });
  }
};