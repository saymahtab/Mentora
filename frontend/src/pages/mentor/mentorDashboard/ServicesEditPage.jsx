import { FaPlus } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineTimelapse } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { MdOutlineTimer } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LiaRupeeSignSolid } from "react-icons/lia";

const ServicesEditPage = ({ mentor }) => {
  return (
    <div className="flex flex-col flex-1 bg-white ml-3 rounded-lg border px-5 py-3">
      <div className="flex items-center justify-between border-b pb-5">
        <p className="text-2xl font-medium text-zinc-700">Services</p>
        <button className="flex items-center gap-2 font-medium px-4 py-2 bg-blue-100 text-blue-600 rounded-full">
          <FaPlus />
          Add New Service
        </button>
      </div>
      <div className="flex flex-col mt-4">
        <p className="text-md text-zinc-700">Your Services</p>

        <div className="flex items-center mt-5">
          <div className="flex flex-col gap-2 border py-6 px-5 w-52 rounded-l-xl size-fit">
            <p className="font-medium text-zinc-700 text-sm">Total Sessions</p>
            <div className="flex items-center gap-3 mt-4 font-medium text-xl">
              <IoCalendarOutline className="text-[2.6rem] bg-[#EBE8FD] p-2 rounded-xl text-purple-700" />
              {mentor.totalSessions}
            </div>
          </div>
          <div className="flex flex-col gap-2 border py-6 px-5 w-52 size-fit">
            <p className="font-medium text-zinc-700 text-sm">Total Duration</p>
            <div className="flex items-center gap-3 mt-4 font-medium text-xl">
              <MdOutlineTimelapse className="text-[2.6rem] bg-[#F2F8FE] p-2 rounded-xl text-[#0073E6]" />
              {mentor.totalDuration} min
            </div>
          </div>
          <div className="flex flex-col gap-2 border py-6 px-5 w-52 size-fit">
            <p className="font-medium text-zinc-700 text-sm">Total Reviews</p>
            <div className="flex items-center gap-3 mt-4 font-medium text-xl">
              <MdRateReview className="text-[2.6rem] bg-[#FCE8EF] p-2 rounded-xl text-[#E9407A]" />
              {mentor.reviews.length}
            </div>
          </div>
          <div className="flex flex-col gap-2 border py-6 px-5 w-52 rounded-r-xl size-fit">
            <p className="font-medium text-zinc-700 text-sm">Avg Rating</p>
            <div className="flex items-center gap-3 mt-4 font-medium text-xl">
              <BsStarFill className="text-[2.6rem] bg-[#FFF1CC] p-2 rounded-xl text-[#FFBA00]" />
              {mentor.avgRating}
            </div>
          </div>
        </div>

        <div>
          {mentor.services.map((service, index) => (
            <div className="flex items-center justify-between border bg-white shadow-md rounded-xl p-3 mt-5">
              <div className="flex items-center gap-3">
                <HiMiniVideoCamera className="text-[2.4rem] p-2 bg-gray-100 rounded-lg" />
                <div className="text-zinc-600 flex flex-col">
                  <h2 className="text-zinc-800">{service.name}</h2>
                  <p className="text-sm">
                    {service.description}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-zinc-600">
                    <MdOutlineTimer />
                    {service.duration} duration
                    <span className="flex items-center ml-3"><LiaRupeeSignSolid />{service.price} Price</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineEdit className="text-4xl cursor-pointer p-2 hover:bg-gray-50 rounded-full" />
                <HiOutlineDotsVertical className="text-4xl cursor-pointer p-2 hover:bg-gray-50 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesEditPage;
