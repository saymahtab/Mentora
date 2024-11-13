// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  duration: String,
  price: Number,
  discountPrice: Number,
});

module.exports = serviceSchema;
