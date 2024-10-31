import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SetUpProfile = () => {
  const [fullName, setFullName] = useState('');
  const [industry, setIndustry] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [availability, setAvailability] = useState('');

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && skillInput) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between min-h-screen">
      {/* Left Section */}
      <section className="flex-1 flex-col lg:px-14 px-5 pl-5 py-10 items-start font-poppins">
        {/* Brand Name */}
        <Link to={'/'}>
          <div className="text-2xl lg:text-3xl font-extrabold text-purple-700 cursor-pointer mb-10 lg:mb-16">
            Mentora
          </div>
        </Link>

        {/* Header */}
        <div className="w-full flex flex-col">
          <h1 className="font-extrabold text-3xl lg:text-[2.3rem] leading-tight text-slate-800 mb-2 pr-2">
            Welcome, Let's set up your profile.
          </h1>
          <p className="font-sans text-md text-slate-900 mb-8 lg:mb-14">
            Tell us a bit about yourself to personalize your mentorship journey.
          </p>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 lg:mb-14">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Full Name</label>
              <input 
                type="text" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
                className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                placeholder="Enter your full name"
              />
            </div>

            {/* Industry */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Industry</label>
              <select 
                value={industry} 
                onChange={(e) => setIndustry(e.target.value)} 
                className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="">Select an industry</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="AI/ML">AI/ML</option>
                <option value="Education">Education</option>
                {/* Add more industry options as needed */}
              </select>
            </div>

            {/* Years of Experience */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Years of Experience</label>
              <select 
                value={experience} 
                onChange={(e) => setExperience(e.target.value)} 
                className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="">Select experience level</option>
                <option value="1-3">1-3 years</option>
                <option value="4-6">4-6 years</option>
                <option value="7-10">7-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            {/* Availability */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Availability</label>
              <input 
                type="text" 
                value={availability} 
                onChange={(e) => setAvailability(e.target.value)} 
                className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                placeholder="e.g., Weekdays 9AM - 5PM"
              />
            </div>
          </div>

          {/* Skills and Expertise */}
          <div className="mb-10 lg:mb-14">
            <label className="text-sm text-gray-600">Skills and Expertise</label>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full flex items-center"
                >
                  {skill}
                  <button 
                    onClick={() => handleRemoveSkill(index)} 
                    className="ml-2 text-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <input 
                type="text" 
                value={skillInput} 
                onChange={(e) => setSkillInput(e.target.value)} 
                onKeyDown={handleAddSkill} 
                className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                placeholder="Add skills (press Enter)" 
              />
            </div>
          </div>

          {/* Save Profile Button */}
          <button 
            className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-md w-full md:w-auto"
          >
            Save Profile
          </button>
        </div>
      </section>

      {/* Right Section */}
      <section className="hidden lg:flex flex-1 bg-gradient-to-r from-purple-600 to-indigo-500 items-center justify-center text-white relative overflow-hidden">
        {/* Background Illustration */}
        <img 
          src="/welcomePage.png" 
          alt="Mentor and Mentee Illustration" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Motivational Tagline */}
        <div className="relative text-center z-10">
          <h2 className="text-3xl font-bold font-poppins mb-4 px-10">
            Embark on Your Mentorship Journey
          </h2>
          <p className="text-md font-light mb-8">
            Set up your profile to unlock personalized opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SetUpProfile;
