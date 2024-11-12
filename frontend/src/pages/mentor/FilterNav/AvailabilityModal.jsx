// components/AvailabilityModal.jsx
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const AvailabilityModal = () => {
  // State to track the selected button
  const [selectedAvailability, setSelectedAvailability] = useState(null);

  // Function to handle button selection
  const handleSelection = (selection) => {
    setSelectedAvailability(selection);
  };

  // Function to clear the selection
  const handleClear = () => {
    setSelectedAvailability(null);
  };

  return (
    <div className="relative w-80 max-w-md mx-auto">
      {/* Header */}
      <header className="px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Availability</h1>
          <button
            onClick={handleClear}
            className="text-sm text-red-500 hover:bg-red-50 px-3 py-1 rounded-lg transition duration-200"
          >
            Clear
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 max-h-64 overflow-y-auto custom-scrollbar">
        <h2 className="text-base font-semibold mb-2">Instantly Available</h2>
        <p className="text-sm text-gray-500 mb-4">Mentors available within:</p>
        <div className="flex items-center justify-around space-x-2">
          {/* Availability buttons */}
          {["Instant", "7 Days", "30 Days"].map((option) => (
            <button
              key={option}
              onClick={() => handleSelection(option)}
              className={`availability-button border px-4 py-2 rounded-lg ${
                selectedAvailability === option ? "selected bg-[#0073E6] text-white" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-3 border-t">
        <div className="flex items-center justify-end">
          <button className="flex items-center gap-2 bg-[#0073E6] text-white text-sm px-5 py-2 rounded-full transition hover:bg-blue-600">
            Apply Filter
            <FaArrowRight />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AvailabilityModal;
