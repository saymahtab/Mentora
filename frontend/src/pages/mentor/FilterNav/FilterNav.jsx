// import React, { useState } from "react";
// import { mentors } from "../../../../utils/db/mentors";

// const MentorFilter = () => {
//   const [filters, setFilters] = useState({
//     totalExperience: [0, 20],
//     avgRating: [0, 5],
//     currentRoles: [],
//     industries: [],
//     skills: [],
//     organization: "",
//     expertise: "",
//     experience: "",
//     education: "",
//     services: "",
//     isTopMentor: null,
//     keyword: "",
//   });

//   const [activeTab, setActiveTab] = useState("general");

//   const handleSliderChange = (field, index) => (e) => {
//     const value = +e.target.value;
//     setFilters((prev) => {
//       const newRange = [...prev[field]];
//       newRange[index] = value;
//       return { ...prev, [field]: newRange };
//     });
//   };

//   const handleCheckboxChange = (field) => (e) => {
//     const value = e.target.value;
//     const isChecked = e.target.checked;

//     setFilters((prev) => {
//       const updatedArray = isChecked
//         ? [...prev[field], value]
//         : prev[field].filter((item) => item !== value);
//       return { ...prev, [field]: updatedArray };
//     });
//   };

//   const handleTextChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const filteredMentors = mentors.filter((mentor) => {
//     const withinExperienceRange =
//       mentor.totalExperience >= filters.totalExperience[0] &&
//       mentor.totalExperience <= filters.totalExperience[1];
//     const withinRatingRange =
//       mentor.avgRating >= filters.avgRating[0] &&
//       mentor.avgRating <= filters.avgRating[1];
//     const matchesRoles =
//       filters.currentRoles.length === 0 || filters.currentRoles.includes(mentor.currentRole);
//     const matchesIndustries =
//       filters.industries.length === 0 || filters.industries.includes(mentor.industry);
//     const matchesSkills =
//       filters.skills.length === 0 || filters.skills.some((skill) => mentor.skills.includes(skill));
//     const matchesOrganization =
//       !filters.organization || mentor.organization.toLowerCase().includes(filters.organization.toLowerCase());
//     const matchesExpertise =
//       !filters.expertise || mentor.expertise.toLowerCase().includes(filters.expertise.toLowerCase());
//     const matchesExperience =
//       !filters.experience || mentor.experience.toLowerCase().includes(filters.experience.toLowerCase());
//     const matchesEducation =
//       !filters.education || mentor.education.toLowerCase().includes(filters.education.toLowerCase());
//     const matchesServices =
//       !filters.services || mentor.services.toLowerCase().includes(filters.services.toLowerCase());

//     return (
//       withinExperienceRange &&
//       withinRatingRange &&
//       matchesRoles &&
//       matchesIndustries &&
//       matchesSkills &&
//       matchesOrganization &&
//       matchesExpertise &&
//       matchesExperience &&
//       matchesEducation &&
//       matchesServices
//     );
//   });

//   return (
//     <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-center text-gray-700">Filter Mentors</h2>

//       {/* Tabs */}
//       <div className="flex justify-center my-4">
//         {["general", "skills", "organization"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-6 py-2 text-sm font-medium rounded-lg ${
//               activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Filter Content */}
//       <div className="space-y-6">
//         {activeTab === "general" && (
//           <>
//             <div>
//               <h4 className="text-xl font-medium text-gray-800">Total Experience</h4>
//               <div className="flex items-center space-x-4">
//                 <input
//                   type="range"
//                   min="0"
//                   max="20"
//                   value={filters.totalExperience[0]}
//                   onChange={handleSliderChange("totalExperience", 0)}
//                   className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer"
//                 />
//                 <input
//                   type="range"
//                   min="0"
//                   max="20"
//                   value={filters.totalExperience[1]}
//                   onChange={handleSliderChange("totalExperience", 1)}
//                   className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer"
//                 />
//               </div>
//               <p className="text-gray-600">
//                 {filters.totalExperience[0]} - {filters.totalExperience[1]} years
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-medium text-gray-800">Average Rating</h4>
//               <div className="flex items-center space-x-4">
//                 <input
//                   type="range"
//                   min="0"
//                   max="5"
//                   step="0.1"
//                   value={filters.avgRating[0]}
//                   onChange={handleSliderChange("avgRating", 0)}
//                   className="w-full h-2 bg-green-300 rounded-lg appearance-none cursor-pointer"
//                 />
//                 <input
//                   type="range"
//                   min="0"
//                   max="5"
//                   step="0.1"
//                   value={filters.avgRating[1]}
//                   onChange={handleSliderChange("avgRating", 1)}
//                   className="w-full h-2 bg-green-300 rounded-lg appearance-none cursor-pointer"
//                 />
//               </div>
//               <p className="text-gray-600">
//                 {filters.avgRating[0]} - {filters.avgRating[1]}
//               </p>
//             </div>
//           </>
//         )}

//         {activeTab === "skills" && (
//           <div>
//             <h4 className="text-xl font-medium text-gray-800">Skills</h4>
//             <div className="grid grid-cols-2 gap-4">
//               {["React", "Node.js", "Python", "AWS"].map((skill) => (
//                 <label key={skill} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     value={skill}
//                     onChange={handleCheckboxChange("skills")}
//                     className="cursor-pointer"
//                   />
//                   <span>{skill}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "organization" && (
//           <>
//             <div>
//               <h4 className="text-xl font-medium text-gray-800">Organization</h4>
//               <input
//                 type="text"
//                 name="organization"
//                 value={filters.organization}
//                 onChange={handleTextChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 placeholder="Search by organization"
//               />
//             </div>
//             <div>
//               <h4 className="text-xl font-medium text-gray-800">Education</h4>
//               <input
//                 type="text"
//                 name="education"
//                 value={filters.education}
//                 onChange={handleTextChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 placeholder="Search by education"
//               />
//             </div>
//           </>
//         )}
//       </div>

//       {/* Filtered Results */}
//       <div>
//         <h4 className="text-xl font-medium text-gray-800">Filtered Mentors</h4>
//         <ul className="space-y-4">
//           {filteredMentors.map((mentor) => (
//             <li key={mentor.id} className="p-4 bg-white shadow rounded">
//               {mentor.firstName} {mentor.lastName} - {mentor.currentRole}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MentorFilter;


// import { BsStars } from "react-icons/bs";
// import { FaSort, FaFilter, FaBolt, FaStar, FaTag } from "react-icons/fa";


// export default function FilterNav() {
//   return (
//     <div className="border rounded-lg bg-gray-50 fixed top-14 left-0 right-0  mx-[10.5rem] z-50">
//       <div className="flex justify-between items-center p-3 rounded-md">
//         <div className="flex gap-4 items-center">
//           <div className="flex items-center border bg-gradient-to-tr from-blue-200 to-pink-200 rounded-lg p-2">
//             <button className="text-sm font-medium text-gray-700
//             relative 
//                before:content-[''] before:absolute before:-bottom-0.5 
//                before:left-0 before:w-0 before:h-[2px] 
//                before:bg-gradient-to-r from-blue-500 to-purple-500
//                before:transition-all before:duration-500 
//                hover:before:w-full
//             ">
//               Mentorship
//             </button>
//           </div>
//           <div className="flex items-center gap-1">
//             <FaSort className="text-gray-500" />
//             <button className="text-sm font-medium text-gray-700 hover:text-purple-500">
//               Sort By
//             </button>
//           </div>
//           <div className="flex items-center gap-1">
//             <FaFilter className="text-gray-500" />
//             <button className="text-sm font-medium text-gray-700 hover:text-purple-500">
//               Filter
//             </button>
//           </div>
//           <div className="flex items-center gap-1">
//             <FaBolt className="text-yellow-500" />
//             <button className="text-sm font-medium text-gray-700 hover:text-purple-500">
//               Availability
//             </button>
//           </div>
//           <div className="flex items-center gap-1">
//             <FaStar className="text-yellow-500" />
//             <button className="text-sm font-medium text-gray-700 hover:text-purple-500">
//               Top Mentors
//             </button>
//           </div>
//           <div className="flex items-center gap-1">
//             <FaTag className="text-gray-500" />
//             <button className="text-sm font-medium text-gray-700 hover:text-purple-500">
//               Free Services
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center border bg-gradient-to-tr from-blue-300 to-pink-300 rounded-lg p-2">
//           <BsStars className="my-1 mx-1" />
//           <button className=" rounded-lg text-sm font-medium 
//           relative 
//                before:content-[''] before:absolute before:-bottom-0.5 
//                before:left-0 before:w-0 before:h-[2px] 
//                before:bg-gradient-to-r from-blue-500 to-purple-500 
//                before:transition-all before:duration-500 
//                hover:before:w-full
//           ">
//             Mentor Match
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { BsStars } from "react-icons/bs";
import { FaSort, FaFilter, FaBolt, FaStar, FaTag } from "react-icons/fa";
import Filters from './FilterModel/filterSkill';
import FilterAvail from "./FilterModel/filterAvailability";

const filterData = [
  {
    category: "Category",
    options: [
      "Business And Management",
      "Engineering, Technology & Data",
      "General",
      "Product & Design",
    ],
  },
  {
    category: "Skills",
    options: ["JavaScript", "Python", "Design", "Project Management"],
  },
  {
    category: "Language",
    options: ["English", "Spanish", "French", "German"],
  },
];

export default function FilterNav() {
  const [isSortByModalOpen, setIsSortByModalOpen] = useState(false);
  const [isFilterSkill, setIsFilterSkill] = useState(false);
  const [isAvail, setIsAvail] = useState(false);

  const mentorAvailableDates = [
    '2024-11-20',
    '2024-11-21',
    '2024-11-23',
    '2024-11-24',
  ];

  const handleApply = (selectedDates) => {
    console.log('Selected Date Range:', selectedDates);
  };

  const [sortValues, setSortValues] = useState({
    date: 50,
    price: 50,
    rating: 50,
    popularity: 50,
  });

  const toggleSortByModal = () => {
    setIsSortByModalOpen(!isSortByModalOpen);
  };

  const toggleFilterSkill = () => {
    setIsFilterSkill(!isFilterSkill);
  };

  const toggleFilterAvail = () => {
    setIsAvail(!isAvail);
  };

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setSortValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const availability = [
    { day: "Tuesday", isActive: true, slots: ["1:00 PM - 4:00 PM"] },
    { day: "Thursday", isActive: true, slots: ["9:00 AM - 12:00 PM"] }
  ];


  return (
    <div className="border rounded-lg bg-gray-50 fixed top-14 left-0 right-0 mx-[10.5rem] z-50">
      <div className="flex justify-between items-center p-3 rounded-md">
        <div className="flex gap-4 items-center">
          <div className="flex items-center border bg-gradient-to-tr from-blue-200 to-pink-200 rounded-lg p-2">
            <button className="text-sm font-medium text-gray-700 relative before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r from-blue-500 to-purple-500 before:transition-all before:duration-500 hover:before:w-full">
              Mentorship
            </button>
          </div>
          <div className="flex items-center gap-1">
            <FaSort className="text-gray-500" />
            <button
              className="text-sm font-medium text-gray-700 hover:text-purple-500"
              onClick={toggleSortByModal}
            >
              Sort By
            </button>
          </div>
          <div className="flex items-center gap-1">
            <FaFilter className="text-gray-500" />
            <button
              className="text-sm font-medium text-gray-700 hover:text-purple-500"
              onClick={toggleFilterSkill}
            >
              Filter
            </button>
          </div>
          <div className="flex items-center gap-1">
            <FaBolt className="text-yellow-500" />
            <button
              className="text-sm font-medium text-gray-700 hover:text-purple-500"
              onClick={toggleFilterAvail}
            >
              Availability
            </button>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <button className="text-sm font-medium text-gray-700 hover:text-purple-500">
              Top Mentors
            </button>
          </div>
          <div className="flex items-center gap-1">
            <FaTag className="text-gray-500" />
            <button className="text-sm font-medium text-gray-700 hover:text-purple-500">
              Free Services
            </button>
          </div>
        </div>
        <div className="flex items-center border bg-gradient-to-tr from-blue-300 to-pink-300 rounded-lg p-2">
          <BsStars className="my-1 mx-1" />
          <button className="rounded-lg text-sm font-medium relative before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r from-blue-500 to-purple-500 before:transition-all before:duration-500 hover:before:w-full">
            Mentor Match
          </button>
        </div>
      </div>

      {/* Sort By Modal */}
      {isSortByModalOpen && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-1/2">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-lg font-semibold text-blue-500">Sort Options</h2>
              <button
                onClick={toggleSortByModal}
                className="text-purple-300 text-2xl hover:text-purple-500 transition"
              >
                ×
              </button>
            </div>

            <div className="flex justify-around gap-6">
              <div>
                <p className="text-sm font-medium text-blue-500 mb-2">Sort by Availability</p>
                <input
                  type="range"
                  name="date"
                  min="0"
                  max="100"
                  value={sortValues.date}
                  onChange={handleSliderChange}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-sm text-blue-500 mt-1">
                  <span>{sortValues.date}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-500 mb-2">Sort by Rating</p>
                <input
                  type="range"
                  name="rating"
                  min="0"
                  max="100"
                  value={sortValues.rating}
                  onChange={handleSliderChange}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-sm text-blue-500 mt-1">
                  <span>{sortValues.rating}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-500 mb-2">Sort by Price</p>
                <input
                  type="range"
                  name="price"
                  min="0"
                  max="100"
                  value={sortValues.price}
                  onChange={handleSliderChange}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-sm text-blue-500 mt-1">
                  <span>{sortValues.price}</span>
                </div>
              </div>

              {/* Other sliders */}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={toggleSortByModal}
                className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition duration-200"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {isFilterSkill && <Filters filters={filterData} onClose={toggleFilterSkill} />}
      {isAvail && <FilterAvail availability={availability} onClose={toggleFilterAvail} />}
    </div>
  );
}
