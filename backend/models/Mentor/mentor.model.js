// models/Mentor.js
const mongoose = require('mongoose');
const reviewSchema = require('./Review.model');
const socialLinkSchema = require('./SocialLink.model');
const expertiseSchema = require('./Expertise.model');
const experienceSchema = require('./Experience.model');
const educationSchema = require('./Education.model');
const serviceSchema = require('./Service.model');
const availabilitySchema = require('./Availability.model');
const paymentSchema = require('./Payment.model');

const mentorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  profileImg: String,
  banner: String,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  bio: String,
  currentOrganization: String,
  organisationLogo: String,
  industry: String,
  isTopMentor: { type: Boolean, default: false },
  currentRole: String,
  totalExperience: Number,
  shortHeading: String,
  about: String,
  languages: [String],
  socialLinks: [socialLinkSchema],
  expertise: expertiseSchema,
  experience: [experienceSchema],
  education: [educationSchema],
  services: [serviceSchema],
  availability: [availabilitySchema],
  payments: [paymentSchema],
  reviews: [reviewSchema],
  totalSessions: { type: Number, default: 0 },
  totalDuration: { type: Number, default: 0 }, // In minutes
  totalReviews: { type: Number, default: 0 },
  avgRating: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Mentor', mentorSchema);
