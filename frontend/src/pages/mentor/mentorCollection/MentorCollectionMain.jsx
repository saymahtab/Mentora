import React from "react";
import { Link } from "react-router-dom";
import { mentors } from "../../../../utils/db/mentors";
import {
  FaClock,
  FaBriefcase,
  FaCalendarAlt,
  FaHourglassHalf,
  FaStar,
  FaHeart,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdOutlineWorkOutline } from 'react-icons/md';
import { IoSchoolSharp } from "react-icons/io5";

const MentorCollectionMain = () => {
  const Mentor = mentors[0];

  return (
    <div className="bg-[#F6F6F6]] rounded-lg ml-2 h-full max-h-full">
      <div className="overflow-y-auto h-full scroll">
        <section className="flex items-start flex-col px-6 py-6 bg-white rounded-lg border">
          <div className="avatar">
            <Link to={`/profile/${Mentor.profile.username}`} className="flex w-24">
              <img
                src={Mentor.profile.profileImg || "/avatar-placeholder.png"}
                className="cursor-pointer rounded-md"
              />
            </Link>
          </div>
          <article className="mt-3 flex flex-col gap-2 text-[#383838] w-full">
            <h2 className="text-3xl font-semibold text-zinc-700">
              {Mentor.profile.firstName} {Mentor.profile.lastName}
            </h2>
            <p className="font-normal">{Mentor.profile.bio}</p>
            <div className="flex gap-4 items-center text-[0.9rem] border-b pb-5">
              <p className="flex items-center gap-1">
                <FaClock className="text-zinc-500" />{Mentor.profile.totalExperience} years
              </p>
              <p className="flex items-center gap-1">
                <FaBriefcase className="text-zinc-500" />
                {Mentor.profile.industry}
              </p>
              <p className="flex items-center gap-1">
                <FaCalendarAlt className="text-zinc-500" />
                {Mentor.totalSessions} Bookings
              </p>
              <p className="flex items-center gap-1">
                <FaHourglassHalf className="text-zinc-500" />
                {Mentor.totalDuration} Mentoring Mins
              </p>
              <p className="flex items-center gap-1">
                <FaStar className="text-zinc-500" />
                {Mentor.totalReviews} Reviews
              </p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-4">
                <span className="border-r pr-4">
                  <FaHeart className="text-zinc-500 size-5 cursor-pointer" />
                </span>
                <span className="flex gap-3 text-zinc-500">
                  <FaInstagram className="size-5 cursor-pointer" />
                  <FaLinkedin className="size-5 cursor-pointer" />
                </span>
              </div>

              <div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  View profile
                </button>
              </div>
            </div>
          </article>
        </section>

        <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700">
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          {Mentor.services.map((service, index) => (
            <div key={index} className="px-4 py-3 border w-full rounded-2xl mt-2">
              <span className="bg-[#FCE8EF] px-4 text-sm py-1 rounded-full text-[#6E1434] font-medium">
                1:1 Call
              </span>
              <div className="flex items-start justify-between p-1 mt-2">
                <div className="flex flex-col items-start">
                  <p className="text-xl font-normal">{service.name}</p>
                  <p className="text-[#626262]">{service.duration} min</p>
                  <p className="mt-2 font-medium text-xl text-[#474747]">${service.price}</p>
                </div>
                <button className="px-4 py-2 border border-[#626262] rounded-full">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700">
          <h2 className="text-xl font-semibold mb-4">About Mentor</h2>
          <p>{Mentor.profile.bio}</p>
        </section>

        <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700 w-full relative pb-10">
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col items-center border rounded-3xl py-7 px-12">
              <p className="text-5xl font-semibold">{Mentor.avgRating}</p>
              <div className="flex items-center gap-2 mt-2">
                <FaStar className="text-[#ffdc13]" />
                <FaStar className="text-[#ffdc13]" />
                <FaStar className="text-[#ffdc13]" />
                <FaStar className="text-[#ffdc13]" />
                <FaStar className="text-[#cfcfcf]" />
              </div>
              <p className="text-[#6b6b6b]">Average Rating</p>
              <p className="text-[#6b6b6b]">{Mentor.totalReviews} Reviews</p>
            </div>
            <div className="p-5 flex flex-col items-start gap-6 w-full border rounded-3xl ml-3 text-[#4b4b4b] mb-3">
            {Mentor.reviews.map(review => (
              <div className="flex items-start flex-col border-b w-full">
              <div className="flex items-start justify-between pb-1 w-full">
                <div className="flex gap-3 items-start">
                  <div className="flex w-11" >
                    <img
                      src={Mentor.profile.profileImg || "/avatar-placeholder.png"}
                      className="cursor-pointer rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-md font-medium leading-4">{review.menteeName}</p>
                    <p className="text-xs text-[#595959] mt-1">07 Nov 24, 08:47 PM IST</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 bg-green-700 rounded-md px-2 text-sm font-medium text-white">
                  {review.rating} 
                  <FaStar  className="size-3"/>
                </span>
              </div>
              <p className="text-[#757575] pb-3">{review.message}</p>
            </div>
            ))}
            </div>
          </div>  
          <button className="text-[#0073E6] font-medium absolute bottom-5 left-64">Show More</button>
        </section>

        <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700">
          <h2 className="text-xl font-semibold mb-4">Topics</h2>
          <div className="flex flex-wrap items-start gap-2">
            {Mentor.expertise.topics.map(topic => (
              <p className="border rounded-full px-4 py-1 text-[#777]">{topic}</p>
            ))}
          </div>
        </section>

        <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700">
          <h2 className="text-xl font-semibold mb-4">Fluent in</h2>
          <div className="flex flex-wrap items-start gap-2">
            {Mentor.profile.languages.map(language => (
              <p className="border rounded-full px-4 py-1 text-[#777]">{language}</p>
            ))}
          </div>
        </section>

        <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 bg-blue-900 text-white text-center pt-1 text-sm">
                  SH
              </div>
              <div className="flex items-start flex-col gap-1">
                <p className="leading-3 text-sm ">ESCP Business School, Berlin campus, Berlin, Germany</p>
                <p className="text-sm mt-1 flex gap-2 items-center">
                <IoSchoolSharp className="size-4"/>
                PGDM-IB
                </p>
                <p className="text-sm flex gap-2 items-center">
                  <MdOutlineWorkOutline />
                  2022 - 2024</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-5">
              <div className="h-8 w-8 bg-blue-900 text-white text-center pt-1 text-sm">
                  MH
              </div>
              <div className="flex items-start flex-col gap-1">
                <p className="leading-3 text-sm ">Maharaja Sayajirao University of Baroda (MSU), Vadodara</p>
                <p className="text-sm mt-1 flex gap-2 items-center">
                <IoSchoolSharp className="size-4"/>
                  MiM
                </p>
                <p className="text-sm flex gap-2 items-center">
                  <MdOutlineWorkOutline />
                  2022 - 2024</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700">
          <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 bg-blue-900 text-white text-center pt-1 text-sm">
                  PI
              </div>
              <div className="flex items-start flex-col gap-1">
                <p className="leading-3 text-sm ">Strategic Global Project Intern</p>
                <p className="text-sm mt-1 flex gap-2 items-center">
                <IoSchoolSharp className="size-4"/>
                  Ebay
                </p>
                <p className="text-sm flex gap-2 items-center">
                  <MdOutlineWorkOutline />
                  2022 - 2024</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-5">
              <div className="h-8 w-8 bg-blue-900 text-white text-center pt-1 text-sm">
                  Larsen
              </div>
              <div className="flex items-start flex-col gap-1">
                <p className="leading-3 text-sm ">Business Developer</p>
                <p className="text-sm mt-1 flex gap-2 items-center">
                <IoSchoolSharp className="size-4"/>
                  MiM
                </p>
                <p className="text-sm flex gap-2 items-center">
                  <MdOutlineWorkOutline />
                  2022 - 2024</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MentorCollectionMain;
