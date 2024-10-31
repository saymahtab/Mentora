import React from "react";
import { POSTS } from "../../../utils/db/dummy";
import { FiPlus } from "react-icons/fi";

const ProfilePageMain = () => {
  const myPost = POSTS.slice(2,6);


  return (
    <div className="flex-[4_4_0] min-h-screen flex flex-col gap-2">
      <div className="flex flex-col relative">
        <div className="flex flex-col items-start bg-white pt-4 px-6 rounded-t-lg border w-full">
          <p className="font-medium text-xl text-gray-700 leading-6">
            Activity
          </p>
          <div className="absolute right-4">
            <button className="flex gap-1 items-center px-3 py-1 border border-[#0073E6] text-[#0073E6] shadow-inner font-semibold rounded-full">
                <FiPlus/>
                Create Post
            </button>
            <button>
                
            </button>
          </div>
          <p className="text-[#0073E6] text-sm font-medium mb-4">
            906 Followers
          </p>

          <div className="w-full">
            {!myPost ? (
              <p className="text-sm text-gray-500">
                No post yet. Create a post to share with your connections.
              </p>
            ) : (
              <>
                <div className="flex gap-2 mb-4">
                  <button className="px-3 py-1 border border-[#01754F] text-white bg-[#01754F] font-semibold rounded-full">
                    Posts
                  </button>
                  <button className="px-3 py-1 border border-[#01754F] text-[#01754F] font-semibold rounded-full">
                    Videos
                  </button>
                  <button className="px-3 py-1 border border-[#01754F] text-[#01754F] font-semibold rounded-full">
                    Comments
                  </button>
                </div>

                {/* Posts section */}
                <div className="space-y-2">
                  {myPost.map((post, index) => (
                    <div
                      key={index}
                      className={index!=myPost.length - 1 ? "flex flex-col gap-3 p-2  border-b":"flex flex-col gap-3 p-2 "}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-16">
                          {post.img && (
                            <img
                              src={post.img || "/cover.png"}
                              alt="Post content"
                              className="object-cover w-full h-full rounded-md"
                            />
                          )}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <span
                            className={`text-[#1f1f1f] text-sm line-clamp-3`}
                          >
                            {post.text}
                          </span>
                          
                            <button
                              className="text-[#434343] text-xs mt-1 hover:underline"
                            >
                              Show More
                            </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
                        <p>❤️ {post.likes.length} likes</p>
                        <p>{post.comments.length} comments</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="text-center font-medium text-[#5d5d5d] py-2 cursor-pointer hover:bg-[#f9f9f9] bg-[#fff] rounded-b-lg border border-t-0">
          Show all
        </div>
      </div>

      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">About</p>
        <p className="text-[0.85rem] text-[#828282]">
          Craft an engaging story in your bio and make meaningful connections
          with peers and recruiters alike!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]">Add About</button>
      </div>

      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">About</p>
        <p className="text-[0.85rem] text-[#828282]">
          Craft an engaging story in your bio and make meaningful connections
          with peers and recruiters alike!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]">Add About</button>
      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Skills</p>
        <p className="text-[0.85rem] text-[#828282]">
          Tell us about your skills
        </p>
        <button className="text-[#0073E6] text-[0.95rem]">Add Skills</button>
      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Education</p>
        <p className="text-[0.85rem] text-[#828282]">
          Showcase your academic journey and open doors to your dream career
          opportunities!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]">Add Education</button>
      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Responsibilities</p>
        <p className="text-[0.85rem] text-[#828282]">
          Highlight the responsibilities you've mastered to demonstrate your
          leadership and expertise!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]">
          Add Responsibility
        </button>
      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Certificate</p>
        <p className="text-[0.85rem] text-[#828282]">
          Flaunt your certifications and show recruiters that you're a step
          ahead in your field!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]">
          Add Certificate
        </button>
      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Projects</p>
        <p className="text-[0.85rem] text-[#828282]">
          Unveil your projects to the world and pave your path to professional
          greatness!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]">Add Project</button>
      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Achievements</p>
        <p className="text-[0.85rem] text-[#828282]">
          Broadcast your triumphs and make a remarkable impression on industry
          leaders!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]">
          Add Achievement
        </button>
      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Hobbies</p>
        <p className="text-[0.85rem] text-[#828282]">
          Unearth your hidden passions and connect with like-minded
          professionals and potential employers!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]">Add Hobby</button>
      </div>
    </div>
  );
};

export default ProfilePageMain;
