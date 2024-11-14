// components/FilterNav.jsx
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import FilterButton from "./FilterButton";
import PopupModal from "./PopupModal";
import SortByModal from "./SortByModal";
import FilterModal from "./FilterModel/FilterModal";
import SkillsModal from "./SkillsModal";
import AvailabilityModal from "./AvailabilityModal";
import MENTORS from "../../../../utils/db/mentors";

const FilterNav = () => {
  const [openPopup, setOpenPopup] = useState(null);

  const togglePopup = (popupType) => {
    setOpenPopup(openPopup === popupType ? null : popupType);
  };

  return (
    <div className="fixed top-[3.2rem] w-full z-10">
      <div className="flex items-center p-3 gap-10 justify-around bg-white relative border">
        <div className="flex items-center gap-5">
          <FilterButton
            label="Sort By"
            icon={<FaAngleDown />}
            isActive={openPopup === "sortBy"}
            onClick={() => togglePopup("sortBy")}
          />

          <FilterButton
            label="Filters"
            icon={<IoFilter />}
            isActive={openPopup === "filters"}
            onClick={() => togglePopup("filters")}
          />

          <FilterButton
            label="Skills"
            icon={<FaAngleDown />}
            isActive={openPopup === "skills"}
            onClick={() => togglePopup("skills")}
          />

          <FilterButton
            label="Availability"
            icon={<FaAngleDown />}
            isActive={openPopup === "availability"}
            onClick={() => togglePopup("availability")}
          />

          <FilterButton
            label="Top Mentors"
            icon={<RiUserStarLine />}
            isActive={openPopup === "topMentors"}
            onClick={() => togglePopup("topMentors")}
          />

          <FilterButton
            label="Free Services"
            icon={<MdOutlineFreeBreakfast />}
            isActive={openPopup === "freeServices"}
            onClick={() => togglePopup("freeServices")}
          />
        </div>

        <div>
          <button className="flex items-center gap-1 border px-4 py-2 rounded-full text-xs bg-[#0073E6] text-white font-medium">
            <BsStars />
            Mentor Match
          </button>
        </div>

        {/* Popup Modals */}
        <PopupModal
          isOpen={openPopup === "sortBy"}
          position="left-44 top-12"
          onClose={() => setOpenPopup(null)}
        >
          <SortByModal />
        </PopupModal>

        <PopupModal
          isOpen={openPopup === "filters"}
          position="left-[17.5rem] top-12"
          onClose={() => setOpenPopup(null)}
        >
          <FilterModal />
        </PopupModal>

        <PopupModal
          isOpen={openPopup === "skills"}
          position="left-[24rem] top-12"
          onClose={() => setOpenPopup(null)}
        >
          <SkillsModal />
        </PopupModal>

        <PopupModal
          isOpen={openPopup === "availability"}
          position="left-[30rem] top-12"
          onClose={() => setOpenPopup(null)}
        >
          <AvailabilityModal />
        </PopupModal>
      </div>
    </div>
  );
};

export default FilterNav;
