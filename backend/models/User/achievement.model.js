const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  skills: [String],
  attachments: [String],
});

module.exports = achievementSchema;
