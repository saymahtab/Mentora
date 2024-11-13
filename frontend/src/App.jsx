import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import HomePage from "./pages/home/HomePage";
import NavBar from "./components/common/NavBar";
import ProfilePage from "./pages/profile/ProfilePage";
import MentorPage from "./pages/mentor/MentorPage/MentorPage";
import MentorCollection from "./pages/mentor/MentorCollection/MentorCollection";
import { MentorSlotProvider } from "./components/context/mentorBookingContext";
import MentorBooking from "./components/booking/mentorBooking";

//videos 
import Lobby from "../src/pages/lobby/index";
import Room from "../src/pages/room/index";


function App() {
  const login = true;

  return (
    < MentorSlotProvider >
      <div className="bg-[#F6F6F6] min-h-screen pt-6 pb-10">
        <NavBar />
        <Routes>
          <Route path="/" element={login ? <HomePage /> : <Welcome />} />
          <Route path="/mentor" element={ <MentorPage /> } />
          <Route path="/mentor/collection" element={ <MentorCollection /> } />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/booking" element={<MentorBooking />} />
          <Route path="/lobby" element={<Lobby/>}/>
          <Route path="/room/:roomId" element={<Room/>}/>
        </Routes>
      </div>
    </ MentorSlotProvider>
  );
}

export default App;
