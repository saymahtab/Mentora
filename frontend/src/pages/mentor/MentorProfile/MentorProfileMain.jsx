import React from "react";

const MentorProfileMain = () => {
  return (
    <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Available Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Example Service Card */}
        <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Quick Call | 15 Min</h3>
          <p className="text-gray-500 text-sm">
            Mentorship on any topic of your choice
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-indigo-500 font-semibold">₹99</span>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm">
              Book Now
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Resume Review</h3>
          <p className="text-gray-500 text-sm">Get feedback on your resume</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-indigo-500 font-semibold">₹199</span>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfileMain;
