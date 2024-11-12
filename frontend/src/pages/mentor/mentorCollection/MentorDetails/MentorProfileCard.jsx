import { IoCalendarOutline} from "react-icons/io5";
import { FaLinkedin, FaFacebookSquare, FaAward } from "react-icons/fa";
import { PiInstagramLogoFill, PiShareFatLight } from "react-icons/pi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { BsStarFill, BsPerson } from "react-icons/bs";
import { MdWorkOutline } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import { FiClipboard } from 'react-icons/fi';

const MentorProfileCard = ({ isLiked, toggleLike, mentor }) => {
  return (
    <div className='bg-white rounded-lg border'>
      <div className="relative bg-white rounded-lg">
        <img src={mentor.banner} className="w-full h-auto rounded-t-lg" />

        <img
          src={mentor.profileImg || "/avatar-placeholder.png"}
          className="h-36 w-36 rounded-full border-[4px] border-white bg-white absolute left-6 bottom-[-3.5rem] cursor-pointer"
        />
        {isLiked ? (
          <IoMdHeart
            className="text-3xl cursor-pointer absolute top-3 right-3 text-red-500 bg-white rounded-full p-1"
            onClick={toggleLike}
          />
        ) : (
          <IoMdHeartEmpty
            className="text-3xl cursor-pointer absolute top-3 right-3 text-blue-800 bg-white rounded-full p-1"
            onClick={toggleLike}
          />
        )}
      </div>
      <div className="px-6 pb-1 mt-[3.8rem] flex flex-col gap-1">
        <div className="mt-1 flex items-center gap-2">
          <span className="inline-flex items-center bg-[#C3F0DA] pr-3 pl-2 py-1 rounded-sm text-xs gap-1 text-zinc-700 font-medium">
            <BsStarFill className="text-xs text-zinc-700" />
            {mentor.avgRating}
          </span>
          <span className="inline-flex items-center bg-[#FFEBA0] pr-3 pl-2 rounded-sm py-1 text-xs gap-1 text-zinc-700 font-medium"
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)"
          }}>
            <FaAward className="text-sm text-zinc-700" />
            Top Mentor
          </span>
        </div>
        <p className="text-[1.7rem] leading-8 font-medium text-zinc-700 mb-1">
          {mentor.firstName} {mentor.lastName}
        </p>
        <p className="text-zinc-700">{mentor.bio}</p>
        <div className="flex items-center mt-2 flex-wrap text-sm gap-2">
          <p className="flex items-center gap-1 text-zinc-700">
            <IoTimeOutline className="text-zinc-600" />
            {mentor.totalExperience} years
          </p>
          <p className="flex items-center gap-1 text-zinc-700">
            <MdWorkOutline className="text-zinc-600" />
            {mentor.expertise.domain}
          </p>
          <p className="flex items-center gap-1 text-zinc-700">
            <IoCalendarOutline className="text-zinc-600" />
            {mentor.totalSessions} Bookings
          </p>
          <p className="flex items-center gap-1 text-zinc-700">
            <BsPerson className="text-zinc-600 text-lg" />
            {mentor.totalDuration} Mentoring Minutes
          </p>
          <p className="flex items-center gap-1 text-zinc-700">
            <FiClipboard className="text-zinc-600" />
            {mentor.totalReviews} Reviews
          </p>
        </div>
        <div className="flex mt-6 items-center justify-between border-t py-5">
          <span className="text-[#646464] flex items-center gap-3">
            <FaLinkedin className="text-2xl cursor-pointer" />
            <PiInstagramLogoFill className="text-[1.7rem] cursor-pointer" />
            <FaFacebookSquare className="text-2xl cursor-pointer" />
            <PiShareFatLight className="text-[1.6rem] cursor-pointer border p-[0.1rem] rounded-lg ml-2" />
          </span>
          <button className="border-2 border-[#0073E6] px-4 py-1 rounded-full text-[#0073E6] transition-all duration-300 hover:shadow-[inset_0_0_0_1px_#0073E6]">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorProfileCard;
