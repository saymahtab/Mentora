// MentorCollectionSide.js

import React from 'react';
import { Link } from 'react-router-dom';
import { USER } from '../../../../utils/db/dummy';
import { GoStarFill } from 'react-icons/go';
import { FaGlobeAsia } from 'react-icons/fa';
import { MdOutlineWorkOutline, MdOutlineRateReview } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';

const MentorCollectionSide = () => {
  return (
    <div className="bg-white rounded-lg border max-w-[25rem] max-h-full h-full">
      <div className="overflow-y-auto h-full">
        {USER.map((user) => (
          <div className="flex items-start gap-3 border-b mt-6 pb-4 px-4" key={user.id}>
            <div className="avatar">
              <Link to={`/mentor/collection`} className="flex w-14">
                <img
                  src={user.profileImg || '/avatar-placeholder.png'}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="cursor-pointer rounded-full"
                />
              </Link>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-1">
                <Link
                  to="/mentor/collection"
                  className="font-medium text-[#0073E6] leading-3 cursor-pointer hover:underline"
                >
                  {user.firstName} {user.lastName}
                </Link>
                <p className="bg-[#C3F0DA] px-1 rounded-sm text-xs flex items-center gap-1">
                  <GoStarFill />5
                </p>
              </div>
              <p className="text-sm text-[#7e7e7e] mb-1">{user.bio}</p>
              <div className="flex items-center gap-5 text-xs text-[#404040]">
                <p className="flex items-center gap-1">
                  <FaGlobeAsia className="text-[#636262] text-xs" />3 years
                </p>
                <p className="flex items-center gap-1">
                  <MdOutlineWorkOutline className="text-[#404040] text-md" />
                  Buisness and Management
                </p>
              </div>
              <p className="text-xs text-[#404040] flex items-center gap-1 mt-1">
                <MdOutlineRateReview />2 Reviews
              </p>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 font-medium text-[#5d5d5d] justify-center p-3 cursor-pointer hover:bg-[#f4f4f4]">
          Show all
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default MentorCollectionSide;
