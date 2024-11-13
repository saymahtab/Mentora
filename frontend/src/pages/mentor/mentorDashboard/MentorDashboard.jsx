import React, { useState } from "react";
import { mentors } from "../../../../utils/db/mentors";
import DashboardNav from "./DashboardNav";
import ReviewsPage from "./ReviewsPage";
import ProfileEditPage from "./ProfileEditPage";
import ServicesEditPage from "./ServicesEditPage";
import AvailabilityEditPage from "./AvailabilityEditPage";
import BookingsEditPage from "./BookingsEditPage";
import PaymentsEditPage from "./PaymentsEditPage";
import DashboardPage from "./DashboardPage";

const MentorDashboard = () => {

  const mentor = mentors[0];

  const [activePage, setActivePage] = useState("dashboard");

  const renderActivePage = () => {
    switch (activePage) {
      case "profile":
        return <ProfileEditPage mentor={mentor} />;
      case "services":
        return <ServicesEditPage mentor={mentor} />;
      case "availability":
        return <AvailabilityEditPage mentor={mentor} />;
      case "bookings":
        return <BookingsEditPage mentor={mentor} />;
      case "payments":
        return <PaymentsEditPage mentor={mentor} />;
      case "reviews":
        return <ReviewsPage mentor={mentor} />;
      default:
        return <DashboardPage mentor={mentor} />;
    }
  };

  return (
    <div className="flex max-w-[74rem] mx-auto relative top-[4rem] h-full">
      <DashboardNav mentor={mentor} setActivePage={setActivePage} activePage={activePage} />
      {renderActivePage()}
    </div>
  );
};

export default MentorDashboard;
