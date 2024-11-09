// AboutModal.js
import React, { useState } from "react";

const suggestedSkills = ["Python", "Node.js", "JavaScript", "Java", "CSS"];

const AboutModal = ({ isOpen, onClose }) => {
  const [aboutText, setAboutText] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const maxSkills = 5;
  const maxCharacters = 2600;

  const handleTextChange = (e) => {
    if (e.target.value.length <= maxCharacters) {
      setAboutText(e.target.value);
    }
  };

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else if (selectedSkills.length < maxSkills) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSave = () => {
    // Perform save logic here
    onClose();
  };

  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-2/3 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit About</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl font-bold">
            &times;
          </button>
        </div>
        <hr className="mb-4" />
        <h3 className="font-semibold">About Me <span className="test-xs text-red-700">*</span></h3>
        <p className="text-gray-600 text-sm mb-2">You can write about your years of experience, industry, or skills.</p>

        {/* About Textarea */}
        <textarea
          value={aboutText}
          onChange={handleTextChange}
          placeholder="Introduce yourself and share  or give a brief overview who you are , and who you want to be."
          className="border p-2 w-full mb-2"
          rows="5"
        />
        <div className="text-gray-500 text-right text-sm ">{aboutText.length}/{maxCharacters}</div>
        <button className=" border rounded-full p-1">
            <p className="px-4 p-3 rounded-full bg-gray-200">Generate With AI</p>
        </button>


        {/* Skills Section */}
        {/* <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestedSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`${
                selectedSkills.includes(skill) ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              } flex items-center gap-1 px-3 py-1 rounded-full text-sm`}
            >
              {skill}
              {selectedSkills.includes(skill) && (
                <span className="ml-1 text-white text-xs font-bold">×</span>
              )}
            </button>
          ))}
        </div>
        <div className="text-gray-500 text-sm mb-4">
          Selected Skills: {selectedSkills.length}/{maxSkills}
        </div> */}

        {/* Save Button */}
        <div className="flex justify-end">
          <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
