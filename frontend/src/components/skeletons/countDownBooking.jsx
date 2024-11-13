import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const convertTo24HourFormat = (time) => {
  const [hour, minute, period] = time.split(/[:\s]/);
  let hours = parseInt(hour, 10);
  const minutes = parseInt(minute, 10);

  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const CountdownTimer = ({ endDate, endTime, disappearDuration = 1440, disableDuration = 5 }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endDate, endTime));
  const navigate = useNavigate();
  const [isRemain, setIsRemain] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  const generateId = () => Math.random().toString(36).substr(2, 8).toUpperCase();

  function calculateTimeLeft(endDate, endTime) {
    const endTime24 = convertTo24HourFormat(endTime);
    const endDateTime = new Date(`${endDate}T${endTime24}`);
    const difference = endDateTime - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(endDate, endTime);
      setTimeLeft(newTimeLeft);
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate, endTime]);

  useEffect(() => {
    let timeRemaining = disableDuration * 60; // 1 minute

    const disableCountdown = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
      } else {
        clearInterval(disableCountdown);
        setIsDisable(true);
      }
    }, 1000);

    return () => clearInterval(disableCountdown);
  }, [disableDuration]);

  useEffect(() => {
    let timeRemaining = disappearDuration * 60; // 24 hours in minutes

    const disappearCountdown = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        console.log(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
      } else {
        clearInterval(disappearCountdown);
        setIsRemain(true);
      }
    }, 1000);

    return () => clearInterval(disappearCountdown);
  }, [disappearDuration]);

  return (
    <div
      className={`flex flex-col items-center bg-gray-50 p-4 mx-2 rounded-lg mt-2 ${isRemain ? 'hidden' : ''
        }`}
    >
      {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <div className="text-center">
          <h4 className="text-lg font-semibold text-blue-700">Meeting Countdown</h4>
          <div className="flex space-x-2 text-2xl font-bold text-blue-800 mt-2 ">
            <span>{String(timeLeft.days).padStart(2, "0")}</span>:
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>
          <p className="text-sm text-blue-600 mt-1">Time remaining to Meeting</p>
        </div>
      ) : (
        <div className="text-center">
          <h4 className="text-lg font-semibold text-red-700">Join Meeting</h4>
          <div className="mt-4">
            <span className="text-xl font-semibold text-blue-700">Meeting ID: {generateId()}</span>
          </div>

          <button
            onClick={() => navigate("/lobby")}
            className={`mt-4 px-6 py-2 ${isDisable ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-600'
              } text-white rounded-lg focus:outline-none`}
            disabled={isDisable}
          >
            {isDisable ? "Time Expired" : "Join Meeting"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
