// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  menteeName: String,
  profileImg: String,
  date: String,
  time: String,
  message: String,
  rating: Number,
});

module.exports = reviewSchema;
