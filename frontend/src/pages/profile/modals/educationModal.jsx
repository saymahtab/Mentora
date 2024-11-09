import React, { useState } from "react";

const EducationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-full sm:w-[500px] lg:w-[600px] relative overflow-y-auto max-h-[80vh]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Add Education</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
                    >
                        &times;
                    </button>
                </div>
                
                {/* Form */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">School*</label>
                        <input
                            type="text"
                            placeholder="Ex: Boston University"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Degree</label>
                        <input
                            type="text"
                            placeholder="Ex: Bachelor's"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Field of study</label>
                        <input
                            type="text"
                            placeholder="Ex: Business"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Start date</label>
                            <div className="flex gap-2">
                                <select className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                                    <option>Month</option>
                                    {/* Populate months here */}
                                </select>
                                <select className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                                    <option>Year</option>
                                    {/* Populate years here */}
                                </select>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">End date (or expected)</label>
                            <div className="flex gap-2">
                                <select className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                                    <option>Month</option>
                                    {/* Populate months here */}
                                </select>
                                <select className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                                    <option>Year</option>
                                    {/* Populate years here */}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Grade</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Activities and societies</label>
                        <textarea
                            placeholder="Ex: Alpha Phi Omega, Marching Band, Volleyball"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            rows="2"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            placeholder=""
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Skills Section */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Skills</label>
                        <p className="text-sm">We recommend adding your top 5 used in this experience. They’ll also appear in your Skills section.</p>
                        <button className="w-full mt-1 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100">
                            + Add skill
                        </button>
                    </div>

                    {/* Media Section */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Media</label>
                        <p className="text-sm">Add media like images, documents, sites or presentations. <b className="text-cyan-700">Learn more about media file types supported</b></p>
                        <button className="w-full mt-1 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100">
                            + Add media
                        </button>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EducationModal;
