// components/FilterButton.jsx
import React from "react";

const FilterButton = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs border
        ${isActive ? "bg-[#0073E6] text-white" : "bg-white text-gray-800"} 
        hover:border-[#0073E6] transition-colors duration-200`}
    >
      {icon}
      {label}
    </button>
  );
};

export default FilterButton;
