import React, { useState } from "react";

const ResearchPaperModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <form htmlfor="info" className="bg-white rounded-lg p-6 w-full sm:w-[500px] lg:w-[900px] relative overflow-y-auto max-h-[80vh]">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">Add Research Paper</h2>
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
                    <div>
                        <label className="block text-sm font-medium mb-1">Paper Title*</label>
                        <input
                            type="text"
                            placeholder="Ex: A Comprehensive Study on Machine Learning"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Authors*</label>
                        <input
                            type="text"
                            placeholder="Ex: John Doe, Jane Smith"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Journal/Publisher*</label>
                        <input
                            type="text"
                            placeholder="Ex: IEEE, Nature"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Publication Date</label>
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
                        <label className="block text-sm font-medium mb-1">DOI (Digital Object Identifier)</label>
                        <input
                            type="text"
                            placeholder="Ex: 10.1109/5.771073"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Link to Paper</label>
                        <input
                            type="text"
                            placeholder="Ex: https://doi.org/10.1109/5.771073"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Keywords Section */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Keywords</label>
                        <p className="text-sm">Add relevant keywords related to this research paper.</p>
                        <button className="w-full mt-1 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100">
                            + Add keyword
                        </button>
                    </div>

                    {/* Media Section */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Media</label>
                        <p className="text-sm">Attach media like datasets, code, presentations, or supplementary material. <b className="text-cyan-700">Learn more about supported file types</b></p>
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
            </form>
        </div>
    );
};

export default ResearchPaperModal;
