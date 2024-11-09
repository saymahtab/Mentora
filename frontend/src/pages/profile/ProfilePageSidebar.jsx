import { useState } from 'react';
import { Link } from "react-router-dom";
import { IoMdShare } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { USER } from "../../../utils/db/dummy";
import RightPanelSkeleton from "../../components/skeletons/RightPanelSkeleton";
import IntroModal from './modals/introModal';

const ProfilePageSidebar = () => {
  const [isIntro, setIsIntro] = useState(false);
  const openIntro = () => setIsIntro(true);
  const closeIntro = () => setIsIntro(false);

  const authUser = USER[6];
  const suggestedUsers = USER.slice(2, 6);
  const isLoading = false;

  return (
    <div className="w-[19rem] rounded-xl relative">
      <div className="flex flex-1 flex-col rounded-xl border bg-white p-3 pb-4">
        <div className="cursor-pointer">
          <IoMdShare className=" border absolute right-2 top-2 rounded-xl size-9 p-[0.4rem]" />
        </div>
        <div className="avatar">
          <Link
            to={`/profile/${authUser.username}`}
            className="flex w-[7.5rem]"
          >
            <img
              src={authUser.profileImg || "/avatar-placeholder.png"}
              className="cursor-pointer rounded-full border-2"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-1 items-start mt-2 ml-1">
          <div className="flex gap-1 items-center mt-2">
            <p className="text-2xl font-semibold text-[#454545] mr-1 leading-3">
              {authUser.firstName} {authUser.lastName}
            </p>
            <p className="text-sm text-[#807f7f] font-noraml leading-5">
              ({authUser.pronouns})
            </p>
          </div>
          <p className="text-[0.98rem] leading-5 text-[#5b5b5b] mt-1">
            {authUser.bio}
          </p>
          <p className="text-sm text-[#807f7f]">{authUser.location}</p>
          <p className="text-sm font-semibold text-[#0073E6] mt-1 cursor-pointer">
            {authUser.connections}+ Connections
          </p>
        </div>
        <div className="mt-3 flex gap-3">
          <button className="px-3 py-1 pl-1 border border-[#0073E6] text-[#fff] bg-[#0073E6] font-semibold rounded-full flex" onClick={openIntro}>
            <MdOutlineEdit className="size-6 rounded-full p-1 text-[#fff] cursor-pointer " />
            Edit Profile
          </button>
          <IntroModal isOpen={isIntro} onClose={closeIntro} />
          <button className="px-3 py-1 border border-[#0073E6] text-[#0073E6] font-semibold rounded-full">
            Mentor Profile
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col rounded-t-lg border bg-white p-3 pb-1 mt-2">
        <p className="font-semibold text-lg text-[#5b5b5b]">
          People you may know
        </p>
        <div className="flex flex-col gap-4 mt-4">
          {isLoading && (
            <>
              <RightPanelSkeleton />
              <RightPanelSkeleton />
              <RightPanelSkeleton />
              <RightPanelSkeleton />
            </>
          )}
          {!isLoading &&
            suggestedUsers.map((user, index) => (
              <div
                key={user._id}
                className={`flex flex-col items-start justify-between gap-4 pb-5 ${index !== suggestedUsers.length - 1 ? "border-b" : ""
                  }`}
              >
                <div className="flex gap-3 items-start">
                  <div className="avatar">
                    <Link to={`/profile/${user.username}`}>
                      <div className="w-11">
                        <img
                          src={user.profileImg || "/avatar-placeholder.png"}
                          className="rounded-full"
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="flex flex-col gap-2 items-start">
                    <Link to={`/profile/${user.username}`}>
                      <div className="flex flex-col">
                        <span className="font-semibold w-full leading-[1.4rem]">
                          {user.firstName} {user.lastName}
                        </span>
                        <span className="text-[0.92rem] text-[#575757] w-full leading-[1.21rem] overflow-hidden ">
                          {user.bio}
                        </span>
                      </div>
                    </Link>
                    <button
                      className="flex items-center gap-1 rounded-full border border-black px-3 font-medium text-[#3e3e3e] py-[0.15rem] transition-all duration-300 hover:shadow-[inset_0_0_0_1px_black]"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <FiPlus />
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex items-center gap-2 font-medium text-[#5d5d5d] justify-center py-2 cursor-pointer hover:bg-[#f9f9f9] bg-[#fff] rounded-b-lg border border-t-0">
        Show all
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default ProfilePageSidebar;
