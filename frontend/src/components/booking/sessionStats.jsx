import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MentorPagePanel from '../../pages/mentor/mentorPage/MentorPagePanel';
import MentorPageSidebar from '../../pages/mentor/mentorPage/MentorPageSidebar';
import CountdownTimer from '../skeletons/countDownBooking';
import PreviousSessions from './previousSession';

const SessionStatsProgress = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //storing previous meetings;
  const [meeting, setMeetings] = useState([]);

  // Retrieve endDate and endTime from the location state
  const { endDate, endTime } = location.state || {};
  const { slots } = location.state || [];
  console.log("slot", slots);
  useEffect(() => {
    const isSlotPresent = meeting.some((meet) => meet.date === slots.date && meet.time === slots.time);

    if (!isSlotPresent && slots) {
      setMeetings((prevMeetings) => [...prevMeetings, slots]);
    }
  }, [slots, meeting]);




  return (
    <>
      <div className="flex max-w-[74rem] mb-4 mx-auto mt-2 relative top-[3.2rem]">
        <MentorPageSidebar />
        <div className="flex-[4_4_0] min-h-screen ml-2 rounded-lg p-5 mb-5 border bg-white">
          <div className='flex '>
            <button
              onClick={() => navigate('/booking')}
              className="text-gray-500 mb-1 flex items-center bg-gray-200 hover:bg-gray-300 pl-2 rounded-lg pb-1"
            >
              <span className="mr-2 text-3xl font-bold text-black">&larr;</span>
            </button>
            <h1 className="text-xl mt-1 ml-3 font-semibold relative 
               before:content-[''] before:absolute before:-bottom-0.5 
               before:left-0 before:w-0 before:h-[2px] 
               before:bg-gradient-to-r from-blue-500 to-purple-500 
               before:transition-all before:duration-500 
               hover:before:w-full">
              Sessions Stats
            </h1>
          </div>
          <hr className='mt-2' />
          <div className="flex font-semibold justify-between w-2/3 mt-2">
            <button className="relative before:content-[''] before:absolute before:-bottom-0.5 
                  before:left-0 before:w-0 before:h-[2px] 
                  before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 
                  before:transition-all before:duration-500 
                  hover:before:w-full hover:before:left-0">
              1:1 Session
            </button>

            <button className="relative before:content-[''] before:absolute before:-bottom-0.5 
                  before:left-0 before:w-0 before:h-[2px] 
                  before:bg-gradient-to-r from-blue-500 to-purple-500 
                  before:transition-all before:duration-500 
                  hover:before:w-full"
            // onClick={()=>navigate("/previous")}
            >
              Previos Session
            </button>
            <button className="relative before:content-[''] before:absolute before:-bottom-0.5 
                  before:left-0 before:w-0 before:h-[2px] 
                  before:bg-gradient-to-r from-blue-500 to-purple-500 
                  before:transition-all before:duration-500 
                  hover:before:w-full">
              Resources
            </button>
          </div>
          <div
            className="h-full border rounded-lg bg-center bg-no-repeat bg-cover mx-auto mt-3 overflow-hidden"
            style={{ backgroundImage: "url('/sessionbackground.png')", backgroundSize: "50%", height: "calc(100vh - 100px)" }}
          >
            <div className="overflow-y-auto max-h-[calc(100vh-50px)] py-2 mt-2">
              <CountdownTimer endDate={endDate} endTime={endTime} />
              <hr className='mt-3' />
              <PreviousSessions meeting={meeting} />
            </div>
          </div>

        </div>
        <MentorPagePanel />
      </div>
    </>
  );
};

export default SessionStatsProgress;
