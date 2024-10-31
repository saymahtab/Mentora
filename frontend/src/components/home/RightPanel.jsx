import { Link } from "react-router-dom";
import { USER } from "../../../utils/db/dummy"
import RightPanelSkeleton from "../skeletons/RightPanelSkeleton";
import { FiPlus } from 'react-icons/fi';

const RightPanel = () => {

  const isLoading = false;

  const suggestedUsers = USER.slice(0,3);

  return (
    <div className='hidden lg:block mx-2 w-[20rem]'>

          <div className='pt-3 px-5 rounded-lg bg-white border pb-3 mb-2'>
            <p className="text-[#4f4f4f] font-medium mb-1">Help Others Grow!</p>
            <p className="text-[#767575] mb-2 font-normal">Join our mentor community and help mentees grow and succeed.</p>
            <button className="font-medium text-[#0073E6]">Become a mentor</button>
          </div>

          <div className='sticky top-[3.7rem] pt-3 px-5 rounded-lg bg-white border'>
            <p className='font-semibold text-xl text-[#454545]'>Popular</p>
            <div className='flex flex-col gap-4 mt-4'>
                {isLoading && (
                            <>
                                <RightPanelSkeleton />
                                <RightPanelSkeleton />
                                <RightPanelSkeleton />
                                <RightPanelSkeleton />
                            </>
                )}
                {!isLoading && (
                    suggestedUsers.map((user, index) => (
                        <div
                          key={user._id}
                          className={`flex flex-col items-start justify-between gap-4 pb-5 ${
                            index !== suggestedUsers.length - 1 ? 'border-b' : ''
                          }`}
                        >
                            <div className='flex gap-3 items-start'>
                                <div className='avatar'>
                                  <Link to={`/profile/${user.username}`}>
                                    <div className='w-11'>
                                        <img src={user.profileImg || "/avatar-placeholder.png"} className="rounded-full" />
                                    </div>
                                  </Link>
                                </div>

                                <div className="flex flex-col gap-2 items-start">
                                <Link to={`/profile/${user.username}`}>
                                  <div className='flex flex-col'>
                                      <span className='font-semibold w-full leading-[1.4rem]'>{user.firstName} {user.lastName}</span>
                                      <span className='text-[0.92rem] text-[#575757] w-full leading-[1.21rem] overflow-hidden '>
                                        {user.bio}
                                      </span> 
                                  </div>
                                </Link>
                                  <button
                                    className='flex items-center gap-1 rounded-full border border-black px-3 font-medium text-[#3e3e3e] py-[0.15rem] transition-all duration-300 hover:shadow-[inset_0_0_0_1px_black]'
                                    onClick={(e) => {
                                      e.preventDefault();
                                    }}
                                  >
                                    <FiPlus /> {/* Plus Icon */}
                                    Follow
                                  </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="my-3">
              <p className="text-[#0073E6] font-medium cursor-pointer">Show more</p>
            </div>
           </div>
        </div>
  )
}

export default RightPanel
