import React, { useState } from "react";
import { mentors } from "../../utils/db/mentors";

const MentorFilter = () => {
  const [filters, setFilters] = useState({
    totalExperience: [0, 20],
    avgRating: [0, 5],
    currentRoles: [],
    industries: [],
    skills: [],
    organization: "",
    expertise: "",
    experience: "",
    education: "",
    services: "",
    isTopMentor: null,
    keyword: "",
  });

  const [activeTab, setActiveTab] = useState("general");

  const handleSliderChange = (field, index) => (e) => {
    const value = +e.target.value;
    setFilters((prev) => {
      const newRange = [...prev[field]];
      newRange[index] = value;
      return { ...prev, [field]: newRange };
    });
  };

  const handleCheckboxChange = (field) => (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setFilters((prev) => {
      const updatedArray = isChecked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value);
      return { ...prev, [field]: updatedArray };
    });
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredMentors = mentors.filter((mentor) => {
    const withinExperienceRange =
      mentor.totalExperience >= filters.totalExperience[0] &&
      mentor.totalExperience <= filters.totalExperience[1];
    const withinRatingRange =
      mentor.avgRating >= filters.avgRating[0] &&
      mentor.avgRating <= filters.avgRating[1];
    const matchesRoles =
      filters.currentRoles.length === 0 || filters.currentRoles.includes(mentor.currentRole);
    const matchesIndustries =
      filters.industries.length === 0 || filters.industries.includes(mentor.industry);
    const matchesSkills =
      filters.skills.length === 0 || filters.skills.some((skill) => mentor.skills.includes(skill));
    const matchesOrganization =
      !filters.organization || mentor.organization.toLowerCase().includes(filters.organization.toLowerCase());
    const matchesExpertise =
      !filters.expertise || mentor.expertise.toLowerCase().includes(filters.expertise.toLowerCase());
    const matchesExperience =
      !filters.experience || mentor.experience.toLowerCase().includes(filters.experience.toLowerCase());
    const matchesEducation =
      !filters.education || mentor.education.toLowerCase().includes(filters.education.toLowerCase());
    const matchesServices =
      !filters.services || mentor.services.toLowerCase().includes(filters.services.toLowerCase());

    return (
      withinExperienceRange &&
      withinRatingRange &&
      matchesRoles &&
      matchesIndustries &&
      matchesSkills &&
      matchesOrganization &&
      matchesExpertise &&
      matchesExperience &&
      matchesEducation &&
      matchesServices
    );
  });

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-700">Filter Mentors</h2>
      
      {/* Tabs */}
      <div className="flex justify-center my-4">
        {["general", "skills", "organization"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-medium rounded-lg ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Filter Content */}
      <div className="space-y-6">
        {activeTab === "general" && (
          <>
            <div>
              <h4 className="text-xl font-medium text-gray-800">Total Experience</h4>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={filters.totalExperience[0]}
                  onChange={handleSliderChange("totalExperience", 0)}
                  className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={filters.totalExperience[1]}
                  onChange={handleSliderChange("totalExperience", 1)}
                  className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="text-gray-600">
                {filters.totalExperience[0]} - {filters.totalExperience[1]} years
              </p>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800">Average Rating</h4>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={filters.avgRating[0]}
                  onChange={handleSliderChange("avgRating", 0)}
                  className="w-full h-2 bg-green-300 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={filters.avgRating[1]}
                  onChange={handleSliderChange("avgRating", 1)}
                  className="w-full h-2 bg-green-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="text-gray-600">
                {filters.avgRating[0]} - {filters.avgRating[1]}
              </p>
            </div>
          </>
        )}

        {activeTab === "skills" && (
          <div>
            <h4 className="text-xl font-medium text-gray-800">Skills</h4>
            <div className="grid grid-cols-2 gap-4">
              {["React", "Node.js", "Python", "AWS"].map((skill) => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={skill}
                    onChange={handleCheckboxChange("skills")}
                    className="cursor-pointer"
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {activeTab === "organization" && (
          <>
            <div>
              <h4 className="text-xl font-medium text-gray-800">Organization</h4>
              <input
                type="text"
                name="organization"
                value={filters.organization}
                onChange={handleTextChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Search by organization"
              />
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800">Education</h4>
              <input
                type="text"
                name="education"
                value={filters.education}
                onChange={handleTextChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Search by education"
              />
            </div>
          </>
        )}
      </div>

      {/* Filtered Results */}
      <div>
        <h4 className="text-xl font-medium text-gray-800">Filtered Mentors</h4>
        <MentorSidebar mentors={mentors} />
      </div>
    </div>
  );
};

export default MentorFilter;
