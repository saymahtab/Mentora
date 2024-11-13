// models/Experience.js
const mongoose = require('mongoose');
const locationSchema = require('./location.model');

const experienceSchema = new mongoose.Schema({
  work: String,
  designation: String,
  sector: String,
  employmentType: String,
  organization: String,
  isCurrent: Boolean,
  from: String,
  to: String,
  location: locationSchema,
});

module.exports = experienceSchema;
