// components/SkillsFilter.jsx
import React from "react";

const SkillsFilter = ({ searchTerm, checkedItems, setCheckedItems }) => {
  const skills = ["JavaScript", "React", "Node.js", "Python"]; // Skills data inside component
  const filteredSkills = skills.filter((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredSkills.map((skill, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={checkedItems[skill] || false}
            onChange={() => setCheckedItems((prev) => ({ ...prev, [skill]: !prev[skill] }))}
            className="h-4 w-4"
          />
          <span>{skill}</span>
        </label>
      ))}
    </div>
  );
};

export default SkillsFilter;
