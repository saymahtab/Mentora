import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import HomePage from "./pages/home/HomePage";
import NavBar from "./components/common/NavBar";
import ProfilePage from "./pages/profile/ProfilePage";
import MentorPage from "./pages/mentor/MentorPage/MentorPage";
<<<<<<< HEAD
import MentorCollection from "./pages/mentor/MentorCollection/MentorCollection";
import { MentorSlotProvider } from "./components/context/mentorBookingContext";
import MentorBooking from "./components/booking/mentorBooking";

//videos 
import Lobby from "../src/pages/lobby/index";
import Room from "../src/pages/room/index";

=======
import MentorCollection from "./pages/mentor/mentorCollection/MentorCollection";
>>>>>>> 34a95bfbec02b7abed56f03a6a88e4b4f745f00c

function App() {
  const login = true;

<<<<<<< HEAD
  return (
    < MentorSlotProvider >
      <div className="bg-[#F6F6F6] min-h-screen pt-6 pb-10">
=======
  function MainLayout() {
    return (
      <div className="bg-[#F6F6F6] min-h-screen">
>>>>>>> 34a95bfbec02b7abed56f03a6a88e4b4f745f00c
        <NavBar />
        <Outlet /> 
      </div>
    );
  }
  

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={login ? <HomePage /> : <Welcome />} />
          <Route path="/mentor" element={<MentorPage />} />
          <Route path="/mentor/collection" element={<MentorCollection />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
<<<<<<< HEAD
          <Route path="/booking" element={<MentorBooking />} />
          <Route path="/lobby" element={<Lobby/>}/>
          <Route path="/room/:roomId" element={<Room/>}/>
        </Routes>
      </div>
    </ MentorSlotProvider>
=======
        </Route>
    </Routes>
    </>
>>>>>>> 34a95bfbec02b7abed56f03a6a88e4b4f745f00c
  );
}

export default App;
