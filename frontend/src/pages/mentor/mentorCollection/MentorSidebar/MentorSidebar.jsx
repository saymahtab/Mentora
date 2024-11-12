import { useState } from 'react';
import '../../../../App.css'
import { FaAward } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { IoTimeOutline } from 'react-icons/io5';
import { FiClipboard } from 'react-icons/fi';
import { MdWorkOutline } from 'react-icons/md';

const MentorSidebar = ({ mentors, onSelectMentor }) => {
  const [selectedMentorId, setSelectedMentorId] = useState();

  const handleMentorClick = (mentor) => {
    setSelectedMentorId(mentor._id);
    onSelectMentor(mentor);
  };

  return (
    <div className="flex max-w-[26rem] max-h-screen fixed">
      <ul
        className="overflow-y-auto flex flex-col rounded-lg border custom-scrollbar"
        style={{
          maxHeight: '100vh',
          width: '100%',
          backgroundColor: '#ffffff',
        }}
      >
        {mentors.map((mentor) => (
          <li
            key={mentor._id}  
            onClick={() => handleMentorClick(mentor)} 
            className={`bg-white flex gap-3 px-5 pt-4 cursor-pointer
              ${selectedMentorId === mentor._id ? 'border-l-4 border-blue-500' : 'border-l-4 border-transparent hover:border-blue-100 transition duration-300'}`}
          >
            <img 
              src={mentor.profileImg || '/avatar-placeholder.png'} 
              alt={`${mentor.firstName} ${mentor.lastName}`}
              className="w-14 h-14 rounded-lg" 
            />
            <div className="flex flex-col gap-1 border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center bg-[#C3F0DA] pr-3 pl-2 py-[0.1rem] rounded-sm text-xs gap-1 text-zinc-700 font-medium">
                  <BsStarFill className="text-xs text-zinc-700" />
                  {mentor.avgRating}
                </span>
                {mentor.isTopMentor && (
                  <span
                    className="inline-flex items-center bg-[#FFEBA0] pr-3 pl-2 py-[0.1rem] rounded-sm text-[0.7rem] gap-1 text-zinc-700 font-medium"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)"
                    }}
                  >
                    <FaAward className="text-xs text-zinc-700" />
                    Top Mentor
                  </span>
                )}
              </div>
              <p className='font-medium text-[#0073E6] leading-3 cursor-pointer hover:underline'>
                {mentor.firstName} {mentor.lastName}
              </p>
              {/* Line-clamped bio */}
              <p className="text-sm text-zinc-500 mb-1 line-clamp-2">{mentor.bio}</p>
              <div className="flex items-center flex-wrap text-xs gap-2">
                <p className="flex items-center gap-1 text-zinc-800">
                  <IoTimeOutline className="text-zinc-700" />
                  {mentor.totalExperience} years
                </p>
                <p className="flex items-center gap-1 text-zinc-800">
                  <MdWorkOutline className="text-zinc-700" />
                  {mentor.industry}
                </p>
                <p className="flex items-center gap-1 text-zinc-800">
                  <FiClipboard className="text-zinc-700" />
                  {mentor.totalReviews} Reviews
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorSidebar;
