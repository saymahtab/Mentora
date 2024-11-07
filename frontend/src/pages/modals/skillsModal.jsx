import React, { useState } from "react";

const suggestedSkills = [
    "Python", "Node.Js", "JavaScript", "Java", "CSS", "MERN", "C++", 
    "React", "Vue.js", "Angular", "Express.js", "MongoDB", "HTML", 
    "SQL", "TypeScript", "PHP", "Ruby", "Django", "Flask", 
    "Go", "Kotlin", "Swift", "Rust", "Spring Boot", "GraphQL", 
    "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Sass", 
    "Bootstrap", "Tailwind CSS", "Firebase", "MySQL", "PostgreSQL"
];

const SkillSuggestion = ({ isOpen, onClose }) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [showAllSkills, setShowAllSkills] = useState(false);
    const maxSkills = 5;
    const initialDisplayCount = 10;

    const toggleSkill = (skill) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else if (selectedSkills.length < maxSkills) {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const handleSave = () => {
        console.log("Selected Skills:", selectedSkills);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-full sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[900px] max-w-3xl relative">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Add skill</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
                    >
                        &times;
                    </button>
                </div>
                <label className="block text-sm font-medium mb-1">Skill*</label>
                <input
                    type="text"
                    placeholder="Skill (ex: Project Management)"
                    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                />
                <p className="text-sm font-medium text-gray-700 mb-2">Suggested based on your profile</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {(showAllSkills ? suggestedSkills : suggestedSkills.slice(0, initialDisplayCount)).map((skill, index) => (
                        <button
                            key={index}
                            onClick={() => toggleSkill(skill)}
                            className={`px-3 py-1 text-sm border rounded-full cursor-pointer flex items-center ${
                                selectedSkills.includes(skill) 
                                    ? "bg-blue-600 text-white" 
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {skill}
                            {selectedSkills.includes(skill) && (
                                <span 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSkill(skill);
                                    }}
                                    className="ml-2 text-white text-xs font-bold cursor-pointer"
                                >
                                    &times;
                                </span>
                            )}
                        </button>
                    ))}
                </div>
                {suggestedSkills.length > initialDisplayCount && (
                    <button 
                        onClick={() => setShowAllSkills(!showAllSkills)}
                        className="text-blue-500 text-sm mb-4 focus:outline-none"
                    >
                        {showAllSkills ? "Show Less" : "Show More"}
                    </button>
                )}
                <div className="text-gray-500 text-sm mb-4">
                    Selected Skills: {selectedSkills.length}/{maxSkills}
                </div>
                <button 
                    onClick={handleSave} 
                    className="w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default SkillSuggestion;
