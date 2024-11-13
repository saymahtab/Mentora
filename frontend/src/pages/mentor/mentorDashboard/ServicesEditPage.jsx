import { FaPlus } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";

const ServicesEditPage = ({mentor}) => {
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

        <div className="flex flex-col gap-2 border py-6 px-5 w-60 rounded-l-xl mt-5 size-fit">
          <p className="font-medium text-zinc-700 text-sm">Total Sessions</p>
            <div className="flex items-center gap-3 mt-4 font-medium text-xl">
              <IoCalendarOutline  className="text-[2.6rem] bg-[#EBE8FD] p-2 rounded-xl text-purple-700"/>
              {mentor.totalSessions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesEditPage
