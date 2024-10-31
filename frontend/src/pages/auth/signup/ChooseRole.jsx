import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';

const ChooseRole = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('');

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleCreateAccount = () => {
    if (role) {
      navigate('/auth/signup');
    }
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
          <h1 className="font-extrabold text-3xl lg:text-[2.6rem] leading-tight text-slate-800 mb-2 pr-2">
            What's your journey on Mentora?
          </h1>
          <p className="font-sans text-md text-slate-900 mb-8 lg:mb-14">
            Choose a role to get started. We'll tailor your experience accordingly.
          </p>

          {/* Role Selection Buttons */}
          <div className="flex flex-col xs:flex-row gap-4 items-start sm:items-center mb-10 lg:mb-14">
            <button 
              className={`bg-gray-50 flex flex-col items-start pl-8 pr-10 pt-7 pb-8 border-[1px] 
                ${role === 'mentor' ? 'border-purple-800 hover:border-opacity-100' : 'border-transparent'} 
                hover:border-purple-800 hover:border-opacity-40 transition duration-200 rounded-md w-full sm:w-auto`}
              onClick={() => handleRoleSelection('mentor')}
            >
              <FaChalkboardTeacher className="text-3xl text-slate-800 mb-[0.4rem]" />
              <h3 className="text-lg font-medium text-start">Guide Others as a Mentor</h3>
              <p className="text-xs text-gray-500 text-start">Help mentees reach their potential.</p>
            </button>

            <button 
              className={`bg-gray-50 flex flex-col items-start pl-8 pr-10 pt-7 pb-8 border-[1px] 
                ${role === 'mentee' ? 'border-purple-800 hover:border-opacity-100' : 'border-transparent'} 
                hover:border-purple-800 hover:border-opacity-40 transition duration-200 rounded-md w-full sm:w-auto`}
              onClick={() => handleRoleSelection('mentee')}
            >
              <FaUserGraduate className="text-2xl text-slate-800 mb-3" />
              <h3 className="text-lg font-medium text-start">Learn and Grow as a Mentee</h3>
              <p className="text-xs text-gray-500 text-start">Get guidance from expert mentors.</p>
            </button>
          </div>

          {/* Create Account Button */}
          <button 
            className={role 
              ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-sm text-white px-5 py-3 rounded-md w-40 font-medium cursor-pointer hover:from-purple-700 hover:to-indigo-600 transition-all duration-100"
              : "bg-purple-100 text-sm text-purple-400 px-5 py-3 rounded-md font-medium cursor-default w-40"
            }
            onClick={handleCreateAccount}
            disabled={!role}
          >
            Create Account
          </button>
        </div>
      </section>

      {/* Right Section */}
      <section className="hidden lg:flex flex-1 bg-gradient-to-r from-purple-600 to-indigo-500 items-center justify-center text-white relative overflow-hidden">
        {/* Floating Background Illustration */}
        <img 
          src="/welcomePage.png" 
          alt="Mentor and Mentee Illustration" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 animate-float"
        />

        {/* Motivational Tagline */}
        <div className="relative text-center z-10">
          <h2 className="text-3xl font-bold font-poppins mb-4 px-10">
            Start Your Mentorship Journey
          </h2>
          <p className="text-md font-light mb-8">
            Unlock new possibilities, whether you're guiding or learning.
          </p>
          <button className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-purple-100 transition-transform">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default ChooseRole;
