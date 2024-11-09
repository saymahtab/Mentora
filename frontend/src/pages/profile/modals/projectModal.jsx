import React, { useState } from "react";

const ProjectModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-[900px] relative overflow-y-auto max-h-[90vh]">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold">Add Project</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
                    >
                        &times;
                    </button>
                </div>
                <hr className="mb-4" />

                {/* Form */}
                <div className="space-y-4">
                    {/* Project Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Project name*</label>
                        <input
                            type="text"
                            placeholder="Project name"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            placeholder="Description"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            rows="3"
                            maxLength="2000"
                        ></textarea>
                        <div className="text-right text-sm text-gray-500">0/2000</div>
                    </div>

                    {/* Skills */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Skills</label>
                        <p className="text-xs text-gray-500 mb-1">
                            We recommend adding your top 5 used in this project. They’ll also appear in your Skills section.
                        </p>
                        <button className="w-full mt-1 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100">
                            + Add skill
                        </button>
                    </div>

                    {/* Media */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Media</label>
                        <p className="text-xs text-gray-500 mb-1">
                            Add media like images, documents, sites, or presentations.
                        </p>
                        <button className="w-full mt-1 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100">
                            + Add media
                        </button>
                    </div>

                    {/* Additional Details */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Additional details</label>
                        <div className="flex items-center mb-3">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">I am currently working on this project</span>
                        </div>

                        {/* Dates */}
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
                                <label className="block text-sm font-medium mb-1">End date</label>
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
                    </div>

                    {/* Contributors */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Contributors</label>
                        <button className="w-full mt-1 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100">
                            + Add contributor
                        </button>
                    </div>

                    {/* Associated With */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Associated with</label>
                        <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                            <option>Please select</option>
                            {/* Populate options here */}
                        </select>
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

export default ProjectModal;
