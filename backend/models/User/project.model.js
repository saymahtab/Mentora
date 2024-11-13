const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  type: String,
  duration: {
    start: String,
    end: String,
  },
  description: String,
  link: String,
  skills: [String],
});

module.exports = projectSchema;
