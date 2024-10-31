import { Link } from "react-router-dom";
import { USER } from "../../../utils/db/dummy";
import { AiOutlineEye } from "react-icons/ai";
import { LuAward } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import { BsStars } from "react-icons/bs";

const Sidebar = () => {

    const postOwner = USER[6];


    return (
        <div className="flex-[2_2_0] mr-2 rounded-xl relative hidden md:block">
            <div className="flex flex-1 flex-col rounded-lg border bg-white p-5 ">
                <div>
                    <LuAward className="border absolute right-2 top-2 rounded-md cursor-pointer size-6 p-[0.2rem]"/>
                </div>
                <div className="avatar">
                    <Link
                        to={`/profile/${postOwner.username}`}
                        className="flex w-20 ml-2"
                    >
                        <img
                        src={postOwner.profileImg || "/avatar-placeholder.png"}
                        className="cursor-pointer rounded-full"
                        />
                    </Link>
                </div>
                <div className="flex flex-col gap-2 items-start mt-2">
                    <p className="text-xl font-[550] text-[#494949] mr-1 leading-3 mt-2">{postOwner.firstName} {postOwner.lastName}</p>
                    <p className="text-sm text-[#7b7a7a] overflow-hidden">{postOwner.bio}</p>
                </div>
                <div className="mt-4 flex flex-col items-start">
                    <div className="flex items-start gap-1">
                        <IoLocationSharp className="text-[#5d5c5c] size-[1.2rem]" />
                        <p className="text-sm text-[#333333] leading-4">{postOwner.location}</p>
                    </div>
                </div>

            </div>
            <div className="flex flex-col sticky items-start top-[3.7rem] rounded-lg border bg-white pt-4 px-5 mt-2">
                <p className="font-medium text-[#4f4f4f] mb-1">Find Your Perfect Mentor!</p>
                <p className="text-sm text-[#646464] mb-1">Our AI connects you with mentors tailored to your skills and growth goals. Try Now</p>
                <button className="text-start flex gap-1 items-center font-medium text-md text-[#FD8B51] py-1 pr-4 mb-3 rounded-full">
                    <BsStars className="size-4"/>
                    Mentor Match
                </button>
            </div>
            <div className="flex flex-1 flex-col sticky top-[13.8rem] rounded-lg bg-white px-6 border gap-2 py-4 mt-2">
                <div className="flex items-center gap-3 text-[#5f5f5f] cursor-pointer">
                    <FaCalendarAlt className="text-[#545353]"/>
                    <p className="text-sm font-medium">My Sessions</p>
                </div>  
                <div className="flex items-center gap-3 mt-3 text-[#5f5f5f] cursor-pointer">
                    <BsBookmarkFill className="text-[#545353]"/>
                    <p className="text-sm font-medium">Saved Items</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
