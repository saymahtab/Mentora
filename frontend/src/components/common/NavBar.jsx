import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { BiMessageSquareDetail, BiHomeAlt, BiBriefcaseAlt, BiUser } from 'react-icons/bi';
import { MdOutlineNotifications, MdWorkOutline } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

const NavBar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const [isPopup, setIsPopup] = useState(false);
  const openAbout = () => setIsPopup(true);
  const closeAbout = () => setIsPopup(false);

  const focused = false;

  return (
    <>
      {/* Top NavBar */}
      <div className={`flex justify-between navsm:justify-center items-center px-4 py-2 border-b font-poppins w-full ${focused ? "navsm:gap-[1rem]" : "navsm:gap-[9rem]"} bg-white fixed top-0 z-10`}>
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="logo">
            <Link to="/home">
              <p className="font-bold xs:text-[1.3rem] text-[#172E59] text-lg">Mentora</p>
            </Link>
          </div>

          {/* Search Bar - Hidden on small screens */}
          <div className="flex items-center relative">
            <IoSearch className="absolute left-3 text-[#8e949e] hidden navLarge:flex" />
            <input
              type="search"
              className="border border-[#dcdcdd] px-10 py-1 rounded-md outline-none transition-all focus:border-blue-700 w-[300px] hidden navLarge:block"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Icons and Navigation Links */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Nav Links - Hide on smaller screens */}
          <ul className="hidden md:flex items-center gap-1 navsm1:gap-1 text-xs font-normal text-[#383838] border-r border-gray-300 pr-2 navsm1:text-sm transition-all duration-100">
            <Link to='/'><li className="hover:bg-[#f1f1f2] px-4 py-2 rounded-full cursor-pointer">Home</li></Link>
            <Link to='/mentor'><li className="hover:bg-[#f1f1f2] px-4 py-2 rounded-full cursor-pointer">Mentorship</li></Link>
            <li className="hover:bg-[#f1f1f2] px-4 py-2 rounded-full cursor-pointer">Jobs</li>
            <li className="hover:bg-[#f1f1f2] px-4 py-2 rounded-full cursor-pointer">Internships</li>
            <li className="hover:bg-[#f1f1f2] px-4 py-2 rounded-full cursor-pointer">My Network</li>
          </ul>

          {/* Search Icon - Shown on small screens */}
          <div className="md:hidden flex items-center gap-1">
            {isSearchExpanded ? (
              <div className="relative flex items-center">
                <IoSearch className="absolute left-3 text-[#8e949e]" />
                <input
                  type="search"
                  className={`border-7 px-10 py-1 rounded-md outline-none focus:w-[20rem] ${w == '20y'} transition-all focus:border-blue-700  w-[150px] md:hidden`}
                  placeholder="Search"
                />
              </div>
            ) : (
              <IoSearch
                className="text-[#434343] text-lg cursor-pointer"
                onClick={() => setIsSearchExpanded(true)}
              />
            )}
          </div>

          {/* Message and Notification Icons */}
          <div className="flex items-center xs:gap-5 gap-3 ml-1">
            <Link>
              <BiMessageSquareDetail className="text-[#575656] text-xl" />
            </Link>
            <Link>
              <MdOutlineNotifications className="text-[#575656] text-2xl" />
            </Link>
            <Link onClick={openAbout} className="flex w-6 sm:w-7">
              <img src="/user.png" alt="avatar" className="rounded-full w-full" />
            </Link>
            {isPopup && (
              <div className="absolute right-4 mt-36 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <Link to="/profile/saymahtab"
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={closeAbout}
                  >
                    Profile
                  </Link>
                  <Link to={'auth/login'}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={closeAbout}
                  >
                   <FiLogOut className="mr-2" /> Log Out
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom NavBar - Shown on small screens */}
      <div className="fixed bottom-0 w-full bg-white shadow-md border-t border-gray-300 md:hidden z-10">
        <ul className="flex justify-around items-center py-2 text-xs text-[#383838] xs:text-sm">
          <li className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
            <BiHomeAlt className="text-lg" />
            <span>Home</span>
          </li>
          <li className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
            <BiUser className="text-lg" />
            <span>Mentors</span>
          </li>
          <li className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
            <BiBriefcaseAlt className="text-lg" />
            <span>Jobs</span>
          </li>
          <li className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
            <MdWorkOutline className="text-lg" />
            <span>Internships</span>
          </li>
          <li className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
            <BiUser className="text-lg" />
            <span>Practice</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
