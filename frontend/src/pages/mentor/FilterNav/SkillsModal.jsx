// components/SkillsModal.jsx
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import '../../../App.css';

const SkillsModal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedSkills, setCheckedSkills] = useState({});

  // List of skills
  const skills = [
    "Agile",
    "Algorithm",
    "Analytics",
    "Android",
    "Angular",
    "Architecture",
    "Artificial Intelligence",
  ];

  // Filtered skills based on search term
  const filteredSkills = skills.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle checkbox for a specific skill
  const handleCheckboxChange = (skill) => {
    setCheckedSkills(prevState => ({
      ...prevState,
      [skill]: !prevState[skill]
    }));
  };

  // Clear the search term and uncheck all checkboxes
  const handleClear = () => {
    setSearchTerm("");
    setCheckedSkills({});
  };

  return (
    <div className="relative w-72 max-w-md mx-auto">
      {/* Header */}
      <header className="px-2 py-2 border-b">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-semibold">Skills</h1>
          <button
            onClick={handleClear}
            className="text-sm text-red-500 hover:bg-red-50 px-3 py-1 rounded-lg"
          >
            Clear
          </button>
        </div>
        <label className="relative block">
          <IoSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full px-8 py-2 border rounded-full text-sm focus:outline-none"
          />
        </label>
      </header>

      {/* Scrollable Main Content */}
      <main className="max-h-64 overflow-y-auto custom-scrollbar">
        <ul>
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-2"
              >
                <p>{skill}</p>
                <input
                  type="checkbox"
                  checked={!!checkedSkills[skill]}
                  onChange={() => handleCheckboxChange(skill)}
                  className="h-4 w-4"
                />
              </li>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500">No skills found</p>
          )}
        </ul>
      </main>

      {/* Footer */}
      <footer className="px-2 py-2 border-t">
        <div className="flex items-center justify-end">
          <button className="flex items-center gap-1 bg-[#0073E6] text-white text-sm hover:bg-blue-600 px-4 font-medium py-2 rounded-full">
            Apply Filter
            <FaArrowRight />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SkillsModal;
