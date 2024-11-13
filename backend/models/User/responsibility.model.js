const mongoose = require('mongoose');

const responsibilitySchema = new mongoose.Schema({
  sector: String,
  positionOfResponsibility: String,
  organisation: String,
  location: String,
  duration: {
    start: String,
    end: String,
  },
  skills: [String],
  description: String,
  attachments: [String],
});

module.exports = responsibilitySchema;
