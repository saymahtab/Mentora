// models/Availability.js
const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  day: String,
  isActive: Boolean,
  slots: [String],
});

module.exports = availabilitySchema;
