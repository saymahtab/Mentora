// components/OtherCategoriesFilter.jsx
import React from "react";

const OtherCategoriesFilter = ({ searchTerm, checkedItems, setCheckedItems }) => {
  const items = ["Business And Management", "Engineering, Technology & Data", "General", "Product & Design"]; // Items data inside component
  const filteredItems = items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredItems.map((item, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={checkedItems[item] || false}
            onChange={() => setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }))}
            className="h-4 w-4"
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
};

export default OtherCategoriesFilter;
