import React, {useState} from 'react'
import { mentors } from '../../../../utils/db/mentors'
import MentorDetails from './MentorDetails/MentorDetails';
import MentorSidebar from './MentorSidebar/MentorSidebar';
import FilterNav from '../FilterNav/FilterNav';

const MentorCollection = () => {

  const [selectedMentor, setSelectedMentor] = useState(mentors[0]);

  return (
    <>
      <FilterNav />
      <div className='flex max-w-[74rem] mx-auto relative top-[7.3rem]'>
        <MentorSidebar 
          mentors={mentors}
          onSelectMentor={mentor => setSelectedMentor(mentor)}
        />

        <MentorDetails
          mentor={selectedMentor}
          onClose={() => setSelectedMentor(null)}
        />
      </div>
    </>
  )
}

export default MentorCollection
