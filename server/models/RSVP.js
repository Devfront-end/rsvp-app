const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Event = require('./Event');

const RSVP = sequelize.define('RSVP', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('yes', 'no', 'maybe'),
    allowNull: false
  }
}, {
  timestamps: true
});

RSVP.belongsTo(Event);
Event.hasMany(RSVP);

module.exports = RSVP;