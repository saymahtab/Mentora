import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import MentorSlotContext from "../context/mentorBookingContext";
import CountdownTimer from "../skeletons/countDownBooking";
import { USER } from "../../../utils/db/dummy";
import { FaStar, FaRegStar } from 'react-icons/fa';
import SessionStatsProgress from "./sessionStats";

const MentorBooking = ({ mentorid }) => {
  const navigate = useNavigate();
  const { mentorSlots, bookSlot, isSlotAvailable, notification } = useContext(MentorSlotContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const user = USER[5];

  const onDateChange = (date) => {
    setSelectedDate(date);
    setAlertMessage("");
    setSelectedSlot(null);
  };

  const handleBooking = (slot) => {
    if (slot.isBooked) {
      setAlertMessage("This slot is already booked. Please choose another.");
    } else {
      bookSlot(slot.id, "student123");
      setAlertMessage("");
      setSelectedSlot(slot);
    }
  };

  //Generate Rating to the mentor
  const generateRatin = ({ rating }) => {
    const maxRating = 5;
    const filledStars = Math.round(rating);
    const halfStar = rating % 1 !== 0 ? true : false;
    const totalStars = [];

    for (let i = 0; i < filledStars; i++) {
      totalStars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    if (halfStar) {
      totalStars.push(<FaRegStar key={filledStars} className="text-yellow-500" />);
    }
    for (let i = totalStars.length; i < maxRating; i++) {
      totalStars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
    return totalStars;
  }
  
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-6 py-6   -z bg-white shadow-lg rounded-lg lg:space-y-0 lg:space-x-6 mt-10">
      {/* Mentor Profile Section */}
      <div className="lg:w-2/3 hover:bg-gray-50 transition-all rounded-t-2xl">
        <div className="bg-purple-100   rounded-t-2xl ">
          <img src={"https://tinyurl.com/25amx68m"} alt="" className="rounded-t-2xl h-28 w-full" />
        </div>

        <div className="bg-purple-100 p-4 rounded-b-lg mb-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate('/mentor/collection')}
              className="text-gray-500 mb-1 flex items-center"
            >
              <span className="mr-2 text-3xl font-bold text-black">&larr;</span>
            </button>

            <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase inline-block">
              1:1 Call
            </span>
          </div>
          <h2 className="text-2xl font-semibold mt-2">Quick Call | Mentorship on any topic of your choice</h2>
          <p className="text-gray-500 mt-1 text-sm"><i className="far fa-clock"></i> 15 Min</p>
        </div>


        <div className="mt-4 p-4">
          <h3 className="text-lg font-semibold">About Service</h3>
          <p className="text-gray-700 mt-1">Guidance on any topic you have queries on</p>

          <h3 className="text-lg font-semibold mt-4">Skills</h3>
          <p className="text-gray-700">{user.skills}</p>
        </div>
        <hr className="mt-2" />
        <div className="flex items-center mt-2 hover:bg-gray-50 p-4 rounded-lg transition-all">
          <img src={user.profileImg} alt="Mentor" className="w-20 h-20 rounded-full border-4 border-gray-200" />
          <div className="ml-4">
            <h4 className="text-xl flex font-semibold text-gray-800">
              {user.firstName + " " + user.lastName} <span className=" text-xs mt-3 ml-2  text-yellow-500 flex">{generateRatin(5)}</span>
            </h4>
            <p><span className="text-xs text-blue-800">{user.connections}+ connections</span></p>
            {/* <p className="text-gray-600 text-sm">Strategy Manager @CEO Office | Want to Join the Top 1% league? | Ex-eBay & L&T</p> */}
            <p className="text-gray-600 text-sm">@{user.professional['workExperience']} | {user.professional['currentSector']} | {user.professional['designation']} |{user.professional['lookingForCareerChange']}</p>
            <p className="text-sm text-gray-600">Experience..</p>

          </div>
        </div>

        <div className="flex space-x-4 mt-4">
          <button className="text-pink-500 text-xl hover:text-pink-600 transition-colors">
            <i className="fab fa-instagram"></i>
          </button>
          <button className="text-blue-600 text-xl hover:text-blue-700 transition-colors">
            <i className="fab fa-linkedin"></i>
          </button>
          <button className="text-gray-500 text-xl hover:text-gray-700 transition-colors">
            <i className="fas fa-share"></i>
          </button>
        </div>
      </div>

      {/* Booking Section */}
      <div className="lg:w-1/3 p-4 bg-gray-50 rounded-lg mt-6 lg:mt-0">
        <div className="flex items-center justify-center mb-6">
          <div className="w-1/3 h-2 bg-gray-200 rounded-lg">
            <div className="h-2 bg-purple-600 rounded-lg" style={{ width: "50%" }}></div>
          </div>
          <p className="ml-4 text-gray-500">Step 1 of 2</p>
        </div>

        <h3 className="font-semibold text-center mb-2">Select date and time for meeting.</h3>

        {/* Calendar */}
        <div className="">
          <Calendar
            onChange={onDateChange}
            value={selectedDate}
            tileClassName={({ date }) => {
              const currentDay = new Date().getDate();
              const selectedDay = date.getDate();

              let className = "flex items-center justify-center m-2";
              if (date.getDate() === currentDay) {
                className = `${className} bg-blue-500 text-white rounded-full `;
              }
              if (selectedDay === currentDay) {
                className = `${className} border-4 border-blue-300`;
              }
              return className;
            }}
            className="my-custom-calendar border border-gray-200 rounded-lg p-2 shadow-md w-full font-san"
          />
        </div>

        {/* Available Slots */}
        <div className="text-center mt-4">
          <h3 className="font-semibold mb-2">Now select time</h3>
          <ul className="space-y-4">
            {mentorSlots
              .filter((slot) => dayjs(slot.date).isSame(selectedDate, "day"))
              .map((slot) => (
                <li key={slot.id} className="flex flex-col items-center">
                  <button
                    onClick={() => handleBooking(slot)}
                    className={`flex items-center justify-center w-auto px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300
                  ${slot.isBooked || selectedSlot ? "bg-gray-500 cursor-not-allowed opacity-70" : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-xl transform hover:scale-105"}
                  border-2 border-transparent hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                    disabled={slot.isBooked || selectedSlot}
                  >
                    <div className="flex items-center space-x-2">
                      {!slot.isBooked && !selectedSlot && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      <span
                        className={`text-sm ${slot.isBooked ? 'text-white cursor-not-allowed' : 'text-white cursor-pointer'}`}
                        onClick={() => {
                          if (!slot.isBooked) {
                            navigate(`/session`, {
                              state: {
                                endDate: slot.date,
                                endTime: slot.time,
                                slots: slot
                              }
                            });
                          }
                        }}
                      >
                        {slot.isBooked ? `Selected ${slot.time}` : `Book Now ${slot.time}`}
                      </span>

                    </div>
                  </button>

                  {/* Countdown Timer */}
                  {/* {selectedSlot && selectedSlot.id === slot.id && (
                    <div className="mt-4 p-4 bg-green-100 rounded-lg shadow-md text-center">
                      <SessionStatsProgress endDate={slot.date} endTime={slot.time} />
                    </div>
                  )} */}
                </li>
              ))}
          </ul>
        </div>

        {/* Alerts */}
        {alertMessage && (
          <div className="bg-red-100 text-red-800 px-6 py-3 rounded-lg mt-4 animate-fade-in">
            {alertMessage}
          </div>
        )}

        {/* Countdown Notification */}
        {notification && (
          <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg mt-4 animate-fade-in">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorBooking;
