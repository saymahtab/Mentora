import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default calendar styles

const AvailabilityFilter = ({ availability, onClose }) => {
  const [selectedDateRange, setSelectedDateRange] = useState([new Date(), new Date()]);
  const currentDate = new Date(); // Get the current date

  // Map the days of the week to numbers (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayMap = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  // Check if a date is available based on the day of the week
  const isDateAvailable = (date) => {
    const dayOfWeek = date.getDay(); // Get the numeric day of the week
    const availabilityForDay = availability.find(
      (entry) => dayMap[entry.day] === dayOfWeek && entry.isActive
    );
    return availabilityForDay !== undefined;
  };

  const handleDateChange = (date) => {
    setSelectedDateRange(date);
  };

  const isTileDisabled = ({ date }) => {
    return !isDateAvailable(date);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl border border-gray-300 max-w-md mx-auto relative">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">Availability</h2>
      
      {/* Current Date */}
      <div className="text-sm text-gray-600 mb-4">
        Current Date:{" "}
        <span className="font-medium text-purple-700">
          {currentDate.toLocaleDateString()}
        </span>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      
      {/* Calendar */}
      <Calendar
        onChange={handleDateChange}
        value={selectedDateRange}
        selectRange
        tileDisabled={isTileDisabled}
        className="custom-calendar w-full bg-gray-50 rounded-lg border border-gray-200"
        tileClassName={({ date, view }) =>
          isDateAvailable(date) && view === "month" ? "bg-white hover:bg-purple-100 rounded-lg" : ""
        }
        tileActiveClassName="bg-purple-600 text-white rounded-lg"
        tileDisabledClassName="bg-gray-200 text-gray-400 cursor-not-allowed"
      />

      {/* Selected Date Range */}
      <div className="mt-4 flex justify-between text-sm text-purple-700">
        <div>
          Start Date:{" "}
          <span className="font-semibold">
            {selectedDateRange[0]?.toLocaleDateString() || "N/A"}
          </span>
        </div>
        <div>
          End Date:{" "}
          <span className="font-semibold">
            {selectedDateRange[1]?.toLocaleDateString() || "N/A"}
          </span>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => onClose(selectedDateRange)}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default AvailabilityFilter;
