const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  title: String,
  issuingOrganisation: String,
  duration: {
    start: String,
    end: String,
  },
  link: String,
  skills: [String],
  description: String,
  attachments: [String],
});

module.exports = certificateSchema;
