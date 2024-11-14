import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const AvailabilityEditPage = () => {
  const [availability, setAvailability] = useState({
    Monday: { active: true, start: '09:00 AM', end: '06:00 PM' },
    Tuesday: { active: false, start: '09:00 AM', end: '06:00 PM' },
    Wednesday: { active: true, start: '09:00 AM', end: '06:00 PM' },
    Thursday: { active: false, start: '09:00 AM', end: '06:00 PM' },
    Friday: { active: false, start: '09:00 AM', end: '06:00 PM' },
  });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleToggleDay = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], active: !prev[day].active },
    }));
  };

  const handleTimeChange = (day, timeType, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], [timeType]: value },
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex p-8 space-x-8">
      {/* Availability Section */}
      <div className="w-2/3">
        <h2 className="text-xl font-semibold mb-4">My Availability</h2>
        <div className="flex items-center mb-4 space-x-4">
          <label>Switch timezone:</label>
          <select className="p-2 border rounded-md">
            <option>Asia/Kolkata IST (+05:30)</option>
            {/* Add more timezones if needed */}
          </select>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
        </div>

        {Object.keys(availability).map((day) => (
          <div key={day} className="flex items-center justify-between mb-4 p-4 border rounded-lg bg-white shadow-sm">
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={availability[day].active}
                onChange={() => handleToggleDay(day)}
                className="h-5 w-5"
              />
              <span className="text-lg font-medium">{day}</span>
            </div>

            {availability[day].active && (
              <div className="flex items-center space-x-4">
                <div>
                  <label className="text-sm">Start time</label>
                  <select
                    value={availability[day].start}
                    onChange={(e) => handleTimeChange(day, 'start', e.target.value)}
                    className="p-2 border rounded-md w-24"
                  >
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    {/* Add more time options */}
                  </select>
                </div>

                <div>
                  <label className="text-sm">End time</label>
                  <select
                    value={availability[day].end}
                    onChange={(e) => handleTimeChange(day, 'end', e.target.value)}
                    className="p-2 border rounded-md w-24"
                  >
                    <option>06:00 PM</option>
                    <option>07:00 PM</option>
                    {/* Add more time options */}
                  </select>
                </div>

                <button className="text-blue-500 font-medium">+</button>
                <button className="text-blue-500 font-medium">Apply to all</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Calendar Section */}
      <div className="w-1/3">
        <h2 className="text-xl font-semibold mb-4">My Calendar</h2>
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          {/* React Calendar Component */}
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={({ date, view }) =>
              view === 'month' && date.getDate() === 14 ? 'bg-blue-500 text-white rounded-full' : 'hover:bg-gray-200'
            }
            className="mb-4"
          />

          <div className="text-sm">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span>Whole day unavailable</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span>Custom time</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm mb-1">Schedule for the day</div>
            <div className="mb-2 text-lg font-medium">09:00 AM IST - 06:00 PM IST</div>
            <button className="w-full py-2 bg-blue-500 text-white rounded-md font-medium">Schedule Override</button>
            <div className="flex items-center mt-4">
              <span className="text-sm">Whole day unavailable</span>
              <input type="checkbox" className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityEditPage;
