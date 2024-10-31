import React from 'react'
import MentorCollectionSide from '../../components/mentor/mentorCollection/MentorCollectionSide'
import MentorCollectionMain from '../../components/mentor/mentorCollection/MentorCollectionMain'

const MentorCollection = () => {
  return (
    <div className="flex max-w-[74rem] mx-auto mt-2 relative top-[3.2rem]">
        <MentorCollectionSide />
        <div className="flex-[4_4_0] min-h-screen">
            <MentorCollectionMain />
        </div>
    </div>
  )
}

export default MentorCollection
