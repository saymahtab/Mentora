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
  profileImg: { type: String },
  coverImg: { type: String },
  mobile: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  pronouns: { type: String, enum: ['He/Him/His', 'She/Her', 'They/Them', 'Do not want to show'] },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
<<<<<<< HEAD:backend/models/User/user.model.js
  customGender: String,
  type: { type: String, enum: ['College Student', 'School Student', 'Professional', 'Fresher', 'Recruiter', 'Organizer', 'Other'] },
  collegeStudent: {
    course: String,
    CourseSpecialization: String,
    courseDuration: { startYear: String, endYear: String },
=======
  customGender: { type: String },
  type: { type: String, enum: ['College Student', 'School Student', 'Professional', 'Fresher', 'Recruiter', 'Organizer', 'Other'] },

  collegeStudent: {
    course: { type: String },
    CourseSpecialization: { type: String },
    courseDuration: {
      startYear: { type: String },
      endYear: { type: String }
    }
>>>>>>> ed86bf1ac752794aea049e590ea769d548cebef9:backend/models/User/user1.model.js
  },

  schoolStudent: {
    class: { type: String }
  },

  professional: {
    workExperience: { type: String },
    currentSector: { type: String },
    designation: { type: String },
    lookingForCareerChange: { type: Boolean }
  },

  fresher: {
    interestedSector: { type: String },
    course: { type: String },
    courseDuration: {
      startYear: { type: String },
      endYear: { type: String }
    }
  },

  organisation: { type: String },
  location: { type: String },
  dob: { type: Date },

  currentAddress: addressSchema,
  permanentAddress: addressSchema,

  bio: { type: String },
  about: {
    purpose: { type: String, enum: ['Open to work', 'Hiring', 'Compete & upskill'] },
    interests: [{ type: String }],
    aboutMe: { type: String }
  },

  skills: [{ type: String }],
  education: [educationSchema],
  workExperience: [workExperienceSchema],
  responsibilities: [responsibilitySchema],
  certificates: [certificateSchema],
  projects: [projectSchema],
  achievements: [achievementSchema],
  hobbies: [{ type: String }],
  socialLinks: socialLinksSchema,
<<<<<<< HEAD:backend/models/User/user.model.js
  connections: { type: Number, default: 0 },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },
  ],
=======

  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

>>>>>>> ed86bf1ac752794aea049e590ea769d548cebef9:backend/models/User/user1.model.js
  searchAppearance: { type: Number, default: 0 },
  savedItems: [savedItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
