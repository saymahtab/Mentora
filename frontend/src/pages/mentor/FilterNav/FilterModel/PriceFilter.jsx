// components/PriceFilter.jsx
import React, { useState } from "react";

const PriceFilter = ({ minPrice = 0, maxPrice = 1000, setPriceRange }) => {
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);

  const handleMinChange = (e) => {
    const value = Math.max(minPrice, Math.min(e.target.value, max));
    setMin(value);
    setPriceRange({ min: value, max });
  };

  const handleMaxChange = (e) => {
    const value = Math.min(maxPrice, Math.max(e.target.value, min));
    setMax(value);
    setPriceRange({ min, max: value });
  };

  return (
    <div className="space-y-4">
      <label className="block font-semibold">Price Range</label>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          value={min}
          onChange={handleMinChange}
          placeholder="Min"
          className="w-20 px-2 py-1 border rounded"
        />
        <span>-</span>
        <input
          type="number"
          value={max}
          onChange={handleMaxChange}
          placeholder="Max"
          className="w-20 px-2 py-1 border rounded"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
