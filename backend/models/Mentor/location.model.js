// models/Location.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  country: String,
  state: String,
  city: String,
});

module.exports = locationSchema;
