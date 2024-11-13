// components/FilterModal.jsx
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import SkillsFilter from "./SkillsFilter";
import AvailableDaysFilter from "./AvailableDaysFilter";
import OtherCategoriesFilter from "./OtherCategoriesFilter";
import PriceFilter from "./PriceFilter"; // Import PriceFilter component
import WorkExperienceFilter from "./WorkExperienceFilter"; // Import WorkExperienceFilter component

const FilterModal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [checkedItems, setCheckedItems] = useState({});

  const categories = [
    "Category",
    "Skills",
    "Organisation",
    "Price",
    "Work Experience",
    "Language",
    "Available Days",
  ];

  const handleClear = () => {
    setSearchTerm("");
    setCheckedItems({});
  };

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case "Skills":
        return (
          <SkillsFilter
            searchTerm={searchTerm}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
        );
      case "Available Days":
        return (
          <AvailableDaysFilter
            searchTerm={searchTerm}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
        );
      case "Price":
        return <PriceFilter />;
      case "Work Experience":
        return <WorkExperienceFilter 
            searchTerm={searchTerm}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            />; 
      default:
        return (
          <OtherCategoriesFilter
            searchTerm={searchTerm}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
        );
    }
  };

  return (
    <div className="flex w-[38rem]">
      <aside className="w-1/3 px-4 py-2 border-r bg-gray-100 overflow-y-auto custom-scrollbar">
        <h2 className="text-xl font-semibold mb-3">Filters</h2>
        <ul className="space-y-1">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`p-3 cursor-pointer rounded-lg ${
                selectedCategory === category ? "bg-blue-100 font-semibold" : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-3/4 p-6">
        <header className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{selectedCategory}</h3>
          <button
            onClick={handleClear}
            className="text-sm text-red-500 hover:bg-red-100 px-3 py-1 rounded-lg"
          >
            Clear
          </button>
        </header>

        <label className="relative block mb-4">
          <IoSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search ${selectedCategory}`}
            className="w-full px-8 py-2 border rounded-full text-sm focus:outline-none"
          />
        </label>

        {renderCategoryComponent()}

        <footer className="flex justify-between items-center mt-6">
          <button onClick={handleClear} className="text-red-500 text-sm">
            Clear Filter
          </button>
          <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700">
            Apply Filter
            <FaArrowRight />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default FilterModal;
