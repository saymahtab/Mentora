import React, { useState , useEffect } from "react";
import { POSTS } from "../../../utils/db/dummy";
import { FiPlus } from "react-icons/fi";
import ResModal from "./modals/respnsibilty";
import AboutModal from "./modals/aboutModal";
import SkillModal from "./modals/skillsModal";
import EducationModal from "./modals/educationModal";
import ProjectModal from "./modals/projectModal";
import CertificateModal from "./modals/certificateModal";
import ResearchPaperModal from "./modals/researchModal";

const ProfilePageMain = () => {
  const [myPost, setMyPost] = useState([]);
  const [postCount, setPostCount] = useState(0);
  useEffect(() => {
    setMyPost(POSTS.slice(0, 2));
  }, []);
  const suggestpost = () => {
    const newPostCount = postCount + 2;
    setMyPost(POSTS.slice(0, newPostCount));
    setPostCount(newPostCount);
  };

  //popup box;
  const [isAbout, setIsAbout] = useState(false);
  const openAbout = () => setIsAbout(true);
  const closeAbout = () => setIsAbout(false);

  const [isSkills, setIsSkills] = useState(false);
  const openSkill = () => setIsSkills(true);
  const closeSkill = () => setIsSkills(false);

  const [isResp, setIsResp] = useState(false);
  const openResp = () => setIsResp(true);
  const closeResp = () => setIsResp(false);

  const [isEdu, setIsEdu] = useState(false);
  const openEdu = () => setIsEdu(true);
  const closeEdu = () => setIsEdu(false);

  const [isProject, setIsProject] = useState(false);
  const openProject = () => setIsProject(true);
  const closeProject = () => setIsProject(false);

  const [isCertificates, setIsCertificates] = useState(false);
  const openCertificates = () => setIsCertificates(true);
  const closeCertificates = () => setIsCertificates(false);

  const [isResearch, setIsResearch] = useState(false);
  const openResearch = () => setIsResearch(true);
  const closeResearch = () => setIsResearch(false);




  return (
    <div className="flex-[4_4_0] min-h-screen flex flex-col gap-2">
      <div className="flex flex-col relative">
        <div className="flex flex-col items-start bg-white pt-4 px-6 rounded-t-lg border w-full">
          <p className="font-medium text-xl text-gray-700 leading-6">
            Activity
          </p>
          <div className="absolute right-4">
            <button className="flex gap-1 items-center px-3 py-1 border border-[#0073E6] text-[#0073E6] shadow-inner font-semibold rounded-full">
              <FiPlus />
              Create Post
            </button>
            <button>

            </button>
          </div>
          <p className="text-[#0073E6] text-sm font-medium mb-4">
            906 Followers
          </p>

        <div className="w-full">
            {myPost.length === 0 ? (
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
                      className={
                        index !== myPost.length - 1
                          ? 'flex flex-col gap-3 p-2 border-b'
                          : 'flex flex-col gap-3 p-2'
                      }
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-16">
                          {post.img && (
                            <img
                              src={post.img || '/cover.png'}
                              alt="Post content"
                              className="object-cover w-full h-full rounded-md"
                            />
                          )}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <span className="text-[#1f1f1f] text-sm line-clamp-3">
                            {post.text}
                          </span>
                          <button className="text-[#434343] text-xs mt-1 hover:underline">
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
        <button className="text-center font-medium text-[#5d5d5d] py-2 cursor-pointer hover:bg-[#f9f9f9] bg-[#fff] rounded-b-lg border border-t-0" onClick={suggestpost}>
          Show all
        </button>
      </div>

      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">About</p>
        <p className="text-[0.85rem] text-[#828282]">
          Craft an engaging story in your bio and make meaningful connections
          with peers and recruiters alike!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]" onClick={openAbout}>Add About</button>
        <AboutModal isOpen={isAbout} onClose={closeAbout} />

      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Skills</p>
        <p className="text-[0.85rem] text-[#828282]">
          Tell us about your skills
        </p>
        <button className="text-[#0073E6] text-[0.95rem]" onClick={openSkill}>Add Skills</button>
        <SkillModal isOpen={isSkills} onClose={closeSkill} />

      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Education</p>
        <p className="text-[0.85rem] text-[#828282]">
          Showcase your academic journey and open doors to your dream career
          opportunities!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]" onClick={openEdu}>Add Education</button>
        <EducationModal isOpen={isEdu} onClose={closeEdu} />
      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Responsibilities</p>
        <p className="text-[0.85rem] text-[#828282]">
          Highlight the responsibilities you've mastered to demonstrate your
          leadership and expertise!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]" onClick={openResp}>
          Add Responsibility
        </button>

        {/* Modal component */}
        <ResModal isOpen={isResp} onClose={closeResp} />
      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Certificate</p>
        <p className="text-[0.85rem] text-[#828282]">
          Flaunt your certifications and show recruiters that you're a step
          ahead in your field!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]" onClick={openCertificates} >
          Add Certificate
        </button>
        <CertificateModal isOpen={isCertificates} onClose={closeCertificates} />

      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Projects</p>
        <p className="text-[0.85rem] text-[#828282]">
          Unveil your projects to the world and pave your path to professional
          greatness!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]" onClick={openProject}>Add Project</button>
        <ProjectModal isOpen={isProject} onClose={closeProject} />
      </div>
      <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Research Paper</p>
        <p className="text-[0.85rem] text-[#828282]">
          Broadcast your triumphs and make a remarkable impression on industry
          leaders!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]" onClick={(openResearch)}>
          Add Research Paper
        </button>
        <ResearchPaperModal isOpen={isResearch} onClose={closeResearch} />


      </div>
      {/* <div className="flex flex-col gap-2 items-start bg-white py-3 px-5 rounded-xl border">
        <p className="font-medium text-lg text-[#4c4c4c]">Hobbies</p>
        <p className="text-[0.85rem] text-[#828282]">
          Unearth your hidden passions and connect with like-minded
          professionals and potential employers!
        </p>
        <button className="text-[#0073E6] text-[0.95rem]">Add Hobby</button>
      </div> */}
    </div>
  );
};

export default ProfilePageMain;
