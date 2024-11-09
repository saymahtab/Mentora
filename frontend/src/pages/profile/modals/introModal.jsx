<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { FaSuitcase } from 'react-icons/fa';
import { USER } from "../../../../utils/db/dummy";


const IntroModal = ({ isOpen, onClose }) => {
    const [gender, setGender] = useState('female');
    const [userType, setUserType] = useState('collegeStudents');
    const [course, setCourse] = useState('');
    const [courseStartYear, setCourseStartYear] = useState('');
    const [courseEndYear, setCourseEndYear] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [purpose, setPurpose] = useState('');
    const [location, setLocation] = useState('');

    const fileInputRef = useRef(null); // Reference for the file input element

    // Trigger file input when edit button is clicked
    const handleEditClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleGenderChange = (value) => {
        setGender(value);
    };

    const handleUserTypeChange = (value) => {
        setUserType(value);
    };

    const handleCourseChange = (value) => {
        setCourse(value);
    };

    const handleCourseStartYearChange = (value) => {
        setCourseStartYear(value);
    };

    const handleCourseEndYearChange = (value) => {
        setCourseEndYear(value);
    };

    const handleOrganisationChange = (value) => {
        setOrganisation(value);
    };

    const handlePurposeChange = (value) => {
        setPurpose(value);
    };

    const handleLocationChange = (value) => {
        setLocation(value);
    };

    //user for images
    const authUser = USER[6];

    if (!isOpen) return null; // If isOpen is false, don't render the modal

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="bg-white p-8 pt-2 rounded-lg shadow-lg w-5/6 h-5/6  overflow-y-auto relative">
                <div className="  flex justify-between items-center p-4 bg-white">
                    <h1 className="text-2xl font-semibold text-gray-800 ">Basic Details</h1>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800 "
                    >
                        &#10005; {/* Close (X) button */}
                    </button>
                </div>
                <hr />

                <div className="flex items-start mb-2 bg-gray-10 0 p-6 rounded-md -z-0">
                    <div className="w-1/4 text-center relative">
                        <div className="w-32 h-32 rounded-full bg-orange-500 mx-auto mb-2 overflow-hidden relative group">
                            {/* Profile image */}
                            <img
                                src={authUser.profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            {/* Edit button appears on hover */}
                            <button
                                onClick={handleEditClick}
                                className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-80 transition-opacity duration-200 bg-gray-100  pb-3 w-28 shadow-md"
                                aria-label="Edit Profile Image"
                            >
                                ✎ {/* Edit icon */}
                            </button>
                        </div>
                        {/* Hidden file input to upload a new profile image */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    // Handle file change (e.g., display it or upload it)
                                    console.log("Selected file:", file);
                                }
                            }}
                        />
                    </div>

                    <div className="w-3/4 flex-col gap-4">
                        <div className="text-center flex justify-between">
                            <div className="flex flex-col w-1/2 mr-1">
                                <label htmlFor="fname" className="block text-xs text-slate-500 text-left">
                                    First Name <i className="text-red-600">*</i>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    id="fname"
                                    className="w-full p-2 mt-1 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                                />
                            </div>
                            <div className="flex flex-col w-1/2 ml-1">
                                <label htmlFor="lname" className="block text-xs text-slate-500 text-left">
                                    Last Name<i className="text-red-600">*</i>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    id="lname"
                                    className="w-full p-2 mt-1 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                                />
                            </div>
                        </div>
                        <label className="block text-xs text-slate-500 mb-1">Username <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="guddukum9212" className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"  />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-xs text-slate-500 mb-1">Email <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <input type="email" value={authUser.email} className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"  />
                        <button className="absolute right-3 top-2 text-blue-500">Update Email</button>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-xs text-slate-500 mb-1">Mobile <span className="text-red-500">*</span></label>
                    <input type="text" placeholder={authUser.mobile}  value={`+91 ${authUser.mobile}`} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>

                <div className="mb-6">
                    <label className="block text-xs text-slate-500 mb-1">Gender <span className="text-red-500">*</span></label>
                    <div className="flex gap-4">
                        {['Male', 'Female', 'More Options'].map((option) => (
                            <button
                                key={option}
                                className={`py-2 px-4 rounded-3xl border-dotted border-2 ${gender === option.toLowerCase() ? 'bg-blue-100 border-blue-300' : 'border-blue-500'
                                    }`}
                                onClick={() => handleGenderChange(option.toLowerCase())}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-xs text-slate-500 mb-1">User Type <span className="text-red-500">*</span></label>
                    <div className="flex gap-2 flex-wrap">
                        {[
                            { label: 'College Students', value: 'collegeStudents' },
                            { label: 'Professional', value: 'professional' },
                            { label: 'Others', value: 'others' },
                            { label: 'School Student', value: 'schoolStudent' },
                            { label: 'Fresher', value: 'fresher' },
                            { label: 'Recruiter', value: 'recruiter' },
                            { label: 'Organizer', value: 'organizer' },
                        ].map((type) => (
                            <button
                                key={type.value}
                                className={`py-2 px-4 rounded-3xl border-dotted border-2 ${userType === type.value ? 'bg-blue-100 border-blue-300' : 'border-blue-500'
                                    }`}
                                onClick={() => handleUserTypeChange(type.value)}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-xs text-slate-500 mb-1">Course <span className="text-red-500">*</span></label>
                    <select
                        value={course}
                        onChange={(e) => handleCourseChange(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select Course</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="MBA">MBA</option>
                        <option value="Ph.D">Ph.D</option>
                    </select>
                    {course === '' && <span className="text-red-500 text-xs">Please consider selecting a course!</span>}
                </div>

                <div className="mb-6 flex gap-4">
                    <div className="w-1/2">
                        <label className="block text-xs text-slate-500 mb-1">Course Start Year <span className="text-red-500">*</span></label>
                        <input
                            type="number"
                            placeholder="Start Year"
                            value={courseStartYear}
                            onChange={(e) => handleCourseStartYearChange(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-xs text-slate-500 mb-1">Course End Year <span className="text-red-500">*</span></label>
                        <input
                            type="number"
                            placeholder="End Year"
                            value={courseEndYear}
                            onChange={(e) => handleCourseEndYearChange(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-xs text-slate-500 mb-1">Organisation/College <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={organisation}
                        onChange={(e) => handleOrganisationChange(e.target.value)}
                        placeholder="Organisation"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-xs text-slate-500 mb-1">Purpose <span className="text-red-500">*</span></label>
                    <div className="flex gap-2 flex-wrap">
                        {[
                            { label: 'To Find A job', value: 'To Find a Job' },
                            { label: 'To Hire', value: 'To Hire' },
                            { label: 'compete & upskil', value: 'compete & Upskill' },
                            { label: 'To host an Event', value: 'To Host an event' },
                            { label: 'To be a Mentor', value: 'To be a Mentor' },
                            { label: 'Recruiter', value: 'recruiter' },
                            { label: 'Organizer', value: 'organizer' },
                        ].map((type) => (
                            <button
                                key={type.value}
                                className={`py-2 px-4 rounded-3xl border-dotted border-2 ${userType === type.value ? 'bg-blue-100 border-blue-300' : 'border-blue-500'
                                    }`}
                                onClick={() => handleUserTypeChange(type.value)}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-xs text-slate-500 mb-1">Location <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => handleLocationChange(e.target.value)}
                        placeholder="Location"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white p-2 px-4 rounded-md mt-4 "
                >
                    Submit
                </button>

=======
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
>>>>>>> dd911616736238d6a64b040b945faa8601cc13d9
            </div>
        </div>
    );
};

export default IntroModal;
<<<<<<< HEAD
=======




>>>>>>> dd911616736238d6a64b040b945faa8601cc13d9
