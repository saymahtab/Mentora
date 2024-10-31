import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import ProfilePageSidebar from "./ProfilePageSidebar";
import ProfilePageMain from "./ProfilePageMain";

const ProfilePage = () => {

  return (
    <div className="flex-col mt-2 relative top-[3.2rem]">
      <div className="flex mx-auto w-[73.5rem] relative">
        <MdOutlineEdit className="absolute right-3 top-3 size-7 bg-slate-200 rounded-full p-1 text-[#0073E6] cursor-pointer" />
        <img src="/cover1.png" className="rounded-xl w-full" />
      </div>
      <div className="flex max-w-[73.6rem] mx-auto mt-2 gap-2">
        <ProfilePageSidebar />
        <ProfilePageMain />
      </div>
    </div>
  );
};

export default ProfilePage;
