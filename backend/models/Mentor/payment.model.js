// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  mentee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: String,
  platformFee: Number,
  paymentAmount: Number,
  price: Number,
});

module.exports = paymentSchema;
