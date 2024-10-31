const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    fullName: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['pending', 'mentor', 'mentee'],
      default: 'pending',
    },
    profileImg: {
      type: String,
      default: '',
    },
    coverImg: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    mentorDetails: {
      skills: [String],
      experience: Number,
      availability: [String],
      industry: String,
      languages: [String],
      timeZone: String,
      location: { type: String, default: '' },
      communicationMethods: [String],
      rating: { type: Number, default: 0 },
      reviews: [
        {
          rating: Number,
          review: String,
          reviewerId: mongoose.Schema.Types.ObjectId,
        },
      ],
    },
    menteeDetails: {
      careerGoals: String,
      interests: [String],
      skillsToDevelop: [String],
      preferredMentorSkills: [String],
      learningStyle: { type: String, default: '' },
      timeZone: { type: String, default: '' },
      preferredAvailability: [String],
      challenges: { type: String, default: '' },
    },
    tags: [String],
    completedSessions: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    notificationsPreferences: {
      type: [String],
      default: ['email'],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
