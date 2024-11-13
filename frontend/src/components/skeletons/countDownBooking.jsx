import React, { useEffect, useState } from "react";

// Helper function to convert 12-hour time to 24-hour format
const convertTo24HourFormat = (time) => {
  const [hour, minute, period] = time.split(/[:\s]/);
  let hours = parseInt(hour, 10);
  const minutes = parseInt(minute, 10);

  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const CountdownTimer = ({ endDate, endTime }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endDate, endTime));

  function calculateTimeLeft(endDate, endTime) {
    const endTime24 = convertTo24HourFormat(endTime);
    const endDateTime = new Date(`${endDate}T${endTime24}`);
    const difference = endDateTime - new Date();
    let timeLeft = {};

    console.log("End DateTime:", endDateTime); // For debugging
    console.log("Difference in ms:", difference); // For debugging

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }; // When time is up
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

  return (
    <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg mt-4">
      {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <div className="text-center">
          <h4 className="text-lg font-semibold text-blue-700">Meeting Countdown</h4>
          <div className="flex space-x-2 text-2xl font-bold text-blue-800 mt-2 ml-10">
            <span>{String(timeLeft.days).padStart(2, "0")}</span>:
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>
          <p className="text-sm text-blue-600 mt-1">Time remaining to complete booking</p>
        </div>
      ) : (
        <div className="text-center">
          <h4 className="text-lg font-semibold text-red-700">Time Expired</h4>
          <p className="text-sm text-red-600">Please Select Another Date For the booking.</p>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
