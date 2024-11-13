import PreviousMeetings from "./previousMeeting"; 

const PreviousSessions = ({ meeting }) => {
  return (
    <div className="mx-auto bg-white p-2 rounded-lg   max-w-3xl">

      {/* Session List Container */}
      <div className="mt-1  border-gray-300 rounded-lg overflow-hidden bg-white ">
      <h3 className="text-2xl font-bold text-gray-800 my-2 text-center">Previous Sessions</h3>
        {/* List of Previous Meetings */}
        <ul className="list-none p-0">
          {meeting.length > 0 ? (
            meeting.map((meet) => (
              <li key={meet.date} >
                <PreviousMeetings previousSlots={meet} />
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No previous sessions available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PreviousSessions;
