import { useState } from 'react';
import MentorProfileCard from './MentorProfileCard';
import MentorServices from './MentorServices';
import MentorAbout from './MentorAbout';
import Reviews from './Reviews';
import MentorTopics from './MentorTopics';
import MentorLanguage from './MentorLanguage';
import Education from './Education';
import Experience from './Experience';

const MentorDetails = ({ mentor, onClose }) => {

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='flex flex-col  ml-[26.4rem]  '>
        <MentorProfileCard isLiked={isLiked} toggleLike = {toggleLike} mentor={mentor}/>
        <MentorServices mentor={mentor}/>
        <MentorAbout mentor={mentor}/>
        <Reviews mentor={mentor}/>
        <MentorTopics mentor={mentor} />
        <MentorLanguage mentor={mentor} />
        <Education mentor={mentor} />
        <Experience mentor={mentor} />
    </div>
  )
}

export default MentorDetails
