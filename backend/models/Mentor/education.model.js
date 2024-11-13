// models/Education.js
const mongoose = require('mongoose');
const locationSchema = require('./location.model');

const educationSchema = new mongoose.Schema({
  qualification: String,
  degree: String,
  from: String,
  to: String,
  specialization: String,
  university: String,
  location: locationSchema,
});

module.exports = educationSchema;
