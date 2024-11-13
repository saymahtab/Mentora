const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  addressLine1: String,
  addressLine2: String,
  landmark: String,
  pincode: String,
  location: String,
});

module.exports = addressSchema;
