// components/SortByModal.jsx
import React from "react";

const SortByModal = () => {
  return (
    <div className="space-y-1 w-72">
      <button className="w-full text-left hover:bg-gray-100 p-2">Price (High to Low)</button>
      <button className="w-full text-left hover:bg-gray-100 p-2">Price (Low to High)</button>
      <button className="w-full text-left hover:bg-gray-100 p-2">Work Experience (High to Low)</button>
      <button className="w-full text-left hover:bg-gray-100 p-2">Rating (High to Low)</button>
    </div>
  );
};

export default SortByModal;
