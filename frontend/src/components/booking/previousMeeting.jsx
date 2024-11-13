const PreviousMeetings = ({ previousSlots }) => {

  // back ground color :- bg-gradient-to-r from-blue-50 to-indigo-100
  return (
    <div className=" mx-2 my-2 bg-gray-50 rounded-lg shadow-lg p-6">  
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Previous Session</h3>

      {/* Session Info */}
      <div className="flex flex-col space-y-3">
        <p className="text-sm text-gray-700">
          <span className="font-medium text-indigo-600">Time:</span> <span className="font-semibold">{previousSlots.time}</span>
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium text-indigo-600">Date:</span> <span className="font-semibold">{previousSlots.date}</span>
        </p>
      </div>
    </div>
  );
};

export default PreviousMeetings;
