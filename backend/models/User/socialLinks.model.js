const mongoose = require('mongoose');

const socialLinksSchema = new mongoose.Schema({
  linkedin: String,
  instagram: String,
  github: String,
  reddit: String,
  dribble: String,
  facebook: String,
  twitter: String,
  medium: String,
  slack: String,
  behance: String,
  figma: String,
});

module.exports = socialLinksSchema;
