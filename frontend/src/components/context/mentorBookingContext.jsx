import React ,{createContext , useState , useEffect} from "react";
import dayjs from "dayjs";

const MentorSlotContext = createContext();

export const MentorSlotProvider=({children}) =>{
    const [mentorSlots, setMentorSlots] = useState([
        { id: 1, date: "2024-11-12", time: "10:00 AM", isBooked: false, bookedBy: null },
        { id: 2, date: "2024-11-12", time: "11:00 AM", isBooked: false, bookedBy: null },
        { id: 5, date: "2024-11-12", time: "12:00 PM", isBooked: false, bookedBy: null },
        { id: 6, date: "2024-11-12", time: "01:00 PM", isBooked: false, bookedBy: null },
        { id: 7, date: "2024-11-12", time: "02:00 PM", isBooked: false, bookedBy: null },
      
        { id: 3, date: "2024-11-11", time: "10:00 AM", isBooked: false, bookedBy: null },
        { id: 4, date: "2024-11-11", time: "11:00 AM", isBooked: false, bookedBy: null },
        { id: 8, date: "2024-11-11", time: "12:00 PM", isBooked: false, bookedBy: null },
        { id: 9, date: "2024-11-11", time: "01:00 PM", isBooked: false, bookedBy: null },
        { id: 10, date: "2024-11-11", time: "02:00 PM", isBooked: false, bookedBy: null },
      ]);
      

    const [upcomingMeeting, setUpcomingMeeting] = useState(null);
    const [notification, setNotification] = useState("");

    //function to book a slot
    const bookSlot=(slotId , studentId) =>{
        const updatedSlots = mentorSlots.map((slot) =>
            slot.id === slotId
              ? { ...slot, isBooked: true, bookedBy: studentId }
              : slot
          );
          setMentorSlots(updatedSlots);
      
          const bookedSlot = updatedSlots.find((slot) => slot.id === slotId);
          if (bookedSlot) {
            const fullDateTime = dayjs(`${bookedSlot.date} ${bookedSlot.time}`);
            setUpcomingMeeting({ slot: bookedSlot, startTime: fullDateTime });
          }
    };

    //Effect for countDown and Notifications
    useEffect(()=>{
        if(upcomingMeeting){
            const timer = setInterval(()=>{
                const timeUntilMeeting = upcomingMeeting.startTime.diff(dayjs() ,"second");

                if(timeUntilMeeting <=0){
                    clearInterval(timer);
                    setNotification("The meeting is starting now!");
                    setTimeout(()=> setNotification("") , 5000);
                }else if(timeUntilMeeting <= 300){
                    setNotification("Meeting with your mentor starts in 5 minutes!");
                }else if(timeUntilMeeting <= 1800){
                    setNotification("Upcoming meeting with your mentor in 30 minutes.");
                }
            } ,1000);

            return()=> clearInterval(timer);
        }
    } ,[upcomingMeeting]);

    const isSlotAvailable = (data , time)=>{
        return mentorSlots.some(
            (slot) => slot.date === date && slot.time === time && !slot.isBooked
        );
    };

    const contextValue ={
        mentorSlots , bookSlot , isSlotAvailable , notification
    };

    return(
        <MentorSlotContext.Provider value={contextValue}>
            {children} {notification && (
                <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg">
                {notification}
              </div>
            )}
        </MentorSlotContext.Provider>
    );
};

export default MentorSlotContext;