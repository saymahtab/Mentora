import React, { useState } from "react";

const suggestedSkills = ["Python", "Node.js", "JavaScript", "Java", "CSS"];

const IntroModal = ({ isOpen, onClose }) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [additional, setAdditional] = useState("");
    const [headLine, setHeadLine] = useState("");
    const [pronouns, setPronouns] = useState("");
    const [positions, setPositions] = useState([]);
    const [newPosition, setNewPosition] = useState("");
    const [selectedPosition, setSelectedPosition] = useState("");
    const [industry, setIndustry] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactUrl, setContactUrl] = useState("");
    const [projectWebsite, setProjectWebsite] = useState("");
    const [educations, setEducations] = useState([]);
    const [newEducation, setNewEducation] = useState("");
    const [selectedEducation, setSelectedEducation] = useState("");

    const handleAddPosition = () => {
        if (newPosition && !positions.includes(newPosition)) {
            setPositions([...positions, newPosition]);
            setNewPosition("");
        }
    };
    const handleAddEducation = () => {
        if (newEducation && !educations.includes(newEducation)) {
            setEducations([...educations, newEducation]);
            setNewEducation("");
        }
    };

    const handleSave = () => {
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg w-3/4 max-w-3xl h-2/3 flex flex-col">
                {/* Header Section */}
                <div className="flex justify-between items-center p-4 border-b border-gray-300">
                    <h2 className="text-xl font-semibold">Edit Intro</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl font-bold">
                        &times;
                    </button>
                </div>

                {/* Scrolling Content */}
                <div className="overflow-y-auto p-6" style={{ maxHeight: "calc(100% - 120px)" }}>
                    <form>
                        {/* Basic Information */}
                        <label htmlFor="fname" className="block text-gray-700 text-sm mb-2">First Name*</label>
                        <input type="text" id="fname" value={fname} placeholder="First Name*" onChange={(e) => setFname(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" />

                        <label htmlFor="lname" className="block text-gray-700 text-sm mb-2">Last Name*</label>
                        <input type="text" id="lname" value={lname} placeholder="Last Name*" onChange={(e) => setLname(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" />

                        <label htmlFor="pronouns" className="block text-gray-700 text-sm mb-2">Pronouns*</label>
                        <select id="pronouns" value={pronouns} onChange={(e) => setPronouns(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500">
                            <option value="he/him">Select Pronouns</option>
                            <option value="he/him">He/Him</option>
                            <option value="she/her">She/Her</option>
                            <option value="they/them">They/Them</option>
                            <option value="other">Other</option>
                        </select>

                        <label htmlFor="headline" className="block text-gray-700 text-sm mb-2">Headline*</label>
                        <textarea id="headline" value={headLine} onChange={(e) => setHeadLine(e.target.value)} placeholder="Add headline to your Bio." className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"></textarea>

                        {/* Position Section */}
                        <p className="text-lg font-semibold mb-4">Current Position</p>
                        <label htmlFor="position" className="block text-gray-700 text-sm mb-2">Position*</label>
                        <select id="position" value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)} className="mb-2 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500">
                            {positions.map((position, index) => (
                                <option key={index} value={position}>{position}</option>
                            ))}
                        </select>
                        <input type="text" value={newPosition} onChange={(e) => setNewPosition(e.target.value)} placeholder="Add New Position" className=" p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" />
                        <button type="button" onClick={handleAddPosition} className="text-cyan-500 mb-2">+ Add Position</button>
                        {/* Industry Section */}
                        <p className="block text-gray-700 text-sm mb-2">Industry*</p>
                        <select id="industry" value={industry} onChange={(e) => setIndustry(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500">
                            <option value="" disabled>Select Industry</option>
                            <option value="Software Industry">Software Industry</option>
                            <option value="IT System Custom Software Development">IT System Custom Software Development</option>
                        </select>

                        {/* Education Section */}
                        <p className="text-lg font-semibold mb-4">Education</p>
                        <label htmlFor="school" className="block text-gray-700 text-sm mb-2">Schools*</label>
                        <select id="education" value={selectedEducation} onChange={(e) => setSelectedEducation(e.target.value)} className="mb-2 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500">
                            {educations.map((education, index) => (
                                <option key={index} value={education}>{education}</option>
                            ))}
                        </select>
                        <input type="text" value={newEducation} onChange={(e) => setNewEducation(e.target.value)} placeholder="Add New Education" className="mb-2 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" />
                        <button type="button" onClick={handleAddEducation} className="text-cyan-500 mb-4">+ Add Education</button>

                        {/* Location Section */}
                        <p className="text-lg font-semibold mb-4">Location</p>
                        <label htmlFor="country/region" className="block text-gray-700 text-sm mb-2">Country/Region*</label>
                        <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" className="mb-2 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" />
                        <label htmlFor="country/region" className="block text-gray-700 text-sm mb-2">State*</label>
                        <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" />

                        {/* Contact Info Section */}
                        <p className="text-lg font-semibold mb-4">Contact Info</p>
                        <label htmlFor="Email" className="block text-gray-700 text-sm mb-2">Email*</label>
                        <input type="email" id="contactEmail" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="Email" className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" />
                        <label htmlFor="URL" className="block text-gray-700 text-sm mb-2">URL</label>
                        <input type="url" id="contactUrl" value={contactUrl} onChange={(e) => setContactUrl(e.target.value)} placeholder="URL" className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" />
                        {/* Website Link for Projects */}
                        <p className="text-lg font-semibold">Project Website</p>
                        <input type="url" id="projectWebsite" value={projectWebsite} onChange={(e) => setProjectWebsite(e.target.value)} placeholder="Add project website link" className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" />
                    </form>
                </div>
                {/* Save Button - Fixed Section */}
                <div className="p-4 bg-gray-100 border-t border-gray-300 flex justify-end">
                    <button type="button" onClick={handleSave} className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IntroModal;




