const mongoose = require('mongoose');

const savedItemSchema = new mongoose.Schema({
  itemType: String,
  itemId: mongoose.Schema.Types.ObjectId,
  savedAt: { type: Date, default: Date.now },
});

module.exports = savedItemSchema;
