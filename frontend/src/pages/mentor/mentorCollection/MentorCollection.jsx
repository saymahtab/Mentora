import React from 'react'
import MentorCollectionSide from './MentorCollectionSide'
import MentorCollectionMain from './MentorCollectionMain'

const MentorCollection = () => {
  return (
    <>
      
      <div className="flex max-w-[74rem] mx-auto relative mt-2 top-[3.2rem] h-[calc(100vh-3.2rem)]">
        <MentorCollectionSide />
        <div className="flex-[4_4_0] h-full min-h-0">
            <MentorCollectionMain />
        </div>
      </div>  
    </>
  )
}

export default MentorCollection
