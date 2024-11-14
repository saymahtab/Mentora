import { mentors } from '../../../../utils/db/mentors';
import { FaGraduationCap, FaBriefcase, FaComments, FaUser, FaStar } from 'react-icons/fa';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";

const MentorProfile = () => {

  const Mentor = mentors[0]

  return (
    <>
      <div className='bg-gray-50 min-h-screen'>
        
        {/* Mentor Profile Banner  */}
        <div className='w-full h-[300px] bg-gradient-to-r from-teal-500 to-green-500'>

        </div>

        {/* Mentor Profile page */}
        <div className='flex max-w-[74rem] mx-auto mt-[-10rem]'>

          {/* Mentor Profile Sidebar  */}
          <div className='flex flex-col w-[32%] gap-2'>
            <div className='bg-white flex flex-col items-center justify-center p-6 rounded-xl gap-2 shadow-sm border'>
                <img 
                  src={Mentor.profile.profileImg} 
                  className='h-32 w-32 rounded-full' 
                />
                <div className='flex items-center gap-2'>
                  <p className='text-2xl font-semibold text-gray-700'>
                    {Mentor.profile.firstName} {Mentor.profile.lastName}
                  </p>
                  <span className='flex items-center gap-1 text-gray-500 mt-[0.2rem]'>
                    <MdOutlineStarPurple500 className="text-yellow-400 text-lg" />
                    {Mentor.avgRating}
                  </span>
                </div>
                <p className='text-gray-500 text-center'>{Mentor.profile.bio}</p>
                <p className='flex items-center gap-2 text-gray-700'>
                  <FaBriefcase className='text-gray-400'/>
                  {Mentor.profile.totalExperience} years of Experience
                </p>
                <div className='flex items-center gap-3 mt-4'>
                  <PiInstagramLogoFill className='text-4xl text-teal-500 cursor-pointer border p-1 rounded-lg'/>
                  <FaFacebookSquare className='text-[2.1rem] text-teal-500 cursor-pointer border p-1 rounded-lg'/>
                  <IoLogoLinkedin className='text-[2.4rem] text-teal-500 cursor-pointer border p-1 rounded-lg'/>
                  <PiShareFatLight className='text-[2.4rem] cursor-pointer border p-1 rounded-lg'/>
                </div>
            </div>
          </div>

          {/* Mentor Details  */}
          <div className='bg-white flex flex-[4_4_0] ml-2 rounded-lg'>

          </div>

        </div>

      </div>
    </>
  );
};
//     <div className="min-h-screen bg-gray-50">
      
//       {/* Banner Section */}
//       <div className="w-full h-[300px] bg-gradient-to-r from-teal-500 to-green-500 flex flex-col items-center justify-center text-white text-center">
//         <h1 className="text-4xl font-bold">Yash Patel</h1>
//         <p className="text-lg font-medium mt-2">Strategy Manager | Mentor | Career Guide</p>
//       </div>

//       {/* Profile Information */}
//       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-[-4rem] p-8 text-center">
//         <img
//           src="https://via.placeholder.com/120"
//           alt="Mentor"
//           className="w-24 h-24 rounded-full mx-auto border-4 border-green-500 mb-4"
//         />
//         <p className="text-gray-700 text-sm">
//           I am a strategy expert with over 4 years of experience in guiding professionals and students. Let’s work together to achieve your career goals!
//         </p>
//       </div>

//       {/* Icon-Based Sections */}
//       <div className="max-w-3xl mx-auto mt-6 p-4 space-y-6">
        
//         {/* About Section */}
//         <div className="flex items-start bg-white rounded-lg shadow-md p-4">
//           <FaUser className="text-teal-500 text-3xl mr-4" />
//           <div>
//             <h3 className="text-xl font-bold text-gray-800">About Me</h3>
//             <p className="text-gray-600">
//               Passionate about mentoring and helping others succeed. I specialize in strategy, case studies, and career planning.
//             </p>
//           </div>
//         </div>

//         {/* Experience Section */}
//         <div className="flex items-start bg-white rounded-lg shadow-md p-4">
//           <FaBriefcase className="text-teal-500 text-3xl mr-4" />
//           <div>
//             <h3 className="text-xl font-bold text-gray-800">Experience</h3>
//             <p className="text-gray-600">
//               4+ years as a Strategy Manager with experience in various industries. Worked at top companies including eBay & L&T.
//             </p>
//           </div>
//         </div>

//         {/* Education Section */}
//         <div className="flex items-start bg-white rounded-lg shadow-md p-4">
//           <FaGraduationCap className="text-teal-500 text-3xl mr-4" />
//           <div>
//             <h3 className="text-xl font-bold text-gray-800">Education</h3>
//             <p className="text-gray-600">
//               MBA in Strategy & Business Management from a reputed institution. Active participant in national competitions.
//             </p>
//           </div>
//         </div>

//         {/* Testimonials Section */}
//         <div className="flex items-start bg-white rounded-lg shadow-md p-4">
//           <FaComments className="text-teal-500 text-3xl mr-4" />
//           <div>
//             <h3 className="text-xl font-bold text-gray-800">Testimonials</h3>
//             <p className="text-gray-600 italic">
//               "Yash helped me greatly in strategizing my career. His guidance was invaluable!" - Satisfied Client
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

export default MentorProfile;
