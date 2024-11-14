import React from "react";
import { mentors } from "../../../../utils/db/mentors";

const MentorProfileSidebar = () => {

    const Mentor = mentors[0];

  return (
    <div className="bg-white shadow-lg p-6 w-1/4 rounded-lg flex flex-col items-center">
      <img
        src={Mentor.profile.profileImg}
        className="w-24 h-24 rounded-full border-4 mb-4"
      />
      <h2 className="text-xl font-semibold">Yash Patel</h2>
      <p className="text-sm text-gray-500 mb-2">Strategy Manager @CEO Office</p>
      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full mb-4">
        Available
      </span>
      <p className="text-center text-gray-700 mb-6">
        Ex-eBay & L&T | MDI Gurgaon | 32+ National Case Competitions
      </p>
      <div className="flex gap-3">
        {/* Social Media Icons */}
        <a href="#" className="text-indigo-500">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-indigo-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-indigo-500">
          <i className="fas fa-link"></i>
        </a>
      </div>
      <div className="mt-6 w-full">
        {/* Accordion-like Sections */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold cursor-pointer">About</h3>
          <p className="text-gray-600 text-sm mt-2">
            4 years of Experience in corporate strategy and management.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold cursor-pointer">Skills</h3>
          <p className="text-gray-600 text-sm mt-2">
            Strategy, Case Competitions, Public Speaking
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold cursor-pointer">Languages</h3>
          <p className="text-gray-600 text-sm mt-2">English, Hindi</p>
        </div>
      </div>
    </div>
  );
};

export default MentorProfileSidebar;
