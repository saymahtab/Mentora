// models/Expertise.js
const mongoose = require('mongoose');

const expertiseSchema = new mongoose.Schema({
  domain: String,
  topics: [String],
  skills: [String],
});

module.exports = expertiseSchema;
