import { MdOutlineEdit, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineWorkOutline } from "react-icons/md";

const ProfileEditPage = ({ mentor }) => {
  return (
    <div className="flex flex-col flex-1 bg-white ml-3 rounded-lg border px-5 py-3">
      <h2 className="text-2xl font-medium text-zinc-700">Profile</h2>
      <p className="text-zinc-600 border-b pb-3">Manage Profile</p>

      <div className="bg-white rounded-lg border mt-2">
        <div className="relative bg-white rounded-lg">
          <MdOutlineEdit className="absolute right-3 top-3 size-7 bg-slate-200 rounded-full p-1 text-[#0073E6] cursor-pointer" />
          <img
            src="/cover1.png"
            className="w-full h-auto rounded-t-lg"
            alt="Cover"
          />

          <img
            src={mentor.profileImg || "/avatar-placeholder.png"}
            className="h-36 w-36 rounded-full border-[4px] border-white bg-white absolute left-6 bottom-[-3.5rem] cursor-pointer"
            alt="Profile"
          />
        </div>
        <div className="px-10 pb-6 mt-[3.8rem] flex flex-col gap-1 relative border-b">
          <div className="flex items-center gap-1 absolute right-3 top-3 px-4 bg-slate-200 rounded-full p-1 text-[#0073E6] cursor-pointer">
            <MdOutlineEdit className="size-5" />
            Edit
          </div>
          <p className="text-2xl leading-8 font-medium text-zinc-700 mb-1">
            {mentor.firstName} {mentor.lastName}
          </p>
          <div className="mt-3">
            <p className="text-sm text-zinc-500 leading-3">Current Role</p>
            <p className="text-zinc-700">{mentor.currentRole}</p>
          </div>
          <div className="mt-3">
            <p className="text-sm text-zinc-500 leading-3">
              Current Organisation
            </p>
            <p className="text-zinc-700">{mentor.currentOrganization}</p>
          </div>
          <div className="mt-3">
            <p className="text-sm text-zinc-500 leading-3">Current Industry</p>
            <p className="text-zinc-700">{mentor.industry}</p>
          </div>
          <div className="mt-3">
            <p className="text-sm text-zinc-500 leading-3">
              Total years of Experience
            </p>
            <p className="text-zinc-700">{mentor.totalExperience} years</p>
          </div>
          <div className="mt-3">
            <p className="text-sm text-zinc-500 leading-4">Bio</p>
            <p className="leading-5 text-sm text-zinc-700">{mentor.bio}</p>
          </div>
        </div>

        <div className="px-10 py-4 border-b pb-7">
          <p className="font-medium text-xl text-zinc-800">
            Social Media Handles
          </p>
          {mentor.socialLinks.map((link, index) => (
            <div
              key={index}
              className="flex gap-3 items-start border rounded-xl px-3 py-2 mt-2"
            >
              <img
                src={`/social/${link.name}.png`}
                className="h-8 w-8"
                alt={link.name}
              />
              <div className="border-l pl-2">
                <p className="text-xs text-zinc-500">{link.name} Link</p>
                <Link
                  to={{ pathname: link.link }}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {link.link}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="px-10 py-4 border-b relative">
          <div className="flex items-center gap-1 absolute right-3 top-3 px-4 bg-slate-200 rounded-full p-1 text-[#0073E6] cursor-pointer">
            <MdOutlineEdit className="size-5" />
            Edit
          </div>
          <p className="font-medium text-xl text-zinc-800">
            Domain, Topics & Skills
          </p>
          <div className="flex flex-col gap-5 my-5">
            <div className="flex items-center gap-3">
              <span>Domain:</span>
              <p className="text-zinc-600">{mentor.expertise.domain}</p>
            </div>
            <div className="flex items-center gap-3">
              <span>Topics:</span>
              <ul className="flex items-center gap-3">
                {mentor.expertise.topics.map((topic, index) => (
                  <li
                    key={index}
                    className="py-1 px-3 border rounded-full text-zinc-600 "
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-5">
              <span>Skills:</span>
              <ul className="flex items-center gap-3">
                {mentor.expertise.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="py-1 px-3 border rounded-full text-zinc-600"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="px-10 py-4 border-b relative">
        <div className="flex items-center gap-1 absolute right-3 top-3 px-4 bg-slate-200 rounded-full p-1 text-[#0073E6] cursor-pointer">
            <MdOutlineEdit className="size-5" />
            Edit
          </div>
          <p className="font-medium text-xl text-zinc-800">Education Details</p>
          <div className="flex flex-col items-start gap-6 w-full mt-7">
            {mentor.education.map((item) => (
              <div key={item._id} className="flex items-start gap-3 w-full">
                <div className="h-8 w-8 bg-blue-900 text-white text-center pt-1 text-sm">
                  {item.university
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0].toUpperCase())
                    .join("")}
                </div>
                <div className="flex items-start flex-col gap-1">
                  <p className="leading-4">{item.university}</p>
                  <p className="text-xs flex gap-2 items-center">
                    <MdOutlineWorkOutline />
                    {item.from} - {item.to}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-10 py-4 border-b pb-10 relative">
        <div className="flex items-center gap-1 absolute right-3 top-3 px-4 bg-slate-200 rounded-full p-1 text-[#0073E6] cursor-pointer">
            <MdOutlineEdit className="size-5" />
            Edit
          </div>
          <p className="font-medium text-xl text-zinc-800">Experience</p>
          <div className="flex flex-col items-start gap-6 w-full mt-7">
            {mentor.experience.map((item) => (
              <div key={item._id} className="flex items-start gap-3 w-full">
                <div className="h-8 w-8 bg-blue-900 text-white text-center pt-1 text-sm">
                {item.work.split(' ').slice(0, 2).map(word => word[0].toUpperCase()).join('')}
                </div>
                <div className="flex items-start flex-col gap-1">
                  <p className="leading-4">{item.work}</p>
                  <p className="text-xs flex gap-2 items-center">
                    <MdOutlineWorkOutline />
                    {item.from} - {item.to}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPage;
