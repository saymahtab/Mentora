import React from 'react'
import { Link } from 'react-router-dom'
import { BsStars } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineConnectedTv } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

const MentorPageSidebar = () => {
  return (
    <div className='flex-[2_2_0] rounded-xl relative'>
        <div className='flex flex-col rounded-lg bg-white border'>
            <div className='hover:bg-[#f5f5f5] py-4 mt-2'>
                <Link to='/' className='flex items-center gap-2 text-[#404040] pl-3'>
                    <BsStars className='size-5'/>
                    <p className='font-medium'>Find mentors with AI</p>
                </Link>
            </div>
            <div className='hover:bg-[#f5f5f5] py-4'>
                <Link to='/' className='flex items-center gap-2 text-[#404040] pl-3'>
                    <MdSpaceDashboard className='size-5'/>
                    <p className='font-medium'>Mentor Dashboard</p>
                </Link>
            </div>
            <div className='hover:bg-[#f5f5f5] py-4'>
                <Link to='/' className='flex items-center gap-2 text-[#404040] pl-3'>
                    <MdOutlineConnectedTv className='size-5'/>
                    <p className='font-medium'>Mentor Connect</p>
                </Link>
            </div>
            <div className='hover:bg-[#f5f5f5] py-4'>
                <Link to='/' className='flex items-center gap-2 text-[#404040] pl-3'>
                    <FaCalendarAlt className='size-5'/>
                    <p className='font-medium'>My Sessions</p>
                </Link>
            </div>
        </div>
        <div className='pt-3 px-5 rounded-lg bg-white border pb-3 mt-2'>
            <p className="text-[#404040] font-medium mb-1">Help Others Grow!</p>
            <p className="text-[#767575] mb-2 font-normal">Join our mentor community and help mentees grow and succeed.</p>
            <button className="font-medium text-[#0073E6]">Become a mentor</button>
        </div>
    </div>
  )
}

export default MentorPageSidebar
