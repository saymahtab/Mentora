const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
  employmentType: String,
  designation: String,
  sector: String,
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

module.exports = workExperienceSchema;
