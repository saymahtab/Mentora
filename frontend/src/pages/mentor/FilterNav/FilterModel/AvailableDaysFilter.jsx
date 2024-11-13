// components/AvailableDaysFilter.jsx
import React from "react";

const AvailableDaysFilter = ({ searchTerm, checkedItems, setCheckedItems }) => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; // Days data inside component
  const filteredDays = daysOfWeek.filter((day) => day.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredDays.map((day, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={checkedItems[day] || false}
            onChange={() => setCheckedItems((prev) => ({ ...prev, [day]: !prev[day] }))}
            className="h-4 w-4"
          />
          <span>{day}</span>
        </label>
      ))}
    </div>
  );
};

export default AvailableDaysFilter;
