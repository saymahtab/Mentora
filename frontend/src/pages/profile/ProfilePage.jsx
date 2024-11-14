import React ,{useState} from "react";
import { MdOutlineEdit } from "react-icons/md";
import ProfilePageSidebar from "./ProfilePageSidebar";
import ProfilePageMain from "./ProfilePageMain";
import BackgroundSelector from "../../components/skeletons/backgroundSelector";

const ProfilePage = () => {

  return (
    <div className="flex-col mt-2 relative top-[3.2rem]">
      <BackgroundSelector/>
      <div className="flex max-w-[73.6rem] mx-auto mt-2 gap-2">
        <ProfilePageSidebar />
        <ProfilePageMain />
      </div>
    </div>
  );
};

export default ProfilePage;
