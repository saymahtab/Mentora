import { MdSpaceDashboard } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { MdOutlineRateReview } from "react-icons/md";

const DashboardNav = ({ mentor, setActivePage, activePage }) => {
  const navItems = [
    { label: "Dashboard", icon: MdSpaceDashboard, page: "dashboard" },
    { label: "Profile", icon: IoPersonCircleSharp, page: "profile" },
    { label: "Services", icon: MdMedicalServices, page: "services" },
    { label: "Availability", icon: LuTimerReset, page: "availability" },
    { label: "Bookings", icon: FaCalendarAlt, page: "bookings" },
    { label: "Payments", icon: HiOutlineCurrencyRupee, page: "payments" },
    { label: "Reviews", icon: MdOutlineRateReview, page: "reviews" },
  ];

  return (
    <div className="flex flex-col items-start w-full max-w-[18rem] max-h-screen bg-white pt-6 px-4 pb-5 border rounded-lg">
      <div className="flex flex-col items-center w-full gap-2">
        <img
          src={mentor.profileImg || "/avatar-placeholder.png"}
          className="w-24 h-24 rounded-full border-gray-200 border-2"
          alt="Profile"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-medium text-zinc-800">
            {mentor.firstName} {mentor.lastName}
          </h2>
          <p className="text-sm text-zinc-600">@yashpatel</p>
        </div>
        <div className="flex items-center gap-5 mt-2 border-b pb-3">
          <img src="/social/instagram.png" className="h-6 w-6 cursor-pointer" alt="Instagram" />
          <img src="/social/twitter.png" className="h-6 w-6 cursor-pointer" alt="Twitter" />
          <img src="/social/facebook.png" className="h-6 w-6 cursor-pointer" alt="Facebook" />
          <img src="/social/linkedin.png" className="h-6 w-6 cursor-pointer" alt="LinkedIn" />
          <img src="/social/gmail.png" className="h-6 w-6 cursor-pointer" alt="Gmail" />
        </div>
      </div>

      <ul className="flex flex-col gap-1 mt-3 px-1 text-zinc-800 w-full">
        {navItems.map((item) => (
          <li
            key={item.page}
            onClick={() => setActivePage(item.page)}
            className={`flex items-center gap-3 h-12 text-lg p-2 rounded-md cursor-pointer hover:bg-zinc-100 ${
              activePage === item.page ? "bg-zinc-100" : ""
            }`}
          >
            <item.icon className="text-zinc-600 text-xl" />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardNav;
