// models/SocialLink.js
const mongoose = require('mongoose');

const socialLinkSchema = new mongoose.Schema({
  name: String,
  link: String,
});

module.exports = socialLinkSchema;
