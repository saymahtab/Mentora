const mongoose = require('mongoose');
const addressSchema = require('./address.model');
const educationSchema = require('./education.model');
const workExperienceSchema = require('./workExperience.model');
const responsibilitySchema = require('./responsibility.model');
const certificateSchema = require('./certificate.model');
const projectSchema = require('./project.model');
const achievementSchema = require('./achievement.model');
const socialLinksSchema = require('./socialLinks.model');
const savedItemSchema = require('./savedItem.model');

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImg: String,
  coverImg: String,
  mobile: { type: String },
  firstName: { type: String, required: true  },
  lastName: { type: String, required: true  },
  pronouns: { type: String, enum: ['He/Him/His', 'She/Her', 'They/Them', 'Do not want to show'] },
  gender: { type: String, enum: ['Male', 'Female', 'Other']  },
  customGender: String,
  type: { type: String, enum: ['College Student', 'School Student', 'Professional', 'Fresher', 'Recruiter', 'Organizer', 'Other']  },
  collegeStudent: {
    course: String, 
    CourseSpecialization: String,
    courseDuration: { startYear: String, endYear: String },
  },
  schoolStudent: {
    class: String,
  },
  professional: {
    workExperience: String,
    currentSector: String,
    designation: String,
    lookingForCareerChange: Boolean,
  },
  fresher: {
    interestedSector: String,
    course: String,
    courseDuration: { startYear: String, endYear: String },
  },
  organisation: String,
  location: String,
  dob: Date,
  currentAddress: addressSchema,
  permanentAddress: addressSchema,
  bio: String,
  about: {
    purpose: { type: String, enum: ['Open to work', 'Hiring', 'Compete & upskill'], required: false },
    interests: [String],
    aboutMe: String,
  },
  skills: [String],
  education: [educationSchema],
  workExperience: [workExperienceSchema],
  responsibilities: [responsibilitySchema],
  certificates: [certificateSchema],
  projects: [projectSchema],
  achievements: [achievementSchema],
  hobbies: [String],
  socialLinks: socialLinksSchema,
  connections: { type: Number, default: 0 },
  following: { type: Number, default: 0 },
  followers: { type: Number, default: 0 },
  searchAppearance: { type: Number, default: 0 },
  savedItems: [savedItemSchema],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
