import React, { useState } from 'react'
import { mentors } from '../../../../utils/db/mentors'
import MentorDetails from './MentorDetails/MentorDetails';
import MentorSidebar from './MentorSidebar/MentorSidebar';
import FilterNav from "../FilterNav/FilterNav";

const MentorCollection = () => {

  const [selectedMentor, setSelectedMentor] = useState(mentors[0]);
  return (
    <div className="max-w-[74rem] mx-auto relative top-[6.5rem] ">
        <FilterNav/>
        <div className='flex mt-6 z-0'>
          <MentorSidebar
            mentors={mentors}
            onSelectMentor={mentor => setSelectedMentor(mentor)}
          />
          <MentorDetails
            mentor={selectedMentor}
            onClose={() => setSelectedMentor(null)}
          />
      </div>
    </div>
  )
}

export default MentorCollection
