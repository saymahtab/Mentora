import { FaCalendarAlt, FaRupeeSign, FaBookReader } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const DashboardPage = ({ mentor }) => {
  return (
    <div className="flex flex-col flex-1 bg-white ml-3 rounded-lg border p-5">
      <div className="flex gap-2">
        <img src="/hand.png" alt="Hand Icon" className="h-10 mt-1" />
        <div className="flex flex-col">
          <p className="text-zinc-600">
            Hi, {mentor.firstName} {mentor.lastName}
          </p>
          <p className="text-zinc-700 font-normal text-2xl">
            Welcome to Your Dashboard
          </p>
        </div>
      </div>

      <div className="flex flex-col text-zinc-700 border rounded-2xl mt-8">
        <h2 className="text-xl font-semibold border-b px-4 py-4">
          Next Step for you
        </h2>
        <div className="flex items-center gap-2 w-full mt-6">
          <div className="mt-4 cursor-pointer m-4 hover:scale-105 transition duration-300 h-[10rem] w-[15rem] border rounded-2xl flex flex-col text-yellow-700 items-center justify-center text-md gap-2 font-semibold text-center">
            <FaCalendarAlt className="text-6xl p-3 bg-[#FCF596] rounded-2xl text-yellow-700" />
            Edit Availability
          </div>
          <div className="mt-4 cursor-pointer m-4 hover:scale-105 transition duration-300 h-[10rem] w-[15rem] border rounded-2xl flex flex-col text-yellow-700 items-center justify-center text-md gap-2 font-semibold text-center">
            <FaRupeeSign className="text-6xl p-3 bg-[#FCF596] rounded-2xl text-yellow-700" />
            Edit Price
          </div>
          <div className="mt-4 cursor-pointer m-4 hover:scale-105 transition duration-300 h-[10rem] w-[15rem] border rounded-2xl flex flex-col text-yellow-700 items-center justify-center text-md gap-2 font-semibold text-center">
            <FaBookReader className="text-6xl p-3 bg-[#FCF596] rounded-2xl text-yellow-700" />
            Edit Education
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 py-4 mt-4">
        <div className="px-3 py-3 w-[17rem] bg-gray-50 rounded-2xl mt-4 size-fit">
          <span className="bg-[#FCE8EF] px-3 text-xs py-1 rounded-lg text-[#6E1434] font-medium">
            📞 1:1 Call
          </span>
          <div className="flex items-end justify-between p-1 mt-2">
            <div className="flex flex-col items-start">
              <p className="text-lg font-medium text-zinc-600">One Call</p>
              <p className="text-zinc-600 text-sm">Service Detail</p>
              <div className="flex items-center gap-2">
                <p className="text-zinc-700 border-r pr-2 mt-1">30 min</p>
                <p className="mt-2 font-medium text-sm text-zinc-500 line-through">
                  $20
                </p>
                <p className="mt-2 font-medium text-xl text-zinc-700">$10</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-blue-700 font-medium cursor-pointer">
              <MdEdit />
              Edit
            </div>
          </div>
        </div>
        <div className="px-3 py-3 w-[17rem] bg-gray-50 rounded-2xl mt-4 size-fit">
          <span className="bg-[#FCE8EF] px-3 text-xs py-1 rounded-lg text-[#6E1434] font-medium">
            📞 1:1 Call
          </span>
          <div className="flex items-end justify-between p-1 mt-2">
            <div className="flex flex-col items-start">
              <p className="text-lg font-medium text-zinc-600">One Call</p>
              <p className="text-zinc-600 text-sm">Service Detail</p>
              <div className="flex items-center gap-2">
                <p className="text-zinc-700 border-r pr-2 mt-1">30 min</p>
                <p className="mt-2 font-medium text-sm text-zinc-500 line-through">
                  $20
                </p>
                <p className="mt-2 font-medium text-xl text-zinc-700">$10</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-blue-700 font-medium cursor-pointer">
              <MdEdit />
              Edit
            </div>
          </div>
        </div>
        <div className="px-3 py-3 w-[17rem] bg-gray-50 rounded-2xl mt-4 size-fit">
          <span className="bg-[#FCE8EF] px-3 text-xs py-1 rounded-lg text-[#6E1434] font-medium">
            📞 1:1 Call
          </span>
          <div className="flex items-end justify-between p-1 mt-2">
            <div className="flex flex-col items-start">
              <p className="text-lg font-medium text-zinc-600">One Call</p>
              <p className="text-zinc-600 text-sm">Service Detail</p>
              <div className="flex items-center gap-2">
                <p className="text-zinc-700 border-r pr-2 mt-1">30 min</p>
                <p className="mt-2 font-medium text-sm text-zinc-500 line-through">
                  $20
                </p>
                <p className="mt-2 font-medium text-xl text-zinc-700">$10</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-blue-700 font-medium cursor-pointer">
              <MdEdit />
              Edit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage
