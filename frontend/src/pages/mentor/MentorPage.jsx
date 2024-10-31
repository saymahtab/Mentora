import React from 'react'
import MentorPageSidebar from '../../components/mentor/mentorPage/MentorPageSidebar'
import MentorPageMain from '../../components/mentor/mentorPage/MentorPageMain'
import MentorPagePanel from '../../components/mentor/mentorPage/MentorPagePanel'

const MentorPage = () => {
  return (
    <>
      <div className="flex max-w-[74rem] mx-auto mt-2 relative top-[3.2rem]">
        <MentorPageSidebar />
        <div className="flex-[4_4_0] min-h-screen">
            <MentorPageMain />
        </div>
        <MentorPagePanel />
      </div>
    </>
  )
}

export default MentorPage
