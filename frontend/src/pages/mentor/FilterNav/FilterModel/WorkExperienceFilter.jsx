// components/WorkExperienceFilter.jsx
import React from "react";

const WorkExperienceFilter = ({ checkedItems, setCheckedItems }) => {
  const experienceLevels = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Manager",
    "Director",
    "Executive",
    "Intern",
    "Lead",
    "Principal",
    "VP",
    "C-Level"
  ];
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {experienceLevels.map((level, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={checkedItems[level] || false}
            onChange={() =>
              setCheckedItems((prev) => ({ ...prev, [level]: !prev[level] }))
            }
            className="h-4 w-4"
          />
          <span>{level}</span>
        </label>
      ))}
    </div>
  );
};

export default WorkExperienceFilter;
