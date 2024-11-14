import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
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
import MentorDashboard from "./pages/mentor/mentorDashboard/mentorDashboard";
import Lobby from "./pages/videoChat/lobby/index";
import Room from "./pages/videoChat/room/index";
import SessionStatsProgress from "./components/booking/sessionStats";


function App() {
  const login = true;

  function MainLayout() {
    return (
      <div className="bg-[#F6F6F6] min-h-screen ">
        <NavBar />
        <Outlet />
      </div>
    );
  }

  return (
    <MentorSlotProvider>
      <Routes>
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={login ? <HomePage /> : <Welcome />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/mentor" element={<MentorPage />} />
          <Route path="/mentor/collection" element={<MentorCollection />} />
          <Route path="/mentor/dashboard" element={<MentorDashboard />} />
          <Route path="/booking" element={<MentorBooking />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/booking" element={<MentorBooking />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/session" element={<SessionStatsProgress />} />
          {/* <Route path="/previous" element={<PreviousSessions/>} /> */}
        </Route>
      </Routes>
    </MentorSlotProvider>
  );
}

export default App;