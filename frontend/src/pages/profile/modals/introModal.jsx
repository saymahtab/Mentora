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
            </div>
        </div>
    );
};

export default IntroModal;