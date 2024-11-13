const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  qualification: String,
  course: String,
  courseType: String,
  specialization: String,
  stream: String,
  board: String,
  duration: {
    start: String,
    end: String,
  },
  institute: String,
  percentage: String,
  cgpa: String,
  rollNo: String,
  discription: String,
  skills: [String],
  location: String,
  description: String,
  attachments: [String],
});

module.exports = educationSchema;
