import React, { useState } from 'react';

const Filters = ({ filters, onClose }) => {
    const [selectedFilters, setSelectedFilters] = useState({});
    const [activeCategory, setActiveCategory] = useState(null); // Track selected category for right-side options

    const toggleOption = (category, option) => {
        setSelectedFilters((prev) => {
            const categoryOptions = prev[category] || [];
            return {
                ...prev,
                [category]: categoryOptions.includes(option)
                    ? categoryOptions.filter((opt) => opt !== option)
                    : [...categoryOptions, option],
            };
        });
    };

    const clearFilters = () => {
        setSelectedFilters({});
    };

    return (
        <div className="flex">
            {/* Left Panel: Categories */}
            <div className="w-1/3 bg-gray-100 p-4 border-r rounded-l-md">
                <h2 className="text-lg font-semibold mb-3">Filter By:</h2>
                <ul className="space-y-3">
                    {filters.map((filter, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveCategory(filter.category)}
                            className={`cursor-pointer p-2 rounded-md ${activeCategory === filter.category
                                ? 'bg-purple-200 text-purple-700 font-semibold'
                                : 'hover:bg-gray-200'
                                }`}
                        >
                            {filter.category}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Panel: Options for Selected Category */}
            <div className="w-2/3 bg-white p-6 rounded-r-md shadow-lg">
                {activeCategory ? (
                    <>
                        <h2 className="text-lg font-semibold mb-3">{activeCategory}</h2>
                        <div className="space-y-2">
                            {filters
                                .find((filter) => filter.category === activeCategory)
                                ?.options.map((option, i) => (
                                    <label
                                        key={i}
                                        className="flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 border rounded-lg cursor-pointer transition duration-200 ease-in-out shadow-sm"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <input
                                                type="checkbox"
                                                checked={
                                                    selectedFilters[activeCategory]?.includes(option) || false
                                                }
                                                onChange={() => toggleOption(activeCategory, option)}
                                                className="form-checkbox text-blue-500 rounded-md focus:ring-blue-300"
                                            />
                                            <span className="text-gray-700 font-medium">{option}</span>
                                        </div>
                                        <span className="text-gray-400 text-sm italic">
                                            {/* Additional info (optional placeholder) */}
                                            {Math.floor(Math.random() * 100)} results
                                        </span>
                                    </label>
                                ))}
                        </div>

                    </>
                ) : (
                    <p className="text-gray-500">Select a category to view options.</p>
                )}

                {/* Footer Buttons */}
                <div className="mt-4 flex justify-between">
                    <button
                        onClick={clearFilters}
                        className="rounded-lg 
                    text-sm font-medium border bg-gradient-to-tr from-blue-200 to-red-400 p-2"
                    >
                        Clear Filter
                    </button>
                    <button className="rounded-lg 
                    text-sm font-medium border bg-gradient-to-tr from-blue-200 to-pink-200 p-2"
                        onClick={onClose}>
                        Apply Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
